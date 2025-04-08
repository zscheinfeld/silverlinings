import styles from "@/components/content/NameGrid.module.scss";

const NameGrid = ({ items }) => {
  return (
    <div className={styles.items}>
      {items.map(({ title, description }, index) => {
        return (
          <div className={styles.item} key={index}>
            <span className={styles.name}>{title}</span>
            <p className={styles.organization}>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NameGrid;
