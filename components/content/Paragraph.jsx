import styles from "./Paragraph.module.scss";

const Paragraph = ({ content }) => {
  return (
    <div
      className={styles.paragraph}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Paragraph;
