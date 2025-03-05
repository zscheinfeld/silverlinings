import styles from "@/components/Newaccordion.module.css";
import { useRef, useState } from "react";

const Accordionitem = ({ number, question, answer }) => {
  const [expand, setExpand] = useState(false);
  const contentRef = useRef(null); // Ref to access the .answer element

  const toggleAccordion = () => {
    const content = contentRef.current;
    if (expand) {
      // Collapse the accordion
      content.style.maxHeight = "0px";
    } else {
      // Expand the accordion and dynamically set the max height
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
    setExpand((prev) => !prev);
  };

  return (
    <div className={styles.item}>
      <div onClick={toggleAccordion} className={`${styles.questioncontainer}`}>
        {number ? (
          <div className={styles.button}>{number}.</div>
        ) : (
          <div className={styles.button}>+</div>
        )}
        <div className={`${styles.question} ${styles.noselect}`}>
          {question}
        </div>
      </div>
      <div
        ref={contentRef} // Attach the ref here
        className={`${styles.answer} ${styles.noselect} ${expand ? styles.open : styles.closed}`}
        style={{
          maxHeight: "0px",
          overflow: "hidden",
          transition: "max-height 0.4s ease-in-out",
        }}
      >
        {answer}
        <div className={styles.answerpadding}></div>
      </div>
    </div>
  );
};

export default Accordionitem;
