import React, { useState } from "react";
import styles from "@/components/Landing.module.scss"; // Import the CSS module

const BrainHotspot = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className={`${styles.hotspot} ${styles.brain}`}>
      <div className={`${styles.hoverDivbg}`}>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${styles.hoverDivyellow}`}
        ></div>
      </div>

      <div
        className={`${styles.fadeDiv} ${isHovered ? styles.visible : styles.hidden}`}
      >
        <div className={styles.cardtop}>
          <div className={styles.cardorgan}>
            <img src="/brain.png" alt="" />
          </div>
          <div className={styles.carddescription}>
            <div className={styles.cardlabel}>
              INTERVENTION
              {/* I fade in when you hover! */}
            </div>
            <div className={styles.cardtitle}>
              Slow brain aging by 1 year
              {/* I fade in when you hover! */}
            </div>
            <div className={styles.descriptiontext}>
              Most productivity depends on cognitive function, and brain health
              is the foundation of human identity. Though a distinction is often
              made between “healthy” brain aging and neurodegenerative diseases,
              the boundary between normal and abnormal neurodegeneration is
              blurry. Much funding is devoted to late-stage brain diseases, but
              the predictable decline of brain health with age remains
              overlooked.
              {/* I fade in when you hover! */}
            </div>
          </div>
        </div>

        <div className={styles.cardhairline}></div>

        <div className={styles.cardbottom}>
          <div className={styles.carddatacontainer}>
            <div className={styles.carddatapoint}>
              <div className={styles.cardnumber}>$364B</div>
              <div className={styles.cardnumberdescription}>
                Yearly gain<br></br> to U.S. GDP
              </div>
            </div>
            <div className={styles.carddatapoint}>
              <div className={styles.cardnumber}>$15T</div>
              <div className={styles.cardnumberdescription}>
                Long-term <br></br>return Net Present <br></br> Value over
                decades
              </div>
            </div>
            <div className={styles.carddatapoint}>
              <div className={styles.cardnumber}>257k</div>
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

export default BrainHotspot;
