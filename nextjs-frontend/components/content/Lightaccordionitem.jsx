import styles from "@/components/content/Lightaccordion.module.scss";
import { useRef, useState } from "react";

const Lightaccordionitem = ({ number, question, children }) => {
  const [expand, setExpand] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    const content = contentRef.current;
    if (!content) return;

    if (expand) {
      // Collapse
      content.style.maxHeight = "0px";
    } else {
      // Expand to scrollHeight
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
    setExpand((prev) => !prev);
  };

  return (
    <div className={styles.item}>
      <div onClick={toggleAccordion} className={styles.questioncontainer}>
        {/* Optional number toggle (currently replaced by icon) */}
        <div className={styles.svg}>
          <img src="/info.svg" alt="accordion icon" />
        </div>
        <div className={`${styles.question} ${styles.noselect}`}>
          {question /* can be string OR JSX */}
        </div>
      </div>

      <div
        ref={contentRef}
        className={`${styles.answer} ${styles.noselect} ${
          expand ? styles.open : styles.closed
        }`}
        style={{
          maxHeight: "0px",
          overflow: "hidden",
          transition: "max-height 0.4s ease-in-out",
        }}
      >
        {children}
        <div className={styles.answerpadding}></div>
      </div>
    </div>
  );
};

export default Lightaccordionitem;
