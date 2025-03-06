import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "@/components/GsapLanding.module.css";
import Link from "next/link";

const LandingTextIntro = ({ fadeOutPoint }) => {
  const [isFixed, setIsFixed] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const progress = Math.min(scrollPosition / fadeOutPoint, 1);
      setScrollProgress(progress);
      setIsFixed(scrollPosition <= fadeOutPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fadeOutPoint]);

  // Function to interpolate between two colors
  const interpolateColor = (startColor, endColor, factor) => {
    const result = startColor.map((start, index) => {
      const end = endColor[index];
      return Math.round(start + (end - start) * factor);
    });
    return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
  };

  // Colors in RGB format
  const darkColor = [25, 24, 24]; // #191818
  const lightColor = [255, 245, 229]; // #FFF5E5
  const healthyStartColor = [0, 0, 0]; // Black
  const healthyMiddleColor = lightColor; // Same as other text at 80%
  const healthyEndColor = [220, 125, 255]; // #DC7DFF

  // Calculate interpolated colors
  const backgroundColor = interpolateColor(
    lightColor,
    darkColor,
    scrollProgress,
  );
  const textColor = interpolateColor(darkColor, lightColor, scrollProgress);

  // Custom transition for "healthy"
  let healthyTextColor;
  if (scrollProgress < 0.8) {
    // First phase (0% to 80%): Black to light color
    const adjustedProgress = scrollProgress / 0.8; // Normalize to [0,1] range
    healthyTextColor = interpolateColor(
      healthyStartColor,
      healthyMiddleColor,
      adjustedProgress,
    );
  } else {
    // Second phase (80% to 100%): Light color to pink
    const adjustedProgress = (scrollProgress - 0.8) / 0.2; // Normalize to [0,1] range
    healthyTextColor = interpolateColor(
      healthyMiddleColor,
      healthyEndColor,
      adjustedProgress,
    );
  }

  return (
    <>
      <div
        style={{
          position: isFixed ? "fixed" : "static",
          top: isFixed ? "0" : "auto",
          left: "0",
          backgroundColor: backgroundColor,
          color: textColor,
          transition: "background-color 0.1s linear, color 0.1s linear",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          zIndex: 10,
        }}
      >
        <div className={styles.landinginnertextContainer}>
          <div className={styles.empty}></div>
          <div className={styles.landinginnertext}>
            An open project to accelerate&nbsp;
            <span
              className={styles.healthy}
              style={{ color: healthyTextColor }}
            >
              healthy
            </span>
            &nbsp;longevity
          </div>
          <div className={styles.link}>
            <Link
              href={{
                pathname: "/chapter=present", // Replace with actual page path
                query: { chapter: "1-0" }, // Ensure the slug format matches your data
              }}
              style={{ color: "#191818" }}
            >
              View Full Report
            </Link>
          </div>
        </div>

        {/* Light Mode Face Image with Fade-Out Effect */}
        <div
          className={styles.lightfaceContainer}
          style={{
            opacity: 1 - scrollProgress, // Fades from 100% (1) to 0% as scroll progresses
            transition: "opacity 0.1s linear",
          }}
        >
          <img src="woman/face_lightmode.png" alt="Light Mode Face" />
        </div>
      </div>
      <div className={styles.space}></div>

      <div className={styles.landingoutertext}>
        <div
          className={`${styles.landinginnertext} ${styles.light} ${styles.landingmedium}`}
        >
          The world is aging.
        </div>
        <div
          className={`${styles.landinginnertext} ${styles.light} ${styles.landingsmall}`}
        >
          <div className={styles.maxwidth400}>
            And the way we age profoundly impacts our economies, shaping how we
            live, <span className={styles.textproductivity}>work</span>,{" "}
            <span className={styles.textfertility}>give birth</span>, and{" "}
            <span className={styles.textmortality}>die</span>.
          </div>
        </div>
      </div>
    </>
  );
};

// Prop type validation
LandingTextIntro.propTypes = {
  fadeOutPoint: PropTypes.number.isRequired,
};

export default LandingTextIntro;
