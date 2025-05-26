import { useState, useEffect } from "react";
import styles from "./SvgChat.module.scss";

// Custom hook to detect mobile screen size
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);
    checkMobile(); // run once on mount

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}

const SvgChart = ({ source, mobileSource, textcontent, imageoverlay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  const imageToUse = isMobile && mobileSource ? mobileSource : source;

  useEffect(() => {
    console.log("Full image source object:", source);
    console.log("Mobile image source object:", mobileSource);
    console.log("Is mobile?", isMobile);
    console.log("Image being used:", imageToUse?.url);
  }, [isMobile, source, mobileSource]);

  return (
    <div
      className={styles.chartcontainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative" }}
    >
      <img src={imageToUse.url} alt="Chart" />

      {/* Image Overlay */}
      {imageoverlay && (
        <div className={`${styles.overlay} ${isHovered ? styles.visible : ""}`}>
          <img src={imageoverlay.url} alt="" />
        </div>
      )}

      {/* Text Overlay */}
      {textcontent && (
        <div className={`${styles.textOverlay} ${isHovered ? styles.visible : ""}`}>
          <div className={styles.textOverlayInner}>{textcontent}</div>
        </div>
      )}
    </div>
  );
};

export default SvgChart;
