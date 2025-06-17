import styles from "./Sidenote.module.scss";
import { useInView } from "react-intersection-observer";

const Sidenote = ({ sidenotetext }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`${styles.sidenoteInnterContainer} ${inView && styles.active}`}
    >
      <div className={styles.sideNoteHeader}>SIDE NOTE</div>
      <div className={styles.sidenoteText}>{sidenotetext}</div>
    </div>
  );
};

export default Sidenote;
