import styles from "./ImageGrid.module.scss";
import Markdown from "./Markdown";
import { useState, useRef, useEffect } from "react";
import classNames from "classnames";

const ImageGrid = ({ type, items }) => {
  const isTwoGrid = type === "TwoImageGrid";
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const refs = useRef([]);
  const [heights, setHeights] = useState({});

  const toggleIndex = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  useEffect(() => {
    const newHeights = {};
    expandedIndexes.forEach((index) => {
      const el = refs.current[index];
      if (el) {
        newHeights[index] = `${el.scrollHeight}px`;
      }
    });
    setHeights(newHeights);
  }, [expandedIndexes]);

  return (
    <div className={isTwoGrid ? styles.items_two : styles.items_three}>
      {items.map(({ title, description, image }, index) => {
        const isExpanded = expandedIndexes.includes(index);

        return (
          <div className={styles.item} key={index}>
            <img className={styles.image} src={image?.url} />
            <div className={styles.content}>
              {isTwoGrid ? (
                <>
                  {/* Person row with + / - toggle */}
                  <div
                    className={styles.personRow}
                    onClick={() => toggleIndex(index)}
                  >
                    <span className={styles.toggleIcon}>
                      {isExpanded ? "−" : "+"}
                    </span>
                    <span className={styles.personName}>
                      {title}
                    </span>
                  </div>

                  {/* Expandable description */}
                  <div
                    ref={(el) => (refs.current[index] = el)}
                    className={styles.descriptionWrapper}
                    style={{
                      maxHeight: isExpanded ? heights[index] || "0px" : "0px",
                      opacity: isExpanded ? 1 : 0,
                    }}
                  >
                    <div className={styles.description}>
                      <Markdown>{description}</Markdown>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* No toggle — just title and description */}
                  <span className={styles.title}>{title}</span>
                  <div className={styles.description}>
                    <Markdown>{description}</Markdown>
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageGrid;
