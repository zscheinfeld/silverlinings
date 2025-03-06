import styles from "./List.module.scss";

const List = ({ items }) => {
  return (
    <div className={styles.items}>
      {items.map(({ title, description }, index) => (
        <div key={index} className={styles.item}>
          <span className={styles.title}>{title}</span>
          <p className={styles.description}>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
