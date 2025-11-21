import Markdown from "../content/Markdown";
import styles from "./SubchapterNav.module.scss";

// custom line breaks
const customBreakMap = {
  "1-1": 2,
  "1-3": 2,
  "2-1": 3,
  "2-2": 3, 
  "2-4": 3,
  "2-5": 4
  // etc.
};

const insertLineBreaksAsMarkdown = (text, wordLimit) => {
  const words = text.split(" ");

  const line1 = words.slice(0, wordLimit).join(" ");
  const line2 = words.slice(wordLimit).join(" ");

  // If there are words in line 2, insert 1 break
  if (line2) {
    return `${line1}  \n${line2}`;
  } else {
    return line1;
  }
};


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
            <div key={subchapter.slug} className={styles.subchapterInfoContainer}>

            <div className={styles.subchapterNumber}>
              <i>
            {number}.{subchapter.number}
            </i>
            </div>
            <button
  key={subchapter.slug}
  onClick={() => scrollToSubchapter(subchapter.slug, true)}
  className={`${styles.subchapterNavText} ${styles.subchapterButton}`}
>
<Markdown>
  {customBreakMap[subchapter.slug]
    ? insertLineBreaksAsMarkdown(subchapter.header.split(">")[0], customBreakMap[subchapter.slug])
    : subchapter.header.split(">")[0]}
</Markdown>

  
</button>
            </div>
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
