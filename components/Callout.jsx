import styles from "@/components/Chapter.module.css";

const Callout = ({ content }) => {
  return <div className={styles.callout}>{content}</div>;
};

export default Callout;
