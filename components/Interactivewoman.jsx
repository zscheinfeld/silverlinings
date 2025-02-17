import styles from "@/components/Landing.module.css";

const Interactivewoman = () => {
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
