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
  disabled,
  onChange,
  onCommit,
  tooltip,
}) => {
  const defaultValueProgress = useRef((defaultValue - min) / (max - min));
  const tooltipId = `tooltip-${id}`;

  const progress = useMemo(() => {
    return (value - min) / (max - min);
  }, [value, min, max]);

  const handleMouseUp = (event) => {
    if (onCommit) {
      onCommit(event);
    }
  };

  const handleTouchEnd = (event) => {
    if (onCommit) {
      onCommit(event);
    }
  };

  return (
    <div className={styles.container}>
      <Tooltip
        id={tooltipId}
        arrow={false}
        className={styles.customTooltip}
        arrowColor="transparent"
        place="right"
        data-fade="true"
        opacity={1}
      />
      <label
        className={styles.label}
        data-tooltip-id={tooltipId}
        data-tooltip-content={tooltip}
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
            onMouseUp={handleMouseUp}
            onTouchEnd={handleTouchEnd}
            disabled={disabled}
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
