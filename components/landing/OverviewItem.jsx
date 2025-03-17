import styles from "@/components/Overview.module.scss"

const OverviewItem = ({
    futureTitle,
    imgSrc,
    futureImageLabel,
    futureImageLabelColor,
    futureInfo,
    stat1,
    stat2,
    stat3,
    statLabel1,
    statLabel2,
    statLabel3
  }) => {
    return (
        <div className={styles.futureContainer}>
        <div className={styles.futureTitle}>
          {futureTitle}
        </div>

        <div className={styles.futureInfoContainer}>
          <div className={styles.futureImage}>
            <div className={styles.futureImageContainer}>
              <img src={imgSrc} alt="Future Opportunity" />
            </div>
            <div className={styles.futureImageLabel}>
              {futureImageLabel} <span className={`${styles.colors} ${futureImageLabelColor}`}>
                (P)
              </span>
            </div>
          </div>

          <div className={styles.futureInfo}>
            {futureInfo}
          </div>

          <div className={styles.futureStats}>
            <div className={styles.label}>SIMULATION RESULTS</div>

            <div className={styles.statsContainer}>
              <div className={styles.innerStatsContainer}>
                <div className={styles.innerStat}>
                  {stat1}
                </div>
                <div className={styles.innerLabel}>
                  {statLabel1}
                </div>
              </div>
              <div className={styles.innerStatsContainer}>
                <div className={styles.innerStat}>
                  {stat2}
                </div>
                <div className={styles.innerLabel}>
                  {statLabel2}
                </div>
              </div>
              <div className={styles.innerStatsContainer}>
                <div className={styles.innerStat}>
                  {stat3}
                </div>
                <div className={styles.innerLabel}>
                  {statLabel3}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default OverviewItem;
  