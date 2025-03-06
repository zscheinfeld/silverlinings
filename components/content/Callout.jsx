import styles from "./Callout.module.scss";

const Callout = ({ content }) => {
  return <div className={styles.callout}>{content}</div>;
};

export default Callout;
