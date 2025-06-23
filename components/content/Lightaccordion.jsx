import styles from "@/components/content/Lightaccordion.module.scss";
import { useMemo } from "react";
import Content from "@/components/content/Content";
import Lightaccordionitem from "./Lightaccordionitem";

const Lightaccordion = ({ title, numbered, items, label = null }) => {
  const renderedAnswers = useMemo(() => {
    return items.map(({ title, description, content }) => {
      if (content?.length) {
        return content.map((data, index) => <Content key={index} {...data} />);
      } else if (description) {
        return (
          <div className={styles.answerBlock}>
            {description.split("\n\n").map((paragraph, index) => (
              <div className={styles.answerparagraph} key={index}>
                {paragraph}
              </div>
            ))}
          </div>
        );
      }
    });
  }, [items]);

  return (
    <div className={styles.accordioncontainer}>
      {title && <div className={styles.title}>{title}</div>}

      {items.map(({ title }, index) => (
        <Lightaccordionitem
        key={`accordion-${index}`}
          number={numbered ? index + 1 : undefined}
          question={title}
          >
    {renderedAnswers[index]}
        </Lightaccordionitem>
      ))}

      {label && <div className={styles.label}>{label}</div>}
    </div>
  );
};

export default Lightaccordion;
