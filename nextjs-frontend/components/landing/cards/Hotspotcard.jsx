import React, { useState } from "react";
import styles from "@/components/Landing.module.scss"; // Adjust path as needed

const HotspotCard = ({
    hotspotPosition = { top: "0px", left: "0px" },
    organImageSrc,
    overlayImageSrc,
    organAlt = "Organ",
    interventionTitle,
    descriptionText,
    yearlyGain,
    netPresentValue,
    livesSaved,
    hotspotColor = "#ff69b4", // default to pink if not set
    cardAlign = "center",
    baseImageSettings = { scale: 1, x: "0px", y: "0px", opacity: 1 },
    overlayImageSettings = { scale: 1.2, x: "10px", y: "-10px", opacity: 1 }
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
  
    const fadeDivStyle = cardAlign === "top"
      ? { top: "0", transform: "translateY(0%)" }
      : { top: "50%", transform: "translateY(-50%)" };
  
    const baseImageStyle = {
      position: "absolute",
      top: baseImageSettings.y,
      left: baseImageSettings.x,
      transform: `scale(${baseImageSettings.scale})`,
      opacity: baseImageSettings.opacity,
      transition: "opacity 0.5s ease, transform 0.5s ease",
      pointerEvents: "none",
    };
  
    const overlayImageStyle = {
      position: "absolute",
      top: overlayImageSettings.y,
      left: overlayImageSettings.x,
      transform: `scale(${overlayImageSettings.scale})`,
      opacity: isHovered ? overlayImageSettings.opacity : 0,
      transition: "opacity 0.8s ease, transform 0.8s ease",
      transitionDelay: ".3s",
      pointerEvents: "none",
    };
  
    const hoverDivStyle = {
      backgroundColor: isHovered ? hotspotColor : "#CCCCCC", // grey default, color on hover
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      transition: "background-color 0.3s ease",
      cursor: "pointer",
    };
  
    return (
      <div
        className={styles.hotspot}
        style={{ position: "absolute", ...hotspotPosition }}
      >
        <div className={styles.hoverDivbg}>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={hoverDivStyle}
          ></div>
        </div>
  
        <div
          className={`${styles.fadeDiv} ${isHovered ? styles.visible : styles.hidden}`}
          style={fadeDivStyle}
        >
          <div className={styles.cardtop}>
            <div className={styles.cardorgan} style={{ position: "relative" }}>
              {/* Base Image */}
              <img src={organImageSrc} alt={organAlt} style={baseImageStyle} />
              {/* Overlay Image */}
              {overlayImageSrc && (
                <img src={overlayImageSrc} alt={`${organAlt} overlay`} style={overlayImageStyle} />
              )}
            </div>
  
            <div className={styles.carddescription}>
              <div className={styles.cardlabel}>INTERVENTION</div>
              <div className={styles.cardtitle}>
                {interventionTitle}
              </div>
              <div className={styles.descriptiontext}>
                {descriptionText}
              </div>
            </div>
          </div>
  
          <div className={styles.cardhairline}></div>
  
          <div className={styles.cardbottom}>
            <div className={styles.carddatacontainer}>
              <div className={styles.carddatapoint}>
                <div className={styles.cardnumber}>{yearlyGain}</div>
                <div className={styles.cardnumberdescription}>
                  Yearly gain<br />to U.S. GDP
                </div>
              </div>
              <div className={styles.carddatapoint}>
                <div className={styles.cardnumber}>{netPresentValue}</div>
                <div className={styles.cardnumberdescription}>
                  Long-term <br /> Net Present Value
                </div>
              </div>
              <div className={styles.carddatapoint}>
                <div className={styles.cardnumber}>{livesSaved}</div>
                <div className={styles.cardnumberdescription}>
                  Lives saved<br />or gained by 2050
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HotspotCard;
  
