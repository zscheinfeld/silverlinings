import styles from "@/components/content/Accordion.module.scss";
import AccordionItem from "./AccordionItem";
import { useMemo } from "react";
import Content from "@/components/content/Content";

const Accordion = ({ title, numbered, items, label = null }) => {
  const renderedAnswers = useMemo(() => {
    return items.map(({ description }) => {
      if (typeof description === "string") {
        return description.split("\n\n").map((paragraph, index) => (
          <div className={styles.answerparagraph} key={index}>
            {paragraph}
          </div>
        ));
      } else if (Array.isArray(description)) {
        return description.map((data, index) => (
          <Content key={index} {...data} />
        ));
      }
    });
  }, [items]);

  return (
    <div className={styles.accordioncontainer}>
      {title && <div className={styles.title}>{title}</div>}

      {items.map(({ title }, index) => (
        <AccordionItem
          key={`accordion-${index}`}
          number={numbered ? index + 1 : undefined}
          question={title}
        >
          {renderedAnswers[index]}
        </AccordionItem>
      ))}

      {label && <div className={styles.label}>{label}</div>}
    </div>
  );
};

export default Accordion;
