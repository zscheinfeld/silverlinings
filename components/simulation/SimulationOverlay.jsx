import styles from "./SimulationOverlay.module.scss";

const SimulationOverlay = ({
  min,
  max,
  current,
  min2,
  max2,
  current2,
  min3,
  max3,
  current3,
}) => {
  // Function to map a value from one range to another
  const mapValue = (value, inMin, inMax, outMin, outMax) => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  // Clamp values between min and max
  const clampedValue = Math.min(Math.max(current, min), max);
  const clampedValue2 = Math.min(Math.max(current2, min2), max2);
  const clampedValue3 = Math.min(Math.max(current3, min3), max3);

  // Calculate radius for the circle
  const radius = mapValue(clampedValue, min, max, 50, 250);

  // Calculate height for the rectangle (from 20% to 100%)
  const rectangleHeight = mapValue(clampedValue2, min2, max2, 20, 100);

  // Calculate height for the masked image (from 20% to 100%)
  const maskedImageHeight = mapValue(clampedValue3, min3, max3, 20, 100);

  return (
    <div className={styles.overlaycontainer}>
      <div className={`${styles.column} ${styles.circlecolumn}`}>
        <div
          className={styles.circle}
          style={{
            width: `${radius}px`,
            height: `${radius}px`,
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <div className={`${styles.column} ${styles.rectanglecolumn}`}>
        <div
          className={styles.rectangle}
          style={{ height: `${rectangleHeight}%`, transformOrigin: "bottom" }}
        ></div>
      </div>
      <div className={`${styles.column} ${styles.maskcolumn}`}>
        <div
          className={styles.maskedimage}
          style={{ height: `${maskedImageHeight}%`, overflow: "hidden" }}
        >
          <div className={styles.pattern}>
            <img
              src="simtool/patternsvg.svg"
              alt="Masked SVG"
              className={styles.maskedSvg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulationOverlay;
