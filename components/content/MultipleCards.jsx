import styles from "./MultipleCards.module.scss";
import sidenoteStyles from "./Sidenote.module.scss";
import { useInView } from "react-intersection-observer";

const MultipleCards = ({ cards }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div className={styles.multipleCardsModule}>
      <div className={styles.desktopLabelXL}>MARKET FAILURES</div>
      <div className={styles.multipleCardsContainer} ref={ref}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.multipleSidenoteInnerContainer} ${inView && styles.active}`}
            style={{ "--delay": `${index * 0.2}s` }}
          >
            <div className={styles.multipleSideNoteHeader}>{index + 1}</div>
            <div
              className={sidenoteStyles.sidenoteText}
              dangerouslySetInnerHTML={{ __html: card }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleCards;
