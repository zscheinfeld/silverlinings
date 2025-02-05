import styles from "@/components/Chapter.module.css";
import Link from "next/link";

const SubchapterNav = ({ subchapters, number, activeSubchapter }) => {
  return (
    <div className={styles.subchapterInnerNav}>
      <div className={styles.previousSubChapterContainer}>
        {subchapters.map((subchapter) => {
          if (subchapter.number < activeSubchapter) {
            return (
              <Link
                href={`#${subchapter.slug}`}
                className={styles.previousSubChapter}
              ></Link>
            );
          }
        })}
      </div>
      {subchapters.map((subchapter) => {
        if (subchapter.number == activeSubchapter) {
          return (
            <Link
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
