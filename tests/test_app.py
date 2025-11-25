"""
Unit tests for app.py functions

These tests verify that:
1. load_models() successfully loads the three interpolator models
2. predict() function produces outputs that match the expected values from the CSV data
"""

import pytest
import pandas as pd
import numpy as np
import sys
import pathlib

# Add the fastapi-backend directory to the path so we can import app
BACKEND_PATH = pathlib.Path(__file__).parent.parent / "fastapi-backend"
sys.path.insert(0, str(BACKEND_PATH))

# Import from app.py
import app
from app import load_models, predict, Inputs, Outputs

# Constants
DATA_PATH = pathlib.Path(__file__).parent / "redesigning_aging_results.csv"

# Column names in order (matching app.py)
INPUT_COLUMNS = [
    "age_effect",
    "initial_effect",
    "final_effect",
    "mort_effect",
    "prod_effect",
    "fert_effect",
    "discount_rate",
]


@pytest.fixture(scope="module")
def test_data() -> pd.DataFrame:
    """Load the test data from CSV."""
    df = pd.read_csv(DATA_PATH)
    return df


@pytest.fixture(scope="module")
def models_loaded():
    """
    Fixture to ensure models are loaded before running tests.
    This calls load_models() once for all tests.
    """
    # Call the load_models function from app.py
    load_models()

    # Verify models were loaded
    assert app.interp_NPV is not None, "interp_NPV should be loaded"
    assert app.interp_avg is not None, "interp_avg should be loaded"
    assert app.interp_pop is not None, "interp_pop should be loaded"

    return True


class TestLoadModels:
    """Tests for the load_models() function."""

    def test_load_models_sets_global_variables(self, models_loaded):
        """Test that load_models() successfully sets the global interpolator variables."""
        assert app.interp_NPV is not None, "interp_NPV was not loaded"
        assert app.interp_avg is not None, "interp_avg was not loaded"
        assert app.interp_pop is not None, "interp_pop was not loaded"

    def test_models_are_callable(self, models_loaded):
        """Test that the loaded models are callable (have __call__ method)."""
        assert callable(app.interp_NPV), "interp_NPV should be callable"
        assert callable(app.interp_avg), "interp_avg should be callable"
        assert callable(app.interp_pop), "interp_pop should be callable"


class TestPredict:
    """Tests for the predict() function."""

    def test_predict_single_input(self, test_data, models_loaded):
        """Test predict() with a single set of input values."""
        # Get the first row of test data
        row = test_data.iloc[0]

        # Create Inputs object
        inputs = Inputs(
            age_effect=float(row["age_effect"]),
            initial_effect=float(row["initial_effect"]),
            final_effect=float(row["final_effect"]) - float(row["initial_effect"]),
            mort_effect=float(row["mort_effect"]),
            prod_effect=float(row["prod_effect"]),
            fert_effect=float(row["fert_effect"]),
            discount_rate=float(row["discount_rate"])
        )

        # Call predict
        outputs = predict(inputs)
        print("INPUTS:", inputs)

        # Verify outputs structure
        assert isinstance(outputs, Outputs), "predict should return Outputs object"
        assert isinstance(outputs.NPV, list), "NPV should be a list"
        assert isinstance(outputs.pop_diffs_2050, list), "pop_diffs_2050 should be a list"
        assert isinstance(outputs.avg_diff, list), "avg_diff should be a list"

        # Verify outputs match expected values from CSV
        assert len(outputs.NPV) == 1, "Should have one NPV prediction"
        assert len(outputs.pop_diffs_2050) == 1, "Should have one pop_diffs_2050 prediction"
        assert len(outputs.avg_diff) == 1, "Should have one avg_diff prediction"

        # Check values match within tolerance
        # NPV and avg_diff should match exactly
        np.testing.assert_allclose(
            outputs.NPV[0],
            row["NPV"],
            err_msg=f"NPV prediction mismatch for row 0"
        )
        # Note: pop_diffs_2050 in CSV has some inconsistencies with current model
        # Using looser tolerance (10% relative, 1.0 absolute)
        np.testing.assert_allclose(
            outputs.pop_diffs_2050[0],
            row["total_pop_diff_2050"],
            err_msg=f"pop_diffs_2050 prediction mismatch for row 0"
        )
        np.testing.assert_allclose(
            outputs.avg_diff[0],
            row["avg_diff"],
            err_msg=f"avg_diff prediction mismatch for row 0"
        )

    def test_predict_multiple_inputs(self, test_data, models_loaded):
        """Test predict() with multiple input values (batch prediction)."""
        # Get first 10 rows
        sample_size = 10
        sample = test_data.head(sample_size)

        # Create Inputs object with lists
        inputs = Inputs(
            age_effect=sample["age_effect"].tolist(),
            initial_effect=sample["initial_effect"].tolist(),
            final_effect=(sample["final_effect"] - sample["initial_effect"]).tolist(),
            mort_effect=sample["mort_effect"].tolist(),
            prod_effect=sample["prod_effect"].tolist(),
            fert_effect=sample["fert_effect"].tolist(),
            discount_rate=sample["discount_rate"].tolist()
        )

        # Call predict
        outputs = predict(inputs)

        # Verify output lengths
        assert len(outputs.NPV) == sample_size, f"Should have {sample_size} NPV predictions"
        assert len(outputs.pop_diffs_2050) == sample_size, f"Should have {sample_size} pop_diffs_2050 predictions"
        assert len(outputs.avg_diff) == sample_size, f"Should have {sample_size} avg_diff predictions"

        # Check all values match within tolerance
        np.testing.assert_allclose(
            outputs.NPV,
            sample["NPV"].values,
            err_msg="NPV predictions do not match expected values"
        )
        # Note: pop_diffs_2050 in CSV has some inconsistencies with current model
        np.testing.assert_allclose(
            outputs.pop_diffs_2050,
            sample["total_pop_diff_2050"].values,
            err_msg="pop_diffs_2050 predictions do not match expected values"
        )
        np.testing.assert_allclose(
            outputs.avg_diff,
            sample["avg_diff"].values,
            err_msg="avg_diff predictions do not match expected values"
        )

    def test_predict_large_sample(self, test_data, models_loaded):
        """Test predict() with a larger sample from the CSV."""
        # Get first 1000 rows
        sample_size = min(1000, len(test_data))
        sample = test_data.head(sample_size)

        # Create Inputs object
        inputs = Inputs(
            age_effect=sample["age_effect"].tolist(),
            initial_effect=sample["initial_effect"].tolist(),
            final_effect=(sample["final_effect"] - sample["initial_effect"]).tolist(),
            mort_effect=sample["mort_effect"].tolist(),
            prod_effect=sample["prod_effect"].tolist(),
            fert_effect=sample["fert_effect"].tolist(),
            discount_rate=sample["discount_rate"].tolist()
        )

        # Call predict
        outputs = predict(inputs)

        # Verify all predictions match
        # Note: CSV has some data inconsistencies with current models
        # Using tolerances that allow for minor model updates while catching major errors
        np.testing.assert_allclose(
            outputs.NPV,
            sample["NPV"].values,
            err_msg="NPV predictions do not match for large sample"
        )
        # Note: pop_diffs_2050 in CSV has some inconsistencies with current model
        np.testing.assert_allclose(
            outputs.pop_diffs_2050,
            sample["total_pop_diff_2050"].values,
            err_msg="pop_diffs_2050 predictions do not match for large sample",
            atol=1e-12
        )
        np.testing.assert_allclose(
            outputs.avg_diff,
            sample["avg_diff"].values,
            err_msg="avg_diff predictions do not match for large sample"
        )

    def test_predict_random_sample(self, test_data, models_loaded):
        """Test predict() with a random sample from the CSV."""
        # Get random sample
        sample_size = 100
        sample = test_data.sample(n=sample_size, random_state=42)

        # Create Inputs object
        inputs = Inputs(
            age_effect=sample["age_effect"].tolist(),
            initial_effect=sample["initial_effect"].tolist(),
            final_effect=(sample["final_effect"] - sample["initial_effect"]).tolist(),
            mort_effect=sample["mort_effect"].tolist(),
            prod_effect=sample["prod_effect"].tolist(),
            fert_effect=sample["fert_effect"].tolist(),
            discount_rate=sample["discount_rate"].tolist()
        )

        # Call predict
        outputs = predict(inputs)

        # Verify all predictions match
        # Note: CSV has some data inconsistencies with current models
        # Using tolerances that allow for minor model updates while catching major errors
        np.testing.assert_allclose(
            outputs.NPV,
            sample["NPV"].values,
            err_msg="NPV predictions do not match for random sample"
        )
        # Note: pop_diffs_2050 in CSV has some inconsistencies with current model
        np.testing.assert_allclose(
            outputs.pop_diffs_2050,
            sample["total_pop_diff_2050"].values,
            err_msg="total_pop_diff_2050 predictions do not match for random sample",
            atol=1e-12
        )
        np.testing.assert_allclose(
            outputs.avg_diff,
            sample["avg_diff"].values,
            err_msg="avg_diff predictions do not match for random sample"
        )

    def test_predict_with_default_values(self, models_loaded):
        """Test predict() using default values from Inputs model."""
        # Note: Pydantic validators don't run on default values, so we need to pass explicit lists
        # The default values are: age_effect=40.0, initial_effect=10.0, final_effect=10.0,
        # mort_effect=0.2, prod_effect=0.7, fert_effect=0.0, discount_rate=0.0
        inputs = Inputs(
            age_effect=[40.0],
            initial_effect=[10.0],
            final_effect=[10.0],
            mort_effect=[0.2],
            prod_effect=[0.7],
            fert_effect=[0.0],
            discount_rate=[0.0]
        )

        # Call predict
        outputs = predict(inputs)

        # Verify outputs structure
        assert isinstance(outputs, Outputs), "predict should return Outputs object"
        assert len(outputs.NPV) == 1, "Should have one NPV prediction with defaults"
        assert len(outputs.pop_diffs_2050) == 1, "Should have one pop_diffs_2050 prediction with defaults"
        assert len(outputs.avg_diff) == 1, "Should have one avg_diff prediction with defaults"

        # Verify all are numeric values (not None or NaN after nan_to_num)
        assert isinstance(outputs.NPV[0], (int, float)), "NPV should be numeric"
        assert isinstance(outputs.pop_diffs_2050[0], (int, float)), "pop_diffs_2050 should be numeric"
        assert isinstance(outputs.avg_diff[0], (int, float)), "avg_diff should be numeric"

    def test_predict_broadcast_scalar_to_list(self, test_data, models_loaded):
        """Test that predict() properly broadcasts scalar values when mixing scalars and lists."""
        # Get first 5 rows for list inputs
        sample = test_data.head(5)

        # Create Inputs with some scalars and some lists (should broadcast scalars)
        inputs = Inputs(
            age_effect=sample["age_effect"].tolist(),  # list of 5
            initial_effect=10.0,  # scalar - should broadcast to 5
            final_effect=sample["final_effect"].tolist(),  # list of 5
            mort_effect=0.2,  # scalar - should broadcast to 5
            prod_effect=sample["prod_effect"].tolist(),  # list of 5
            fert_effect=0.0,  # scalar - should broadcast to 5
            discount_rate=sample["discount_rate"].tolist()  # list of 5
        )

        # Call predict
        outputs = predict(inputs)

        # Should have 5 outputs
        assert len(outputs.NPV) == 5, "Should have 5 NPV predictions"
        assert len(outputs.pop_diffs_2050) == 5, "Should have 5 pop_diffs_2050 predictions"
        assert len(outputs.avg_diff) == 5, "Should have 5 avg_diff predictions"


class TestPredictErrorHandling:
    """Tests for error handling in predict() function."""

    def test_predict_raises_error_when_models_not_loaded(self):
        """Test that predict() raises HTTPException when models are not loaded."""
        # Temporarily set models to None
        original_npv = app.interp_NPV
        original_avg = app.interp_avg
        original_pop = app.interp_pop

        try:
            app.interp_NPV = None
            app.interp_avg = None
            app.interp_pop = None

            # Create simple inputs
            inputs = Inputs()

            # Should raise HTTPException with status 503
            from fastapi import HTTPException
            with pytest.raises(HTTPException) as exc_info:
                predict(inputs)

            assert exc_info.value.status_code == 503
            assert "Models not loaded" in str(exc_info.value.detail)

        finally:
            # Restore models
            app.interp_NPV = original_npv
            app.interp_avg = original_avg
            app.interp_pop = original_pop

    def test_predict_raises_error_on_mismatched_list_lengths(self, models_loaded):
        """Test that predict() raises HTTPException when list inputs have mismatched lengths."""
        from fastapi import HTTPException

        # Create inputs with mismatched list lengths
        inputs = Inputs(
            age_effect=[40.0, 50.0],  # length 2
            initial_effect=[10.0, 15.0, 20.0],  # length 3 - mismatch!
            final_effect=[10.0, 15.0],  # length 2
            mort_effect=[0.2, 0.3],  # length 2
            prod_effect=[0.7, 0.8],  # length 2
            fert_effect=[0.0, 0.1],  # length 2
            discount_rate=[0.0, 0.05]  # length 2
        )

        # Should raise HTTPException with status 400
        with pytest.raises(HTTPException) as exc_info:
            predict(inputs)

        assert exc_info.value.status_code == 400
        assert "same length" in str(exc_info.value.detail).lower()
