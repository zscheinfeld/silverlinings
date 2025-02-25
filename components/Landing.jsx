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

import Gsaplanding from "./Gsaplanding";

const Landing = ({ onReachedBottom }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false); // Track if we're in the browser
  const [fadeEnd, setFadeEnd] = useState(0); // Dynamically set fadeEnd


  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true); // Now we know we're on the client-side
      setFadeEnd(window.innerHeight); // Dynamically set fadeEnd to match window height

      const handleScroll = () => {
        setScrollY(window.scrollY); // Update scroll position
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
      setFadeEnd(window.innerHeight);

      const handleScroll = () => {
        setScrollY(window.scrollY);

        // Check if user has scrolled to the bottom
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        if (window.scrollY >= scrollableHeight - 10) {
          // Add a small buffer
          onReachedBottom(); // Trigger the event
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [onReachedBottom]);



  if (!isClient) {
    return null; // Render nothing until the client-side is ready
  }

  return (

    <Gsaplanding></Gsaplanding>
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
