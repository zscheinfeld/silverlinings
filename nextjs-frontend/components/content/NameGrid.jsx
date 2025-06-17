import styles from "@/components/content/NameGrid.module.scss";
import Markdown from "./Markdown";

const NameGrid = ({ items }) => {
  return (
    <div className={styles.items}>
      {items.map(({ title, description }, index) => {
        return (
          <div className={styles.item} key={index}>
            <span className={styles.name}>{title}</span>
            <div className={styles.organization}>
              <Markdown>{description}</Markdown>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NameGrid;
