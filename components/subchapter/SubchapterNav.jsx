import styles from "./SubchapterNav.module.scss";
import Link from "next/link";

const SubchapterNav = ({ chapter, subchapters, activeSubchapter }) => {
  const { slug, number } = chapter;
  return (
    <div className={styles.subchapterNav}>
      <div className={styles.previousSubChapterContainer}>
        {subchapters.map((subchapter) => {
          if (subchapter.number < activeSubchapter) {
            return (
              <Link
                key={subchapter.slug}
                href={{
                  hash: `#${subchapter.slug}`,
                  query: { chapter: slug },
                }}
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
              href={{
                hash: `#${subchapter.slug}`,
                query: { chapter: slug },
              }}
              className={styles.subchapterNavText}
            >
              {number}.{subchapter.number}
              {subchapter.header}
            </Link>
          );
        } else if (subchapter.number > activeSubchapter) {
          return (
            <Link
              key={subchapter.slug}
              href={{
                hash: `#${subchapter.slug}`,
                query: { chapter: slug },
              }}
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
