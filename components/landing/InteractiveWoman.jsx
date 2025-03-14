import styles from "@/components/Landing.module.scss";
import UterusHotspot from "./cards/UterusHotspot";
import BrainHotspot from "./cards/BrainHotspot";
import HeartHotspot from "./cards/HeartHotspot";

const InteractiveWoman = () => {
  return (
    <div className={styles.womanContainer}>
      <UterusHotspot></UterusHotspot>
      <BrainHotspot></BrainHotspot>
      <HeartHotspot></HeartHotspot>

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

export default InteractiveWoman;
