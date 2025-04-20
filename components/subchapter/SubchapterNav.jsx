import Markdown from "../content/Markdown";
import styles from "./SubchapterNav.module.scss";

// custom line breaks
const customBreakMap = {
  "1-1": 2,
  "2-1": 3,
  "2-2": 3, 
  "2-5": 4
  // etc.
};

const insertLineBreaksAsMarkdown = (text, wordLimit) => {
  const words = text.split(" ");
  const lines = [];

  for (let i = 0; i < words.length; i += wordLimit) {
    const line = words.slice(i, i + wordLimit).join(" ");
    lines.push(line);
  }

  // Join lines using Markdown soft break syntax
  return lines.join("  \n");
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
            <div className={styles.subchapterInfoContainer}>

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
