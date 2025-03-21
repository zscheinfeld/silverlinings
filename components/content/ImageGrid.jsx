import styles from "./ImageGrid.module.scss";

const ImageGrid = ({ type, items }) => {
  return (
    <div
      className={type === "two-column" ? styles.items_two : styles.items_three}
    >
      {items.map(({ title, description, image }, index) => {
        return (
          <div className={styles.item} key={index}>
            <img className={styles.image} src={image} />
            <div className={styles.content}>
              <span className={styles.title}>{title}</span>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageGrid;
