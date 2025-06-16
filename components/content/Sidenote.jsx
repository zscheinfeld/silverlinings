import styles from "./Sidenote.module.scss";
import { useInView } from "react-intersection-observer";
import Markdown from "./Markdown";

const Sidenote = ({ sidenotetext }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  // Check if the text starts with a markdown header
  const hasMarkdownHeading = /^\s*#{1,3}\s+.+/.test(sidenotetext);

  return (
    <div
      ref={ref}
      className={`${styles.sidenoteInnterContainer} ${inView && styles.active}`}
    >
      {!hasMarkdownHeading && (
        <div className={styles.sideNoteHeader}>SIDE NOTE</div>
      )}
      <div className={styles.sidenoteText}>
        <Markdown>{sidenotetext}</Markdown>
      </div>
    </div>
  );
};

export default Sidenote;
