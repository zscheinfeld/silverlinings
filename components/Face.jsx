import styles from "@/components/Landing.module.css";

const Face = ({ opacity }) => {
  return (
    <div className={styles.faceoutercontainer} style={{ opacity }}>
      <div className={styles.faceinnercontainer}>
        <div className={styles.faceimage}>
          <img src="face.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Face;
