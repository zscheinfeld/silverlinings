import Markdown from "./Markdown";
import styles from "./Textblock.module.scss";

const Textblock = ({ paragraphs }) => {
  return (
    <div className={styles.textblock}>
      <Markdown>{paragraphs}</Markdown>
    </div>
  );
};

export default Textblock;
