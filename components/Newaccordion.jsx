import styles from "@/components/Newaccordion.module.css";
import Accordionitem from "./Accordionitem";

const Newaccordion = ({ title, numbered, questions, answers }) => {
  return (
    <div className={styles.accordioncontainer}>
      {title && <div className={styles.title}>{title}</div>}

      {questions.map((item, index) => (
        <Accordionitem
          key={`accordion-${index}`}
          number={numbered ? index + 1 : undefined}
          question={item}
          answer={answers[index]}
        />
      ))}
    </div>
  );
};

export default Newaccordion;
