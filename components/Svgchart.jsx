import { useState } from "react";
import styles from "@/components/Chapter.module.css";

const Svgchart = ({
  source,
  imageoverlay = true,
  textoverlay = true,
  textcontent,
  overlaycontent,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.chartcontainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative" }}
    >
      <img src={source} alt="Chart" />

      {/* Image Overlay */}
      {imageoverlay && (
        <div className={`${styles.overlay} ${isHovered ? styles.visible : ""}`}>
          <img src={overlaycontent} alt="" />
        </div>
      )}

      {/* Text Overlay */}
      {textoverlay && (
        <div
          className={`${styles.textOverlay} ${isHovered ? styles.visible : ""}`}
        >
          <div className={styles.textOverlayInner}>{textcontent}</div>
        </div>
      )}
    </div>
  );
};

export default Svgchart;
