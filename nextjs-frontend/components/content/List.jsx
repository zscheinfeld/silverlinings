import styles from "./List.module.scss";
import Markdown from "./Markdown";

const List = ({ items }) => {
  return (
    <div className={styles.items}>
      {items.map(({ title, description }, index) => (
        <div key={index} className={styles.item}>
          <span className={styles.title}>{title}</span>
          <div className={styles.description}>
            <Markdown>{description}</Markdown>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
