import Markdown from "../content/Markdown";
import styles from "./SubchapterNav.module.scss";

const SubchapterNav = ({
  chapter,
  subchapters,
  activeSubchapter,
  scrollToSubchapter,
  dark,
}) => {
  const { number } = chapter;
  return (
    <div className={`${styles.subchapterNav} ${dark && styles.dark}`}>
      <div className={styles.previousSubChapterContainer}>
        {subchapters.map((subchapter) => {
          if (subchapter.number < activeSubchapter) {
            return (
              <button
                key={subchapter.slug}
                onClick={() => scrollToSubchapter(subchapter.slug, true)}
                className={`${styles.previousSubChapter} ${styles.subchapterButton}`}
              />
            );
          }
        })}
      </div>
      {subchapters.map((subchapter) => {
        if (subchapter.number === activeSubchapter) {
          return (
            <button
              key={subchapter.slug}
              onClick={() => scrollToSubchapter(subchapter.slug, true)}
              className={`${styles.subchapterNavText} ${styles.subchapterButton}`}
            >
              {number}.{subchapter.number}
              <Markdown>{subchapter.header.split("\n")[0]}</Markdown>
            </button>
          );
        } else if (subchapter.number > activeSubchapter) {
          return (
            <button
              key={subchapter.slug}
              onClick={() => scrollToSubchapter(subchapter.slug, true)}
              className={`${styles.upcomingSubChapter} ${styles.subchapterButton}`}
            >
              {number}.{subchapter.number}
            </button>
          );
        }
      })}
    </div>
  );
};

export default SubchapterNav;
