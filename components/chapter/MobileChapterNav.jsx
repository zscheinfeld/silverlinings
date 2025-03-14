import styles from "./MobileChapterNav.module.scss";
import chapterStyles from "./Chapter.module.scss";
import { useState } from "react";

const MobileChapterNav = ({ chapters, activeChapter }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <button
      onClick={() => setExpanded((expanded) => !expanded)}
      className={`${styles.mobileChapterNav} ${expanded && styles.expanded}`}
    >
      {chapters.map((chapter) => {
        const isActive = activeChapter === chapter.number;
        return (
          <div
            key={chapter.slug}
            className={`${styles.mobileChapterNavSection} ${isActive && styles.active} ${expanded && styles.expanded}`}
          >
            <div
              className={`${styles.mobileChapterNavChapter} ${chapterStyles[`chap-${chapter.number + 1}`]} ${isActive && styles.active} ${expanded && styles.expanded}`}
            >
              <span>{chapter.title}</span>
              <span>{chapter.number}</span>
            </div>
            {isActive && (
              <div className={styles.mobileChapterNavSubchapters}>
                {chapter.subchapters.map((subchapter) => (
                  <div
                    key={subchapter.slug}
                    className={styles.mobileChapterNavSubchapter}
                  >
                    <span>{subchapter.header}</span>
                    <span>
                      {chapter.number}.{subchapter.number}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </button>
  );
};

export default MobileChapterNav;
