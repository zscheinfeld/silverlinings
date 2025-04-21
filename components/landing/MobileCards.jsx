import React from "react";
import styles from "@/components/landing/MobileCards.module.scss";

const MobileCards = ({ imageSrc, imageAlt, header, text}) => {
  return (
    <div className={`${styles.rcard}`}>
      <div className={styles.rcardimage}>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className={styles.rcardinformation}>
        <div className={styles.rcardheader}>{header}</div>
        <div className={styles.rcardtext}>{text}</div>
      </div>
    </div>
  );
};

export default MobileCards;
