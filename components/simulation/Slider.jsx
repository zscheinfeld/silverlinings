import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useMemo, useRef } from "react";
import styles from "./Slider.module.scss";

const Slider = ({
  id,
  value,
  defaultValue,
  label,
  min,
  max,
  step,
  modifier,
  onChange,
  tooltip,
}) => {
  const defaultValueProgress = useRef((defaultValue - min) / (max - min));
  const tooltipId = `tooltip-${id}`;

  const progress = useMemo(() => {
    return (value - min) / (max - min);
  }, [value, min, max]);

  return (
    <div className={styles.container}>
      <Tooltip id={tooltipId} arrow={false} className={styles.customTooltip} arrowColor="transparent"  place="right" data-fade="true"/>
      <label
        className={styles.label}
        data-tooltip-id={tooltipId}
        data-tooltip-content={tooltip}
        htmlFor={id}
      >
        {label}:
      </label>
      <div className={styles.input_and_value}>
        <div className={styles.input_wrapper}>
          <div className={styles.track} />
          <div className={styles.default_wrapper}>
            <div
              className={styles.default_value}
              style={{ left: `${defaultValueProgress.current * 100}%` }}
            />
          </div>
          <input
            className={styles.slider}
            type="range"
            id={id}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
          />
        </div>
        <div className={styles.value_wrapper}>
          <div className={styles.value} style={{ left: `${progress * 100}%` }}>
            {modifier ? modifier(value) : value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
