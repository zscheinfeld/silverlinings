import { useState, useEffect, useRef } from "react";
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
  const [isInView, setIsInView] = useState(false);
  const textRef = useRef();
  const isMobile = useIsMobile(); // ✅ use this as your one source of truth

  // Set up Intersection Observer for mobile text reveal
  useEffect(() => {
    if (!isMobile || !textRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(textRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  const textClass = `${styles.textOverlay} ${
    isMobile
      ? isInView
        ? styles.visible
        : ""
      : isHovered
        ? styles.visible
        : ""
  }`;

  const imageToUse = isMobile && mobileSource ? mobileSource : source;

  useEffect(() => {}, [isMobile, source, mobileSource]);

  return (
    <div
      className={styles.chartcontainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative" }}
    >
      <img src={imageToUse?.url} alt="Chart" />

      {/* Image Overlay (only on desktop) */}
      {imageoverlay && !isMobile && (
        <div className={`${styles.overlay} ${isHovered ? styles.visible : ""}`}>
          <img src={imageoverlay.url} alt="" />
        </div>
      )}

      {/* Text Overlay */}
      {textcontent && (
        <div ref={textRef} className={textClass}>
          <div className={styles.textOverlayInner}>{textcontent}</div>
        </div>
      )}
    </div>
  );
};

export default SvgChart;
