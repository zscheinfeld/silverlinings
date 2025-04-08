import { useState } from "react";
import styles from "./SvgChat.module.scss";

const SvgChart = ({ source, textcontent, imageoverlay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.chartcontainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative" }}
    >
      <img src={source.url} alt="Chart" />

      {/* Image Overlay */}
      {imageoverlay && (
        <div className={`${styles.overlay} ${isHovered ? styles.visible : ""}`}>
          <img src={imageoverlay.url} alt="" />
        </div>
      )}

      {/* Text Overlay */}
      {textcontent && (
        <div
          className={`${styles.textOverlay} ${isHovered ? styles.visible : ""}`}
        >
          <div className={styles.textOverlayInner}>{textcontent}</div>
        </div>
      )}
    </div>
  );
};

export default SvgChart;
