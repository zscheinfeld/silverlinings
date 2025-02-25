import React from "react";
import styles from "@/components/Landing.module.css";
import RotatingDivs from "./cards/RotatingDivs";

const Rotatingwoman = ({windowTransition}) => {
  // Convert the rgb backgroundColor to rgba
  // const rgbToRgba = (rgbColor, alpha = 0) => {
  //   const match = rgbColor.match(/\d+/g); // Extracts the r, g, b values
  //   if (match && match.length === 3) {
  //     const [r, g, b] = match;
  //     return `rgba(${r}, ${g}, ${b}, ${alpha})`; // Convert to rgba
  //   }
  //   return rgbColor; // Return the original if the format isn't valid
  // };

  // Convert the backgroundColor to an rgba with 0.1 alpha for the dark part of the gradient
  // const rgbaDark = rgbToRgba(backgroundColor, 0);

  return (
    <div className={styles.womanContainer}>
      <RotatingDivs 
       
        startTransitionAt={windowTransition} 
        />

      <div className={styles.womanInnerContainer}>
        <img src="/woman4.png" alt="Woman" />
      </div>
      <div
        className={styles.gradientOverlay}
        style={{
          backgroundImage: `linear-gradient(to right, #191818,rgba(0,0,10,0))`,
        }}
      ></div> {/* Updated gradient dynamically */}
    </div>
  );
};

export default Rotatingwoman;
