import styles from "./Simulationoverlay.module.css";

const Simulationoverlay = ({ min, max, current, min2, max2, current2 }) => {
    // Function to map a value from one range to another
    const mapValue = (value, inMin, inMax, outMin, outMax) => {
        return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    };

    // Clamp values between min and max
    const clampedValue = Math.min(Math.max(current, min), max);
    const clampedValue2 = Math.min(Math.max(current2, min2), max2);

    // Calculate radius for the circle
    const radius = mapValue(clampedValue, min, max, 50, 250);

    // Calculate height for the rectangle (from 20% to 100%)
    const rectangleHeight = mapValue(clampedValue2, min2, max2, 20, 100);

    return (
        <div className={styles.overlaycontainer}>
            <div className={`${styles.column} ${styles.circlecolumn}`}>
                <div 
                    className={styles.circle} 
                    style={{ width: `${radius}px`, height: `${radius}px`, borderRadius: "50%" }}
                ></div>
            </div>
            <div className={`${styles.column} ${styles.rectanglecolumn}`}>
                <div 
                    className={styles.rectangle} 
                    style={{ height: `${rectangleHeight}%`, transformOrigin: "bottom" }}
                ></div>
            </div>
            <div className={styles.column}></div>
        </div>
    );
};

export default Simulationoverlay;
