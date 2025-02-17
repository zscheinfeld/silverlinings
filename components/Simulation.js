import * as tf from "@tensorflow/tfjs";
import styles from "@/components/Simulation.module.css";

// Store normalization parameters
const inputMeans = [
  5.1302979e1, 8.4279661, 1.0377118e1, 1.9504026, 1.8451481, 6.747458e-1,
  3.5e-2,
];
const inputStds = [
  10.563937, 8.102567, 8.245038, 2.1774914, 2.1157672, 0.6330082, 0.01707825,
];

import { useEffect, useState } from "react";
import Slider from "@/components/Slider";

const Simulation = ({ data }) => {
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

  const [models, setModels] = useState({});
  const [inputs, setInputs] = useState(defaultInputs);
  const [outputs, setOutputs] = useState({});
  const [loading, setLoading] = useState(true);

  const [showSecondaryInputs, setShowSecondaryInputs] = useState(false);

  const handleReset = () => {
    setInputs(defaultInputs);
  };

  const toggleSecondaryInputs = () => {
    setShowSecondaryInputs((prev) => !prev);
  };

  useEffect(() => {
    setInputs(defaultInputs);
  }, [sectionIndex]);

  useEffect(() => {
    const run = async () => {
      const [npv_model, GDP_20_model, pop_model] = await Promise.all([
        tf.loadLayersModel("/tf_model/NPV/model.json"),
        tf.loadLayersModel("/tf_model/GDP_20/model.json"),
        tf.loadLayersModel("/tf_model/Pop/model.json"),
      ]);
      setModels({
        npv_model,
        GDP_20_model,
        pop_model,
      });
      setLoading(false);
    };
    void run();
  }, []);

  useEffect(() => {
    if (!loading) {
      updateInputs();
    }
  }, [loading]);

  const updateInputs = (event) => {
    if (event) {
      setInputs((inputs) => {
        return { ...inputs, [event.target.id]: parseFloat(event.target.value) };
      });
    }
    doSurrogate();
  };

  // Normalization function
  const normalizeData = (tensor, means, stds) => {
    return tf.tidy(() => {
      return tensor.sub(means).div(stds);
    });
  };

  // Run the surrogate model
  const doSurrogate = () => {
    // Get input value

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

    // TODO: Verify this change from the original model!
    // Make adjustments to year shifts based on adoption rate
    inputMortality = inputMortality || inputAdoption / 100;
    inputProductivity = inputProductivity || inputAdoption / 100;
    inputFertility = inputFertility || inputAdoption / 100;

    // Below list needs to follow same order as the input list used to train the model
    const inputTensor_NPV = tf.tensor2d(
      [
        inputAge,
        inputStartYear,
        inputNumYears,
        inputMortality,
        inputProductivity,
        inputFertility,
        inputR,
      ],
      [1, 7],
    );
    const inputTensor_GDP_pop = tf.tensor2d(
      [
        inputAge,
        inputStartYear,
        inputNumYears,
        inputMortality,
        inputProductivity,
        inputFertility,
      ],
      [1, 6],
    );

    // Get prediction with new input

    // Normalize the inputs
    const normalizedInputs_NPV = normalizeData(
      inputTensor_NPV,
      tf.tensor(inputMeans),
      tf.tensor(inputStds),
    );
    const normalizedInputs_GDP_pop = normalizeData(
      inputTensor_GDP_pop,
      tf.tensor(inputMeans.slice(0, -1)),
      tf.tensor(inputStds.slice(0, -1)),
    );

    const { npv_model, GDP_20_model, pop_model } = models;
    let prediction_NPV = npv_model.predict(normalizedInputs_NPV);
    let prediction_GDP_20 = GDP_20_model.predict(normalizedInputs_GDP_pop);
    let prediction_Pop = pop_model.predict(normalizedInputs_GDP_pop);

    // If inputMortality, inputProductivity, inputFertility all zero, then set predictions to zero
    if (
      inputMortality === 0 &&
      inputProductivity === 0 &&
      inputFertility === 0
    ) {
      prediction_NPV = tf.tensor2d([[0]]);
      prediction_GDP_20 = tf.tensor2d([[0]]);
      prediction_Pop = tf.tensor2d([[0]]);
    }

    // Clean up tensors
    tf.dispose([
      inputTensor_NPV,
      inputTensor_GDP_pop,
      normalizedInputs_NPV,
      normalizedInputs_GDP_pop,
    ]);

    setOutputs({
      outputNPV: Math.round(prediction_NPV.arraySync()[0][0] * 10) / 10,
      outputGDP20: Math.round(prediction_GDP_20.arraySync()[0][0]),
      outputPop: Math.round(prediction_Pop.arraySync()[0][0] * 100) / 0.1, // The arraySync() method returns the value of the tensor as a nested array.
    });
  };

  if (loading) return <span>Loading...</span>;

  return (
    <>
      <div
        className={styles.simulationhead}
        dangerouslySetInnerHTML={{ __html: data.title }}
      />
      <button onClick={handleReset}>Reset</button>
      <div key={`${sectionIndex}`}>
        <div className={styles.middleContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.sectionHeader}>PRIMARY INPUTS</div>
            <Slider
              id="inputAdoption"
              {...section.inputs["adoption"]}
              value={inputs["inputAdoption"]}
              onChange={updateInputs}
            />
            <Slider
              id="inputAge"
              {...section.inputs["age"]}
              value={inputs["inputAge"]}
              onChange={updateInputs}
            />
            <Slider
              id="inputStartYear"
              {...section.inputs["startYear"]}
              value={inputs["inputStartYear"]}
              onChange={updateInputs}
            />
            <Slider
              id="inputR"
              {...section.inputs["r"]}
              value={inputs["inputR"]}
              onChange={updateInputs}
            />

            <button
              className={`${styles.sectionHeader} ${styles.secondaryInputsHeader}`}
              onClick={toggleSecondaryInputs}
            >
              SECONDARY INPUTS +
            </button>

            <div
              className={`${styles.secondaryInputs} ${
                showSecondaryInputs ? styles.show : styles.hide
              }`}
            >
              <Slider
                id="inputMortality"
                {...section.inputs["mortality"]}
                value={inputs["inputMortality"]}
                onChange={updateInputs}
              />
              <Slider
                id="inputProductivity"
                {...section.inputs["productivity"]}
                value={inputs["inputProductivity"]}
                onChange={updateInputs}
              />
              <Slider
                id="inputFertility"
                {...section.inputs["fertility"]}
                value={inputs["inputFertility"]}
                onChange={updateInputs}
              />
              <Slider
                id="inputNumYears"
                {...section.inputs["numYears"]}
                value={inputs["inputNumYears"]}
                onChange={updateInputs}
              />
            </div>
          </div>
          <div className={styles.outerOutputContainer}>
            {data.sections.length > 1 && (
              <div>
                {data.sections.map((section, index) => (
                  <button onClick={() => setSectionIndex(index)} key={index}>
                    {section.title}
                  </button>
                ))}
              </div>
            )}
            <div className={styles.output}>
              <img src={`/${section.image}`} alt=""></img>
            </div>
            <div className={styles.outputContainer}>
              <div className={styles.sectionHeader}>OUTPUTS</div>

              <div className={styles.outputInnerContainer}>
                <div className={styles.Item}>
                  <label htmlFor="outputNPV"></label>
                  <input
                    type="text"
                    id="outputNPV"
                    name="outputNPV"
                    className={styles.outputStat}
                    value={outputs.outputNPV || 0}
                    readOnly
                  />
                  <div className={styles.outputLabel}>
                    Long-term return, (Net Present Value over decades)
                  </div>
                </div>
                <div className={styles.Item}>
                  <label htmlFor="outputGDP20"></label>
                  <input
                    type="text"
                    id="outputGDP20"
                    name="outputGDP20"
                    className={styles.outputStat}
                    value={outputs.outputGDP20 || 0}
                    readOnly
                  />
                  <div className={styles.outputLabel}>
                    Yearly GDP change, Billions of 2025$ (average over
                    2045-2065)
                  </div>
                </div>

                <div className={styles.Item}>
                  <label htmlFor="outputPop"></label>
                  <input
                    type="text"
                    id="outputPop"
                    className={styles.outputStat}
                    name="outputPop"
                    value={outputs.outputPop || 0}
                    readOnly
                  />
                  <div className={styles.outputLabel}>
                    Lives saved by 2050 (thousands of people)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.explanation}>
            <div className={styles.sectionHeader}>EXPLANATION</div>
            <div className={styles.explanationText}>{data.explanation}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Simulation;
