import styles from "@/components/content/Accordion.module.scss";
import AccordionItem from "./AccordionItem";
import { useMemo } from "react";
import Content from "@/components/content/Content";

const Accordion = ({ title, numbered, questions, answers }) => {
  const renderedAnswers = useMemo(() => {
    return answers.map((answer) => {
      if (typeof answer === "string") {
        return answer.split("\n\n").map((paragraph, index) => (
          <div className={styles.answerparagraph} key={index}>
            {paragraph}
          </div>
        ));
      } else if (Array.isArray(answer)) {
        return answer.map(({ type, data }, index) => (
          <Content key={index} type={type} data={data} />
        ));
      }
    });
  }, [answers]);

  return (
    <div className={styles.accordioncontainer}>
      {title && <div className={styles.title}>{title}</div>}

      {questions.map((item, index) => (
        <AccordionItem
          key={`accordion-${index}`}
          number={numbered ? index + 1 : undefined}
          question={item}
        >
          {renderedAnswers[index]}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
