import styles from "@/components/Landing.module.css";
import Uterushotspot from "./cards/Uterushotspot";
import Brainhotspot from "./cards/Brainhotspot";
import Hearthotspot from "./cards/Hearthotspot";

const Interactivewoman = () => {
  return (
    <div className={styles.womanContainer}>
      <Uterushotspot></Uterushotspot>
      <Brainhotspot></Brainhotspot>
      <Hearthotspot></Hearthotspot>

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

      <div className={styles.womanInnerContainer}>
        <img src="/woman4.png" alt="Interactive Woman" />
      </div>
      {/* <div className={styles.gradientOverlay}></div> */}
    </div>
  );
};

export default Interactivewoman;
