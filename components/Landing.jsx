import React, { useState, useEffect } from "react";
import styles from "@/components/Landing.module.css";
import Rotatingwoman from "@/components/Rotatingwoman";
import WorldMap from "@/components/WorldMap";
import Interactivewoman from "@/components/Interactivewoman";
import Landingcontent from "./Landingcontent";
import Face from "./Face";
import Brainhotspot from "./cards/Brainhotspot";
import Hearthotspot from "./cards/Hearthotspot";
import Uterushotspot from "./cards/Uterushotspot";

const Landing = ({ onReachedBottom }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false); // Track if we're in the browser
  const [fadeEnd, setFadeEnd] = useState(0); // Dynamically set fadeEnd

  const sectionMultiples = [1, 3, 8]; // Define sections for transitions
  const worldMapDisappearMultiplier = 6; // Set a parameter for when the World Map should disappear
  const interactiveWomanDisappearMultiplier = 10; // Set a parameter for when the Interactivewoman should disappear
  const faceAppearMultiplier = 0.1; // The range where Face appears in vh (from 0 to 0.1vh)
  const fadeStart = 300; // Start fading background color

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setIsClient(true); // Now we know we're on the client-side
  //     setFadeEnd(window.innerHeight); // Dynamically set fadeEnd to match window height

  //     const handleScroll = () => {
  //       setScrollY(window.scrollY); // Update scroll position
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
  //   }
  // }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
      setFadeEnd(window.innerHeight);
  
      const handleScroll = () => {
        setScrollY(window.scrollY);
  
        // Check if user has scrolled to the bottom
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (window.scrollY >= scrollableHeight - 10) { // Add a small buffer
          onReachedBottom(); // Trigger the event
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [onReachedBottom]);

  const getVisibility = (index, disappearIndex = -1) => {
    if (!isClient) return false;

    // Determine the start and end scroll positions for visibility
    const start = sectionMultiples[index] * window.innerHeight;
    const end = (sectionMultiples[index] + 1) * window.innerHeight;

    // If a disappear index is provided, use that for the end position
    const disappearEnd =
      disappearIndex > -1 ? disappearIndex * window.innerHeight : end;

    return scrollY >= start && scrollY < disappearEnd;
  };

  const getFaceOpacity = () => {
    if (!isClient) return 1; // Default to fully visible

    // Calculate the scroll position for .1vh (small fraction of the viewport height)
    const faceAppearAt = (window.innerHeight * 0.1) / 100; // Convert .1vh to pixels

    // If the scroll is below the appearance point, keep it fully visible
    if (scrollY < faceAppearAt) {
      return 1;
    }

    // Start fading out when scroll exceeds faceAppearAt (0.1vh)
    const fadeOutStart = faceAppearAt;
    const fadeOutEnd = fadeOutStart + window.innerHeight * 0.5; // Fade until 5% of the screen height

    // Calculate opacity between fadeOutStart and fadeOutEnd
    if (scrollY < fadeOutEnd) {
      return 1 - (scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart);
    }

    // Once past the fadeOutEnd, make it fully invisible
    return 0;
  };

  // Function to calculate visibility based on the scroll position for Face (0 to 0.1vh)
  const getFaceVisibility = () => {
    if (!isClient) return false;
    const maxScroll = window.innerHeight * 0.5;
    return scrollY >= 0 && scrollY <= maxScroll;
  };

  const getBackgroundColor = () => {
    if (!isClient) return "#FFF5E5";

    const lightColor = { r: 255, g: 245, b: 229 };
    const darkColor = { r: 25, g: 24, b: 24 };

    if (scrollY < fadeStart) {
      return `rgb(${lightColor.r}, ${lightColor.g}, ${lightColor.b})`;
    }

    if (scrollY > fadeEnd) {
      return `rgb(${darkColor.r}, ${darkColor.g}, ${darkColor.b})`;
    }

    const ratio = (scrollY - fadeStart) / (fadeEnd - fadeStart);
    const r = Math.floor(lightColor.r * (1 - ratio) + darkColor.r * ratio);
    const g = Math.floor(lightColor.g * (1 - ratio) + darkColor.g * ratio);
    const b = Math.floor(lightColor.b * (1 - ratio) + darkColor.b * ratio);

    return `rgb(${r}, ${g}, ${b})`;
  };

  if (!isClient) {
    return null; // Render nothing until the client-side is ready
  }

  return (
    <div
      className={`${styles.scrollContainerLanding}`}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div
        className={`${styles.hotspotcontainer} ${styles.sectionLanding} ${
          getVisibility(2, interactiveWomanDisappearMultiplier)
            ? styles.sectionLandingVisible
            : ""
        }`}
      >
        <Uterushotspot></Uterushotspot>
        <Hearthotspot></Hearthotspot>
        <Brainhotspot></Brainhotspot>

        <div className={`${styles.hotspot} ${styles.organ4}`}>
          <div className={styles.hoverDivbg}>
            <div className={styles.hoverDiv}></div>
          </div>
        </div>

        <div className={`${styles.hotspot} ${styles.organ5}`}>
          <div className={styles.hoverDivbg}>
            <div className={styles.hoverDiv}></div>
          </div>
        </div>
      </div>

      {/* Conditionally render Face component based on visibility */}
      {getFaceVisibility() && <Face opacity={getFaceOpacity()} />}

      <Landingcontent />
      {/* Section 1: Rotatingwoman */}
      <div
        className={`${styles.sectionLanding} ${
          getVisibility(0) ? styles.sectionLandingVisible : ""
        }`}
      >
        <Rotatingwoman
          backgroundColor={getBackgroundColor()}
          windowTransition={sectionMultiples[0] * (1.55 * window.innerHeight)}
        />
      </div>

      {/* Section 2: WorldMap */}
      <div
        className={`${styles.sectionLanding} ${
          getVisibility(1, worldMapDisappearMultiplier)
            ? styles.sectionLandingVisible
            : ""
        }`}
      >
        <WorldMap />
      </div>

      {/* Section 3: Interactivewoman */}
      <div
        className={`${styles.sectionLanding} ${
          getVisibility(2, interactiveWomanDisappearMultiplier)
            ? styles.sectionLandingVisible
            : ""
        }`}
      >
        <Interactivewoman message="Hello from Parent" />
      </div>

      {/*TODO: Replace with scroll trigger*/}
      {/* <button onClick={onReachedBottom}>Scroll Trigger</button> */}
    </div>
  );
};

export default Landing;
