import { useState } from "react";
import styles from "./SubchapterToggle.module.scss";

const SubchapterToggle = ({ header, children, isHeader }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.toggle} ${isHeader && styles.header}`}>
      {!isHeader && <div className={styles.line}></div>}
      <div
        className={styles.question}
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
      >
        <div className={styles.title}>
          <span className={styles.icon}>{isOpen ? "- " : "+ "}</span>
          <span className={isHeader && styles.underline}>{header}</span>
        </div>
      </div>

      <div className={`${styles.answer} ${isOpen ? styles.open : ""}`}>
        {children}
        <div className={styles.bottompadding}></div>
      </div>
      {!isHeader && <div className={styles.line}></div>}
    </div>
  );
};

export default SubchapterToggle;
