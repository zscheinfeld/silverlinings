# app.py ------------------------------------------------------------
from typing import List, Union
from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, validator
import numpy as np
import pandas as pd
import pickle
import pathlib

# ---------- load the interpolants once at start-up ----------------
model_path = pathlib.Path(__file__).parent / "models"

# I don't have the NPV interpolant, uncomment this to make use of this.
with open(model_path / "interpolant_NPV.pkl", "rb") as f:
    interp_NPV = pickle.load(f)

with open(model_path / "interpolant_avg_diff.pkl", "rb") as f:
    interp_avg = pickle.load(f)

with open(model_path / "interpolant_pop_diffs_2050.pkl", "rb") as f:
    interp_pop = pickle.load(f)

# ---------- request / response schema -----------------------------
ScalarOrList = Union[float, List[float]]

class Inputs(BaseModel):
    age_effect:     ScalarOrList = 40.0
    initial_effect: ScalarOrList = 10.0
    final_effect:   ScalarOrList = 10.0
    mort_effect:    ScalarOrList = 0.2
    prod_effect:    ScalarOrList = 0.7
    fert_effect:    ScalarOrList = 0.0
    discount_rate:  ScalarOrList = 0.0

    # force everything to list internally so validation happens once
    @validator("*", pre=True)
    def _to_list(cls, v):
        return v if isinstance(v, list) else [v]

class Outputs(BaseModel):
    NPV:             List[float]
    pop_diffs_2050:  List[float]
    avg_diff:        List[float]

# ---------- convenience helpers -----------------------------------
def _broadcast_or_400(arrays):
    """Broadcast scalar-lists to common length or raise 400."""
    lengths = [len(a) for a in arrays]
    max_len = max(lengths)

    out = []
    for a, L in zip(arrays, lengths):
        if L == 1 and max_len > 1:
            out.append(a * max_len)          # repeat scalar value
        elif L == max_len:
            out.append(a)
        else:
            raise HTTPException(
                status_code=400,
                detail="All list inputs must be length 1 or the same length."
            )
    return out, max_len

# Function to select data
def select_data(df, output_variables):
    if "NPV" == output_variables:
        input_variables = [
            "age_effect",
            "initial_effect",
            "final_effect",
            "mort_effect",
            "prod_effect",
            "fert_effect",
            "discount_rate",
        ]
    elif "pop_diffs_2050" == output_variables:
        input_variables = [
            "age_effect",
            "initial_effect",
            "final_effect",
            "mort_effect",
            "fert_effect",
        ]
    elif "avg_diff" == output_variables:
        input_variables = [
            "age_effect",
            "initial_effect",
            "final_effect",
            "mort_effect",
            "prod_effect",
            "fert_effect",
        ]
    else:
        print("No valid output variable selected")
    # Depending on the sample, there may be duplicates because, e.g.,
    # the discount rate doesn't affect the population changes
    return df[input_variables].values

# ---------- create the FastAPI instance ---------------------------
app = FastAPI(title="My Interpolant Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve the SPA root (GET /) → index.html
@app.get("/", response_class=HTMLResponse)
async def index():
    return FileResponse("index.html")

@app.post("/predict", response_model=Outputs)
def predict(data: Inputs):
    # 1. Collect and broadcast inputs
    fields = [
        data.age_effect, data.initial_effect, data.final_effect,
        data.mort_effect, data.prod_effect, data.fert_effect,
        data.discount_rate
    ]
    arrays, n = _broadcast_or_400(fields)

    # 2. Build the X matrix expected by your interpolators
    df = pd.DataFrame(np.column_stack(arrays))
    df.columns = [
        'age_effect', 'initial_effect', 'final_effect', 'mort_effect',
        'prod_effect', 'fert_effect', 'discount_rate'
    ]

    # 3. Call the three interpolators (each returns ndarray of shape (n,))
    npv            = interp_NPV(select_data(df, 'NPV')).ravel()
    avg            = interp_avg(select_data(df, 'avg_diff')).ravel()
    pop_diffs_2050 = interp_pop(select_data(df, 'pop_diffs_2050')).ravel()

    # 4. Some interpolators return masked or NaN for extrapolation—clean up
    npv   = np.nan_to_num(npv,   nan=float("nan")).tolist()
    avg   = np.nan_to_num(avg,   nan=float("nan")).tolist()
    pop   = np.nan_to_num(pop_diffs_2050, nan=float("nan")).tolist()

    return Outputs(NPV=npv, pop_diffs_2050=pop, avg_diff=avg)

# ------------------------------------------------------------------
# To run locally (hot reload):
#     uvicorn app:app --reload
# ------------------------------------------------------------------
