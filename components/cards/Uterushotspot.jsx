import React, { useState } from "react";
import styles from "@/components/Landing.module.css"; // Import the CSS module

const Uterushotspot = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className={`${styles.hotspot} ${styles.uterus}`}>
      <div className={styles.hoverDivbg}>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${styles.hoverDiv} ${styles.hoverDivpink}`}
        ></div>
      </div>

      {/* Keep fadeDiv in the DOM and toggle its visibility */}
      <div
        className={`${styles.fadeDiv} ${styles.uterusfadeDiv} ${isHovered ? styles.visible : styles.hidden}`}
      >
        <div className={styles.cardtop}>
          <div className={styles.cardorgan}>
            <img src="/uterus.png" alt="Uterus" />
          </div>
          <div className={styles.carddescription}>
            <div className={styles.cardlabel}>INTERVENTION</div>
            <div className={styles.cardtitle}>Slow reproductive <br></br>aging by 1 year</div>
            <div className={styles.descriptiontext}>
            Most women in the U.S. reproduce after age 30. This increases miscarriages, maternal deaths, and infertility. Our model takes into account the short- and long-term effects of better reproductive aging on labor supply, wages, and new lives. We also consider the less studied relationship between menopause and lifespan/healthspan, as reproductive aging is increasingly understood as a driver of diseases like Alzheimer’s. 
            </div>
          </div>
        </div>

        <div className={styles.cardhairline}></div>

        <div className={styles.cardbottom}>
          <div className={styles.carddatacontainer}>
            <div className={styles.carddatapoint}>
              <div className={styles.cardnumber}>$11B</div>
              <div className={styles.cardnumberdescription}>
                Yearly gain<br></br> to U.S. GDP
              </div>
            </div>
            <div className={styles.carddatapoint}>
              <div className={styles.cardnumber}> $8.5T </div>
              <div className={styles.cardnumberdescription}>
                Long-term <br></br>return Net Present <br></br> Value over
                decades
              </div>
            </div>
            <div className={styles.carddatapoint}>
              <div className={styles.cardnumber}>25k</div>
              <div className={styles.cardnumberdescription}>
                Lived saved <br></br>or gained<br></br>by 2050
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uterushotspot;
