# app.py ------------------------------------------------------------
from typing import List, Union
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, validator
import numpy as np
import joblib
import pathlib
import time
import logging

# Set up logging instead of print statements
logger = logging.getLogger(__name__)

# Declare globals for later assignment
interp_NPV = None
interp_avg = None
interp_pop = None


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

# Pre-compute column indices for efficient selection
# Column order: age_effect, initial_effect, final_effect, mort_effect, prod_effect, fert_effect, discount_rate
COLUMN_INDICES = {
    'NPV': [0, 1, 2, 3, 4, 5, 6],  # All 7 columns
    'total_pop_diff_2050': [0, 1, 2, 3, 5],  # age, initial, final, mort, fert (no prod, no discount)
    'avg_diff': [0, 1, 2, 3, 4, 5],  # All except discount_rate
}

def select_data(X, output_variables):
    """Select relevant columns from input array X based on output variable type.
    
    Args:
        X: numpy array of shape (n_samples, 7) with columns:
           [age_effect, initial_effect, final_effect, mort_effect, prod_effect, fert_effect, discount_rate]
        output_variables: str, one of 'NPV', 'total_pop_diff_2050', 'avg_diff'
    
    Returns:
        numpy array with selected columns
    """
    indices = COLUMN_INDICES.get(output_variables)
    if indices is None:
        raise ValueError(f"Invalid output_variables: {output_variables}")
    return X[:, indices]

# ---------- create the FastAPI instance ---------------------------
app = FastAPI(title="My Interpolant Service")

# Add health endpoint check
@app.get('/health')
def health_check():
    return {'status': 'healthy'}

# Startup event to load models
@app.on_event("startup")
def load_models():
    global interp_NPV, interp_avg, interp_pop
    model_path = pathlib.Path(__file__).parent / "models"

    try:
        t0 = time.time()
        interp_NPV = joblib.load(model_path / "interpolant_NPV.joblib", mmap_mode='r')
        interp_avg = joblib.load(model_path / "interpolant_avg_diff.joblib", mmap_mode='r')
        interp_pop = joblib.load(model_path / "interpolant_total_pop_diffs_2050.joblib", mmap_mode='r')
        logger.info(f"Loaded models in {time.time() - t0:.2f}s")
    except FileNotFoundError as e:
        logger.warning(f"Could not load models: {e}")
        logger.warning("App will start but /predict endpoint will not work until models are available")


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "https://profound-brioche-f9933d.netlify.app",
        "https://silverlinings.bio"
        ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict", response_model=Outputs)
def predict(data: Inputs):
    global interp_NPV, interp_avg, interp_pop
    
    # Check if models are loaded
    if interp_NPV is None or interp_avg is None or interp_pop is None:
        raise HTTPException(
            status_code=503,
            detail="Models not loaded. Please ensure model files are available in the models directory."
        )
    
    # 1. Collect and broadcast inputs
    fields = [
        data.age_effect, data.initial_effect, data.final_effect,
        data.mort_effect, data.prod_effect, data.fert_effect,
        data.discount_rate
    ]
    arrays, n = _broadcast_or_400(fields)
    
    # 2. Build the X matrix directly as numpy array (faster than DataFrame)
    # Column order: age_effect, initial_effect, final_effect, mort_effect, 
    #               prod_effect, fert_effect, discount_rate
    X = np.column_stack(arrays)
    
    # 3. Call the three interpolators (each returns ndarray of shape (n,))
    npv = interp_NPV(select_data(X, 'NPV'))
    avg = interp_avg(select_data(X, 'avg_diff'))
    pop_diffs_2050 = interp_pop(select_data(X, 'total_pop_diff_2050'))
    
    # 4. Some interpolators return masked or NaN for extrapolation—clean up
    # Handle 1D arrays (ravel only if needed, but interpolators should return 1D)
    npv = np.nan_to_num(npv, nan=0.0)
    avg = np.nan_to_num(avg, nan=0.0)
    pop_diffs_2050 = np.nan_to_num(pop_diffs_2050, nan=0.0)
    
    # Convert to lists for JSON serialization
    # Ensure all are 1D arrays first (flatten if needed), then convert to list
    npv = np.asarray(npv).ravel().tolist()
    avg = np.asarray(avg).ravel().tolist()
    pop = np.asarray(pop_diffs_2050).ravel().tolist()

    return Outputs(NPV=npv, pop_diffs_2050=pop, avg_diff=avg)

# ------------------------------------------------------------------
# To run locally (hot reload):
#     uvicorn app:app --reload
# ------------------------------------------------------------------
