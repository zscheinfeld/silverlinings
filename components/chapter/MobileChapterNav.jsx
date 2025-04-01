import styles from "./MobileChapterNav.module.scss";
import chapterStyles from "./Chapter.module.scss";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Chapters } from "@/data/book";
import { useRouter } from "next/router";

const MobileChapterNav = ({ isOpen, chapters, activeChapter, handleOpen }) => {
  const timeout = useRef(null);
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [openChapter, setOpenChapter] = useState(null);

  const setActive = (active) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    if (active && !expanded) {
      handleOpen(true);
      setExpanded(true);
      // Don't fire the event until after the transition.
    }
    if (!active && expanded) {
      setExpanded(false);
      // Don't fire the event until after the transition.
      timeout.current = setTimeout(() => {
        handleOpen(false);
      }, 600);
    }
  };

  const handleSubchapterClick = (e) => {
    e.stopPropagation();
    setActive(false);
  };

  const handleChapterClick = (e, number) => {
    e.stopPropagation();
    const chapter = Chapters[number];
    if (chapter.options?.forceLink) {
      router.push(chapter.options.forceLink);
      setExpanded(false);
    } else if (chapter.number === activeChapter) {
      setExpanded(false);
    } else {
      setOpenChapter(number);
    }
  };

  useEffect(() => {
    setOpenChapter(null);
  }, [activeChapter]);

  const currentActiveChapter = useMemo(() => {
    return openChapter || activeChapter;
  }, [openChapter, activeChapter]);

  return (
    <div
      className={`${styles.mobileChapterNav} ${expanded && styles.expanded} ${!isOpen && styles.hidden}`}
    >
      {chapters.map((chapter) => {
        const isActive = currentActiveChapter === chapter.number;

        return (
          <div
            key={chapter.slug}
            className={`${styles.mobileChapterNavSection} ${isActive && styles.active} ${expanded && styles.expanded}`}
          >
            <button
              className={`${styles.mobileChapterNavChapter} ${chapterStyles[`chap-${chapter.number + 1}`]} ${isActive && styles.active} ${expanded && styles.expanded}`}
              onClick={
                expanded
                  ? (e) => handleChapterClick(e, chapter.number)
                  : () => setActive(true)
              }
            >
              <span>{chapter.title}</span>
              <span>{chapter.number}</span>
            </button>
            <div
              className={`${styles.mobileChapterNavSubchapterAccordion} ${isActive && styles.active}`}
            >
              <div className={styles.mobileChapterNavSubchapters}>
                {chapter.subchapters.map((subchapter) => (
                  <Link
                    key={subchapter.slug}
                    className={styles.mobileChapterNavSubchapter}
                    onClick={handleSubchapterClick}
                    href={{
                      query: {
                        chapter: chapter.slug,
                        subchapter: subchapter.slug,
                      },
                    }}
                  >
                    <span>{subchapter.header}</span>
                    <span>
                      {chapter.number}.{subchapter.number}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileChapterNav;
