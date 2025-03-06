import styles from "@/components/content/NameGrid.module.scss";

const NameGrid = ({ items }) => {
  return (
    <div className={styles.items}>
      {items.map(({ name, organization }, index) => {
        return (
          <div className={styles.item} key={index}>
            <span className={styles.name}>{name}</span>
            <p className={styles.organization}>{organization}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NameGrid;
