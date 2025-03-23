import styles from "./Bold.module.scss";

const Bold = ({ content }) => {
  return <div className={styles.bold}>{content}</div>;
};

export default Bold;
