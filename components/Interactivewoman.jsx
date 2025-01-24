import styles from "@/components/Landing.module.css";
import Brainhotspot from "./cards/brainHotspot";
import Hearthotspot from "./cards/heartHotspot";

const Interactivewoman = ({ message }) => {
  console.log(message);

  return (
    <div className={styles.womanContainer}>
     
      <div className={styles.womanInnerContainer}>
        <img src="/woman4.png" alt="Interactive Woman" />
      </div>
      <div className={styles.gradientOverlay}></div>
    </div>
  );
};

export default Interactivewoman;
