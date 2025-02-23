import { useEffect, useMemo, useState } from "react";
import Chapter from "./Chapter";
import { Chapters } from "@/data/book";
import { useRouter } from "next/router";
import Topnav from "@/components/Topnav";
import styles from "./Book.module.css";

const Book = ({ active }) => {
  const [activeChapter, setActiveChapter] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const { chapter } = router.query;
    if (!chapter) return;
    const currentChapter = Chapters.find((c) => c.slug === chapter);
    if (currentChapter) {
      setActiveChapter(currentChapter.number);
    }
  }, [router.query]);

  useEffect(() => {
    // Hide the body scroll when the book is active.
    if (active) {
      document.body.style.overflowY = "hidden";
    }
  }, [active]);

  const style = useMemo(() => {
    return {
      left: active ? 0 : "100%",
    };
  }, [active]);

  const onScrollToBottom = () => {
    if (activeChapter === 3) return; // Prevent transition if it's Chapter 3
  
    const nextChapter = Chapters[activeChapter];
    if (nextChapter) {
      void router.push({
        pathname: router.pathname,
        query: { ...router.query, chapter: nextChapter.slug },
      });
    }
  };
  
  const onScrollToTop = () => {
    if (activeChapter === 3) return; // Prevent transition if it's Chapter 3
  
    const previousChapter = Chapters[activeChapter - 2];
    if (previousChapter) {
      void router.push({
        pathname: router.pathname,
        query: { ...router.query, chapter: previousChapter.slug },
      });
    }
  };
  

  return (
    <div className={styles.book} style={style}>
      <div className={styles.bookContent}>
        <Topnav />
        {Chapters.map((chapter) => {
          const { number } = chapter;
          const hasPrevious = number !== 1;
          const hasNext = number !== Chapters.length;

          let state = "current";

          if (number === activeChapter - 1) {
            state = "previous";
          } else if (number < activeChapter - 1) {
            state = "archived";
          } else if (number === activeChapter + 1) {
            state = "next";
          } else if (number > activeChapter + 1) {
            state = "upcoming";
          }

          return (
            <Chapter
              chapter={chapter}
              type={chapter.number === 3 ? "simulation" : undefined}
              state={state}
              hasPrevious={hasPrevious}
              hasNext={hasNext}
              onScrollToTop={onScrollToTop}
              onScrollToBottom={onScrollToBottom}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Book;
