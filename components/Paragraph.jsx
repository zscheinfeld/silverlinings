import styles from "@/components/Chapter.module.css";

const Paragraph = ({ content }) => {
  return <p className={styles.paragraph}>{content}</p>;
};

export default Paragraph;
