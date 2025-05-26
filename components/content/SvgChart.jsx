import { useState, useEffect, useRef } from "react";
import styles from "./SvgChat.module.scss";

const SvgChart = ({ source, textcontent, imageoverlay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const textRef = useRef();

  // Track screen width responsively
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set up Intersection Observer for mobile text reveal
  useEffect(() => {
    if (!isMobile || !textRef.current) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );
  
    observer.observe(textRef.current);
  
    return () => observer.disconnect();
  }, [isMobile]);
  

  const textClass = `${styles.textOverlay} ${
    isMobile ? (isInView ? styles.visible : "") : isHovered ? styles.visible : ""
  }`;

  return (
    <div
      className={styles.chartcontainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative" }}
    >
      <img src={source.url} alt="Chart" />

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
