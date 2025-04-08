import styles from "./Textblock.module.scss";
import Markdown from "markdown-to-jsx";

const Textblock = ({ paragraphs }) => {
  return (
    <div className={styles.textblock}>
      <Markdown>{paragraphs}</Markdown>
    </div>
  );
};

export default Textblock;
