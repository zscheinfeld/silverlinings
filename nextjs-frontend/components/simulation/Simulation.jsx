import styles from "@/components/simulation/Simulation.module.scss";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { useEffect, useState } from "react";
import Slider from "@/components/simulation/Slider";
import SimulationOverlay from "./SimulationOverlay";

const Simulation = ({ data }) => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [showDescription, setShowDescription] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay((prev) => !prev);
  };

  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  const [sectionIndex, setSectionIndex] = useState(0);
  const section = data.sections[sectionIndex];

  const defaultInputs = {
    inputAdoption: section.inputs["adoption"].defaultValue,
    inputR: section.inputs["r"].defaultValue,
    inputAge: section.inputs["age"].defaultValue,
    inputStartYear: section.inputs["startYear"].defaultValue,
    inputMortality: section.inputs["mortality"].defaultValue,
    inputProductivity: section.inputs["productivity"].defaultValue,
    inputFertility: section.inputs["fertility"].defaultValue,
    inputNumYears: section.inputs["numYears"].defaultValue,
  };

  const defaultOutputs = {
    outputNPV: section.inputs.return.defaultValue,
    outputGDP20: section.inputs.yGDP.defaultValue,
    outputPop: section.inputs.lives.defaultValue,
  };

  const [inputs, setInputs] = useState(defaultInputs);
  const [outputs, setOutputs] = useState(defaultOutputs);
  const [loading, setLoading] = useState(false);
  const [inputsUpdated, setInputsUpdated] = useState(false);
  const [showSecondaryInputs, setShowSecondaryInputs] = useState(false);

  // API configuration
  // const API_BASE = "/predict"; // Update this to match your FastAPI endpoint
  // const API_BASE = "http://localhost:8000/predict" ;
  const API_BASE = "https://fastapi-backend-proud-tree-3049.fly.dev/predict"; // Update this to match your FastAPI endpoint;

  // Timer for debounced API calls
  const [updateTimer, setUpdateTimer] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleReset = () => {
    setInputs({ ...defaultInputs });
  };

  const toggleSecondaryInputs = () => {
    setShowSecondaryInputs((prev) => !prev);
  };

  useEffect(() => {
    setInputsUpdated(false);
    setOutputs({ ...defaultOutputs });
    setInputs({ ...defaultInputs });
  }, [sectionIndex]);

  // Make prediction via API call
  const makePrediction = async () => {
    if (isUpdating) return; // Prevent multiple simultaneous requests

    setIsUpdating(true);
    setLoading(true);

    try {
      let {
        inputAdoption = 0,
        inputR = 0,
        inputAge = 0,
        inputStartYear = 0,
        inputNumYears = 0,
        inputMortality = 0,
        inputProductivity = 0,
        inputFertility = 0,
      } = inputs;

      // Make adjustments to year shifts based on adoption rate
      const adjustedMortality = inputMortality * (inputAdoption / 100);
      const adjustedProductivity = inputProductivity * (inputAdoption / 100);
      const adjustedFertility =
        Math.min(0.6, inputFertility * (inputAdoption / 100));

      // Prepare payload matching the expected API format
      const payload = {
        age_effect: inputAge,
        initial_effect: inputStartYear,
        final_effect: inputNumYears,
        mort_effect: adjustedMortality,
        prod_effect: adjustedProductivity,
        fert_effect: adjustedFertility,
        discount_rate: inputR,
      };

      const response = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response
          .json()
          .catch(() => ({ detail: response.statusText }));
        throw new Error(error.detail || `HTTP ${response.status}`);
      }

      const data = await response.json();

      // Update outputs with API response
      setOutputs({
        outputNPV: Math.round(data.NPV * 10) / 10, // Round to 1 decimal place (trillions)
        outputGDP20: Math.round(data.avg_diff * 10) / 10, // Round to 1 decimal place (billions)
        outputPop: Math.round(data.pop_diffs_2050 * 1000), // Round to nearest thousand
      });
    } catch (error) {
      console.error("Prediction error:", error);
      // Clear outputs on error
      setOutputs({
        outputNPV: 0,
        outputGDP20: 0,
        outputPop: 0,
      });
    } finally {
      setIsUpdating(false);
      setLoading(false);
    }
  };

  // Schedule debounced update
  const scheduleUpdate = () => {
    if (updateTimer) {
      clearTimeout(updateTimer);
    }

    const newTimer = setTimeout(() => {
      makePrediction();
    }, 250);

    setUpdateTimer(newTimer);
  };

  // Effect to trigger predictions when inputs change
  useEffect(() => {
    if (!inputsUpdated) return;

    scheduleUpdate();

    // Cleanup timer on unmount
    return () => {
      if (updateTimer) {
        clearTimeout(updateTimer);
      }
    };
  }, [inputs, inputsUpdated]);

  const updateInputs = (event) => {
    setInputsUpdated(true);
    setInputs((inputs) => {
      return { ...inputs, [event.target.id]: parseFloat(event.target.value) };
    });
  };
  const formattedOutputPop =
    outputs.outputPop > 1000
      ? `${(outputs.outputPop / 1000).toFixed(2)}m`
      : `${outputs.outputPop || 0}k`;

  const formattedOutputGDP20 =
    outputs.outputGDP20 > 1000
      ? `${(outputs.outputGDP20 / 1000).toFixed(2)}T`
      : `${outputs.outputGDP20 || 0}B`;

  return (
    <>
      <div className={styles.container} key={`${sectionIndex}`}>
        <div className={styles.middleContainer}>
          <div className={styles.inputContainer}>
            <div
              className={`${styles.explanation} ${showDescription ? styles.visible : ""}`}
            >
              <div className={styles.sectionHeader}>EXPLANATION</div>
              <div className={styles.explanationText}>
                {section.explanation}
              </div>
            </div>

            <div className={styles.simbuttonContainer}>
              <button className={styles.resetContainer} onClick={handleReset}>
                <div className={styles.svg}>
                  <img src="restart.svg" alt="" />
                </div>
                Reset
              </button>
              <button
                className={`${styles.descriptionContainer} ${showDescription ? styles.visible : ""}`}
                onClick={toggleDescription}
              >
                <div className={styles.svg}>
                  <img src="info.svg" alt="Info" />
                </div>
                Explanation
              </button>
            </div>
            <div className={styles.sectionHeader}>PRIMARY INPUTS</div>
            <Slider
              id="inputAdoption"
              {...section.inputs["adoption"]}
              value={inputs["inputAdoption"]}
              onChange={updateInputs}
              disabled={loading}
            />
            <Slider
              id="inputAge"
              {...section.inputs["age"]}
              modifier={(value) => `${value}+`}
              value={inputs["inputAge"]}
              onChange={updateInputs}
              disabled={loading}
            />
            <Slider
              id="inputStartYear"
              {...section.inputs["startYear"]}
              value={inputs["inputStartYear"]}
              onChange={updateInputs}
              disabled={loading}
            />
            <Slider
              id="inputR"
              {...section.inputs["r"]}
              modifier={(value) => `${value * 100}%`}
              value={inputs["inputR"]}
              onChange={updateInputs}
              disabled={loading}
            />

            <button
              className={`${styles.sectionHeader} ${styles.secondaryInputsHeader}`}
              onClick={toggleSecondaryInputs}
            >
              SECONDARY INPUTS +
            </button>

            <div
              className={`${styles.secondaryInputs} ${
                showSecondaryInputs ? styles.expanded : styles.hide
              }`}
            >
              <Slider
                id="inputMortality"
                {...section.inputs["mortality"]}
                value={inputs["inputMortality"]}
                onChange={updateInputs}
                disabled={loading}
              />
              <Slider
                id="inputProductivity"
                {...section.inputs["productivity"]}
                value={inputs["inputProductivity"]}
                onChange={updateInputs}
                disabled={loading}
              />
              <Slider
                id="inputFertility"
                {...section.inputs["fertility"]}
                value={inputs["inputFertility"]}
                onChange={updateInputs}
                disabled={loading}
              />
              <Slider
                id="inputNumYears"
                {...section.inputs["numYears"]}
                value={inputs["inputNumYears"]}
                onChange={updateInputs}
                disabled={loading}
              />
            </div>
          </div>
          <div className={styles.outerOutputContainer}>
            {data.sections.length > 1 && (
              <div className={styles.sectionButtonContainer}>
                {data.sections.map((section, index) => (
                  <button
                    className={
                      index === sectionIndex
                        ? styles.sectionButton
                        : styles.sectionButtonDeselected
                    }
                    onClick={() => setSectionIndex(index)}
                    key={index}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            )}
            <div className={styles.output}>
              {showOverlay && (
                <SimulationOverlay
                  min={section.inputs.return.min}
                  max={section.inputs.return.max}
                  current={outputs.outputNPV || 0}
                  min2={section.inputs.yGDP.min}
                  max2={section.inputs.yGDP.max}
                  current2={outputs.outputGDP20 || 0}
                  min3={section.inputs.lives.min}
                  max3={section.inputs.lives.max}
                  current3={outputs.outputPop || 0}
                />
              )}
              <img
                className={styles.outputImage}
                src={section.image.url}
                alt=""
              />
            </div>
            <div className={styles.outputInnerContainer}>
              <Tooltip
                id="tooltip-gdp"
                arrow={false}
                arrowColor="transparent"
                className={styles.customTooltip}
                place="top"
              />
              <Tooltip
                id="tooltip-npv"
                arrow={false}
                arrowColor="transparent"
                className={styles.customTooltip}
                place="top"
              />
              <Tooltip
                id="tooltip-pop"
                arrow={false}
                arrowColor="transparent"
                className={styles.customTooltip}
                place="top"
              />

              <div
                className={styles.Item}
                data-tooltip-id="tooltip-gdp"
                data-tooltip-content="Projected yearly economic benefit to U.S. GDP over first 20 years."
              >
                <span className={styles.outputStat}>
                  ${formattedOutputGDP20}
                </span>
                <div className={styles.outputLabel}>
                  Yearly gain to U.S. GDP
                </div>
              </div>

              <div
                className={styles.Item}
                data-tooltip-id="tooltip-npv"
                data-tooltip-content="Total Net Present Value (NPV) of long-term economic returns."
                arrowColor="transparent"
                place="top"
                data-fade="true"
              >
                <span className={styles.outputStat}>
                  ${outputs.outputNPV || 0}T
                </span>
                <div className={styles.outputLabel}>Long-term return</div>
              </div>

              <div
                className={styles.Item}
                data-tooltip-id="tooltip-pop"
                data-tooltip-content="Estimated number of lives saved or gained by 2050."
                arrowColor="transparent"
                place="top"
                data-fade="true"
              >
                <span className={styles.outputStat}>{formattedOutputPop}</span>
                <div className={styles.outputLabel}>Lives saved or gained</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Simulation;
