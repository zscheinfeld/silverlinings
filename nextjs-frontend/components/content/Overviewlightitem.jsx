import { useState } from "react";
import styles from "@/components/content/Overviewlight.module.scss";

const Overviewlightitem = ({
  futureTitle,
  altTitle,
  imgSrc,
  futureImageLabel,
  futureImageLabelColor,
  futureInfo,
  stat1,
  stat2,
  stat3,
  altStat1,
  altStat2,
  altStat3,
  statLabel1,
  statLabel2,
  statLabel3,
  enableSwitch = false,
  labelVisibility = "transparent", // or "transparent"
  
}) => {
  const [switched, setSwitched] = useState(false);

  const tagColorMap = {
    F: "tagF",
    P: "tagP",
    M: "tagM",
  };
  
  const tagLetters = futureImageLabel.match(/\((.*?)\)/)?.[1]
    .split(",")
    .map((l) => l.trim()) || [];

  const handleToggle = () => {
    if (!enableSwitch) return;
    setSwitched((prev) => !prev);
  };

  return (
    <div className={styles.futureContainer}>

      <div className={styles.futureInfoContainer}>
        <div className={styles.futureImage}>
          <div className={styles.futureImageContainer}>
            <img src={imgSrc} alt="Future Opportunity" />
          </div>
          <div className={styles.futureImageTitle}>
          {enableSwitch && switched && altTitle ? altTitle : futureTitle}

          {enableSwitch && (
            <div
              onClick={handleToggle}
              className={styles.switchButton}
            >
              <img src="Left.svg"></img>
              <img src="Right.svg"></img>
            </div>
          )}


          </div>
          
          <div className={styles.futureImageLabel}>
          
          {futureImageLabel.replace(/\s*\(.*\)/, "")}{" "}
<span className={styles.labelWrapper}>
  (
  {tagLetters.map((letter, index) => (
    <span
      key={index}
      className={styles[tagColorMap[letter] || "tagDefault"]}
    >
      {letter}
      {index < tagLetters.length - 1 && ", "}
    </span>
  ))}
  )
</span>


          </div>
        </div>

        {/* <div className={styles.futureInfo}>{futureInfo}</div> */}

        <div className={styles.futureStats}>
          {/* <div className={styles.label}>SIMULATION RESULTS</div> */}
          <div className={styles.statsContainer}>
            {/* Stat 1 */}
            <div className={styles.innerStatsContainer}>
              {stat1 && (
                <div
                  className={`${styles.innerStat} ${
                    switched ? styles.fadeOut : styles.fadeIn
                  }`}
                >
                  {stat1}
                </div>
              )}
              {altStat1 && (
                <div
                  className={`${styles.innerStat} ${
                    switched ? styles.fadeIn : styles.fadeOut
                  }`}
                >
                  {altStat1}
                </div>
              )}
<div
  className={`${styles.innerLabel} ${
    labelVisibility === "transparent" ? styles.transparent : ""
  }`}
>
  {statLabel1}
</div>
            </div>

            {/* Stat 2 */}
            <div className={styles.innerStatsContainer}>
              {stat2 && (
                <div
                  className={`${styles.innerStat} ${
                    switched ? styles.fadeOut : styles.fadeIn
                  }`}
                >
                  {stat2}
                </div>
              )}
              {altStat2 && (
                <div
                  className={`${styles.innerStat} ${
                    switched ? styles.fadeIn : styles.fadeOut
                  }`}
                >
                  {altStat2}
                </div>
              )}

<div
  className={`${styles.innerLabel} ${
    labelVisibility === "transparent" ? styles.transparent : ""
  }`}
>
  {statLabel2}
</div>
              
            </div>

            {/* Stat 3 */}
            <div className={styles.innerStatsContainer}>
              {stat3 && (
                <div
                  className={`${styles.innerStat} ${
                    switched ? styles.fadeOut : styles.fadeIn
                  }`}
                >
                  {stat3}
                </div>
              )}
              {altStat3 && (
                <div
                  className={`${styles.innerStat} ${
                    switched ? styles.fadeIn : styles.fadeOut
                  }`}
                >
                  {altStat3}
                </div>
              )}
            <div
  className={`${styles.innerLabel} ${
    labelVisibility === "transparent" ? styles.transparent : ""
  }`}
>
  {statLabel3}
</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Overviewlightitem;
