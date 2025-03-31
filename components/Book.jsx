import { useMemo, useState } from "react";
import Chapter from "./chapter/Chapter";
import { Chapters } from "@/data/book";
import { useRouter } from "next/router";
import styles from "./Book.module.scss";
import MobileChapterNav from "@/components/chapter/MobileChapterNav";
import usePrevious from "@/hooks/usePrevious";

const Book = ({ activeChapter, isOpen, setIsTopNavOpen, isTopNavOpen }) => {
  const router = useRouter();

  const style = useMemo(() => {
    return {
      left: isOpen ? 0 : "100%",
    };
  }, [isOpen]);

  const onScrollToBottom = () => {
    const nextChapter = Chapters[activeChapter + 1];
    if (nextChapter) {
      void router.push({
        pathname: router.pathname,
        query: { chapter: nextChapter.slug },
      });
    }
  };

  const onScrollToTop = () => {
    const previousChapter = Chapters[activeChapter - 1];
    if (previousChapter && previousChapter.number !== 0) {
      void router.push({
        pathname: router.pathname,
        query: { chapter: previousChapter.slug },
      });
    }
  };

  const prevOpen = usePrevious(isOpen);
  const transition = prevOpen !== null;

  return (
    <div
      className={`${styles.book} ${transition && styles.transition}`}
      style={style}
    >
      <div className={styles.bookContent}>
        <MobileChapterNav
          chapters={Chapters}
          activeChapter={activeChapter}
          handleOpen={setIsTopNavOpen}
        />
        {Chapters.map((chapter) => {
          const { number } = chapter;
          const hasPrevious = number !== 0;
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
              key={chapter.number}
              chapter={chapter}
              state={state}
              hasPrevious={hasPrevious}
              hasNext={hasNext}
              transition={transition && !isTopNavOpen}
              isTopNavOpen={isTopNavOpen}
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
