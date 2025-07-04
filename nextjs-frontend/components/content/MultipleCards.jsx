import Markdown from "./Markdown";
import styles from "./MultipleCards.module.scss";
import sidenoteStyles from "./Sidenote.module.scss";
import { useInView } from "react-intersection-observer";

const MultipleCards = ({ cards, title }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div className={styles.multipleCardsModule}>
      {title && (
        <div className={styles.desktopLabelXL}>{title.toUpperCase()}</div>
      )}
      <div className={styles.multipleCardsContainer} ref={ref}>
        {cards.map((card, index) => {
          const match = card.match(/^#{1,6}\s+(.*)\n\n([\s\S]*)/);

          let header, content;

          if (match) {
            header = match[1].trim();
            content = match[2].trim();
          } else {
            header = null; // or ''
            content = card.trim();
          }

          return (
            <div
              key={index}
              className={`${styles.multipleSidenoteInnerContainer} ${inView && styles.active}`}
              style={{ "--delay": `${index * 0.2}s` }}
            >
              <div className={styles.multipleSideNoteHeader}>
                {header || index + 1}
              </div>
              <div className={sidenoteStyles.sidenoteText}>
                <Markdown>{content}</Markdown>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultipleCards;
