import styles from "./Spacer.module.scss";

const Spacer = ({ border = true }) => {
  return <div className={`${styles.spacer} ${border && styles.border}`} />;
};

export default Spacer;
