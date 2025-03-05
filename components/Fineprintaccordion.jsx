import { useState } from "react";
import styles from "@/components/Chapter.module.css";

const SubchapterAccordion = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.Fineprintaccordionitem}>
      <div className={styles.fineprintharline}></div>
      <div
        className={styles.fineprintq}
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
      >
        <div className={styles.fineprintqtype}>{header}</div>
      </div>

      <div className={`${styles.fineprinta} ${isOpen ? styles.open : ""}`}>
        {children}
        <div className={styles.bottompadding}></div>
      </div>
      <div className={styles.fineprintharline}></div>
    </div>
  );
};

export default SubchapterAccordion;
