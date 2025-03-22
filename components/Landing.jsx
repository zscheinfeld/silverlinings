import React, { useEffect, useState } from "react";

import GsapLanding from "./GsapLanding";

const Landing = ({ hidden, onReachedBottom }) => {
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (hidden) {
      setTimeout(() => {
        setRemoved(true);
      }, 1000);
    }

    // Hide the body scroll when the landing page is inactive.
    document.body.style.overflow = hidden ? "hidden" : "auto";
  }, [hidden]);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to the bottom
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= scrollableHeight - 200) {
        // Add a small buffer
        onReachedBottom(); // Trigger the event
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onReachedBottom]);

  if (removed) {
    return null;
  }

  return (
    <GsapLanding />
    // <div
    //   className={`${styles.scrollContainerLanding}`}
    //   style={{ backgroundColor: getBackgroundColor() }}
    // >
    //   <div
    //     className={`${styles.hotspotcontainer} ${styles.sectionLanding} ${
    //       getVisibility(2, interactiveWomanDisappearMultiplier)
    //         ? styles.sectionLandingVisible
    //         : ""
    //     }`}
    //   >
    //     <Uterushotspot></Uterushotspot>
    //     <Hearthotspot></Hearthotspot>
    //     <Brainhotspot></Brainhotspot>

    //     <div className={`${styles.hotspot} ${styles.organ4}`}>
    //       <div className={styles.hoverDivbg}>
    //         <div className={styles.hoverDiv}></div>
    //       </div>
    //     </div>

    //     <div className={`${styles.hotspot} ${styles.organ5}`}>
    //       <div className={styles.hoverDivbg}>
    //         <div className={styles.hoverDiv}></div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Conditionally render Face component based on visibility */}
    //   {getFaceVisibility() && <Face opacity={getFaceOpacity()} />}

    //   <Landingcontent />
    //   {/* Section 1: Rotatingwoman */}
    //   <div
    //     className={`${styles.sectionLanding} ${
    //       getVisibility(0) ? styles.sectionLandingVisible : ""
    //     }`}
    //   >
    //     <Rotatingwoman
    //       backgroundColor={getBackgroundColor()}
    //       windowTransition={sectionMultiples[0] * (1.55 * window.innerHeight)}
    //     />
    //   </div>

    //   {/* Section 2: WorldMap */}
    //   <div
    //     className={`${styles.sectionLanding} ${
    //       getVisibility(1, worldMapDisappearMultiplier)
    //         ? styles.sectionLandingVisible
    //         : ""
    //     }`}
    //   >
    //     <WorldMap />
    //   </div>

    //   {/* Section 3: Interactivewoman */}
    //   <div
    //     className={`${styles.sectionLanding} ${
    //       getVisibility(2, interactiveWomanDisappearMultiplier)
    //         ? styles.sectionLandingVisible
    //         : ""
    //     }`}
    //   >
    //     <Interactivewoman />
    //   </div>
    // </div>
  );
};

export default Landing;
