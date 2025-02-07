import * as tf from "@tensorflow/tfjs";
import styles from "@/components/Tensor.module.css"

// Store normalization parameters
const inputMeans = [
  5.1302979e1, 8.4279661, 1.0377118e1, 1.9504026, 1.8451481, 6.747458e-1,
  3.5e-2,
];
const inputStds = [
  10.563937, 8.102567, 8.245038, 2.1774914, 2.1157672, 0.6330082, 0.01707825,
];

import { useEffect, useState } from "react";

const Tensor = () => {
  const [models, setModels] = useState({});
  const [inputs, setInputs] = useState({});
  const [outputs, setOutputs] = useState({});
  const [loading, setLoading] = useState(true);

  const [showSecondaryInputs, setShowSecondaryInputs] = useState(false);

const toggleSecondaryInputs = () => {
  setShowSecondaryInputs((prev) => !prev);
};


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
    run();
  }, []);

  const updateInputs = (event) => {
    setInputs((inputs) => {
      return { ...inputs, [event.target.id]: parseFloat(event.target.value) };
    });
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

    const {
      inputAdoption = 0,
      inputR = 0,
      inputAge = 0,
      inputStartYear = 0,
      inputNumYears = 0,
    } = inputs;

    // Make adjustments to year shifts based on adoption rate
    const inputMortality = inputAdoption / 100;
    const inputProductivity = inputAdoption / 100;
    const inputFertility = inputAdoption / 100;

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
    if (inputMortality == 0 && inputProductivity == 0 && inputFertility == 0) {
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
    // Display the prediction in the output box
    // // console.log(prediction.arraySync()[0]);
    // document.getElementById("outputNPV").value =
    //   Math.round(prediction_NPV.arraySync()[0][0] * 10) / 10; // The arraySync() method returns the value of the tensor as a nested array.
    // document.getElementById("outputGDP20").value = Math.round(
    //   prediction_GDP_20.arraySync()[0][0],
    // ); // The arraySync() method returns the value of the tensor as a nested array.
    // document.getElementById("outputPop").value =
    //   Math.round(prediction_Pop.arraySync()[0][0] * 100) / 0.1; // The arraySync() method returns the value of the tensor as a nested array.
  };

  if (loading) return <span>Loading...</span>;

  return (
    <div>
      <div className={styles.middleContainer}>
      <div className={styles.inputContainer}>
      <div className={styles.sectionHeader}>PRIMARY INPUTS</div>
      <label className={styles.label} htmlFor="inputAdoption">
        Percentage of the population who will benefit: <div id="demo0">--</div>
      </label>
      <div className="slidecontainer">
        <input
          type="range"
          min={0}
          max={100}
          value={50.0}
          step={1.0}
          className={styles.slider}
          id="inputAdoption"
          onChange={updateInputs}
          value={inputs["inputAdoption"] || 0}
        />
      </div>
      <label className={styles.label} htmlFor="inputAge">
        Age of population who will benefit: <div id="demo5">--</div>
      </label>
      <div className="slidecontainer">
        <input
          type="range"
          min={40}
          max={65}
          value={40}
          className={styles.slider}
          id="inputAge"
          onChange={updateInputs}
          value={inputs["inputAge"] || 0}
        />
      </div>
      <label className={styles.label} htmlFor="inputStartYear">
        Years until aging treatment enters market: <div id="demo6">--</div>
      </label>
      <div className="slidecontainer">
        <input
          type="range"
          min={0}
          max={20}
          value={10}
          className={styles.slider}
          id="inputStartYear"
          onChange={updateInputs}
          value={inputs["inputStartYear"] || 0}
        />
      </div>
      <label className={styles.label} className={styles.label} htmlFor="inputR">
        Discount rate: <div id="demo4">--</div>
      </label>
      <div className="slidecontainer">
        <input
          type="range"
          min={0.01}
          max={0.07}
          value={0.04}
          step={0.005}
          className={styles.slider}
          id="inputR"
          onChange={updateInputs}
          value={inputs["inputR"] || 0}
        />
      </div>

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
      <label className={styles.label} htmlFor="inputMortality">
        Mortality rates by age (year shift): <div id="demo1">--</div>
      </label>
      <div className="slidecontainer">
        <input
          type="range"
          min={0}
          max={5}
          value={0.0}
          step={0.01}
          className={styles.slider}
          id="inputMortality"
          onChange={updateInputs}
          value={inputs["inputMortality"] || 0}
        />
      </div>
      <label className={styles.label} htmlFor="inputProductivity">
        Productivity rates by age (year shift): <div id="demo2">--</div>
      </label>
      <div className="slidecontainer">
        <input
          type="range"
          min={0}
          max={5}
          value={0.0}
          step={0.01}
          className={styles.slider}
          id="inputProductivity"
          onChange={updateInputs}
          value={inputs["inputProductivity"] || 0}
        />
      </div>
      <label className={styles.label} htmlFor="inputFertility">
        Fertility rates by age (year shift): <div id="demo3">--</div>
      </label>
      <div className="slidecontainer">
        <input
          type="range"
          min={0}
          max={5}
          value={0.0}
          step={0.01}
          className={styles.slider}
          id="inputFertility"
          onChange={updateInputs}
          value={inputs["inputFertility"] || 0}
        />
      </div>
      <label className={styles.label} htmlFor="inputNumYears">
        Years from market entry until max adoption of treatment:{" "}
        <div id="demo7">--</div>
      </label>
      <div className="slidecontainer">
        <input
          type="range"
          min={0}
          max={20}
          value={10}
          className={styles.slider}
          id="inputNumYears"
          onChange={updateInputs}
          value={inputs["inputNumYears"] || 0}
        />
      </div>
      </div>



      </div>
      <div className={styles.outerOutputContainer}>
      <div className={styles.output}></div>
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
        Long-term return, (Net Present Value over
        decades)
      </div >
      
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
      <div className={styles.outputLabel}>Yearly GDP change, Billions of 2025$ (average over 2045-2065)</div>
      
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
      <div className={styles.outputLabel}>Lives saved by 2050 (thousands of people)</div>
      
    </div>
    </div>


    </div>
    </div>
      <div className={styles.explanation}></div>
      </div>


    
    </div>

  );
};

export default Tensor;
