import React, { useState } from "react";
import styles from "@/components/Landing.module.css"; // Import the CSS module

const Hearthotspot = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className={`${styles.hotspot} ${styles.heart}`}>
      <div className={styles.hoverDivbg}>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${styles.hoverDiv} ${styles.hoverDivred}`}
        ></div>
      </div>

      {/* Keep fadeDiv in the DOM and toggle its visibility */}
      <div
        className={`${styles.fadeDiv} ${isHovered ? styles.visible : styles.hidden}`}
      >
        <div className={styles.cardtop}>
          <div className={styles.cardorgan}>
            <img src="/Heart.png" alt="Heart" />
          </div>
          <div className={styles.carddescription}>
            <div className={styles.cardlabel}>INTERVENTION</div>
            <div className={styles.cardtitle}>2x increase in organ supply</div>
            <div className={styles.descriptiontext}>
              Most productivity depends on cognitive function, and brain health
              is the foundation of human identity. Though a distinction is often
              made between “healthy” brain aging and neurodegenerative diseases,
              the boundary between normal and abnormal neurodegeneration is
              blurry. Much funding is devoted to late-stage brain diseases, but
              the predictable decline of brain health with age remains
              overlooked.
            </div>
          </div>
        </div>

        <div className={styles.cardhairline}></div>

        <div className={styles.cardbottom}>
          <div className={styles.carddatacontainer}>
            <div className={styles.carddatapoint}>
              <div className={styles.cardnumber}>$68B</div>
              <div className={styles.cardnumberdescription}>
                Yearly gain<br></br> to U.S. GDP
              </div>
            </div>
            <div className={styles.carddatapoint}>
              <div className={styles.cardnumber}>$3.9T</div>
              <div className={styles.cardnumberdescription}>
                Long-term <br></br>return Net Present <br></br> Value over
                decades
              </div>
            </div>
            <div className={styles.carddatapoint}>
              <div className={styles.cardnumber}>600k</div>
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

export default Hearthotspot;
