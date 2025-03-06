import styles from "./SubchapterNav.module.scss";
import Link from "next/link";

const SubchapterNav = ({ subchapters, number, activeSubchapter }) => {
  return (
    <div className={styles.subchapterInnerNav}>
      <div className={styles.previousSubChapterContainer}>
        {subchapters.map((subchapter) => {
          if (subchapter.number < activeSubchapter) {
            return (
              <Link
                key={subchapter.slug}
                href={`#${subchapter.slug}`}
                className={styles.previousSubChapter}
              />
            );
          }
        })}
      </div>
      {subchapters.map((subchapter) => {
        if (subchapter.number === activeSubchapter) {
          return (
            <Link
              key={subchapter.slug}
              href={`#${subchapter.slug}`}
              className={styles.subchapterInnernavText}
            >
              {number}.{subchapter.number}
              {subchapter.header}
            </Link>
          );
        } else if (subchapter.number > activeSubchapter) {
          return (
            <Link
              key={subchapter.slug}
              href={`#${subchapter.slug}`}
              className={styles.upcomingSubChapter}
            >
              {number}.{subchapter.number}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default SubchapterNav;
