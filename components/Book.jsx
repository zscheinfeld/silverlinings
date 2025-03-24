import { useMemo, useState } from "react";
import Chapter from "./chapter/Chapter";
import { Chapters } from "@/data/book";
import { useRouter } from "next/router";
import TopNav from "@/components/TopNav";
import styles from "./Book.module.scss";
import MobileChapterNav from "@/components/chapter/MobileChapterNav";

const Book = ({ activeChapter }) => {
  const router = useRouter();
  const [isTopNavOpen, setIsTopNavOpen] = useState(false);

  const style = useMemo(() => {
    return {
      left: activeChapter > 0 ? 0 : "100%",
    };
  }, [activeChapter]);

  const onScrollToBottom = () => {
    const nextChapter = Chapters[activeChapter];
    if (nextChapter) {
      void router.push({
        pathname: router.pathname,
        query: { chapter: nextChapter.slug },
      });
    }
  };

  const onScrollToTop = () => {
    const previousChapter = Chapters[activeChapter - 2];
    if (previousChapter) {
      void router.push({
        pathname: router.pathname,
        query: { chapter: previousChapter.slug },
      });
    }
  };

  return (
    <div className={`${styles.book}`} style={style}>
      <div className={styles.bookContent}>
        <TopNav handleOpen={setIsTopNavOpen} />
        <MobileChapterNav
          chapters={Chapters}
          activeChapter={activeChapter}
          handleOpen={setIsTopNavOpen}
        />
        {Chapters.map((chapter) => {
          const { number } = chapter;
          const hasPrevious = number !== 1;
          const hasNext = number !== Chapters.length;

          let state = "current";

          if (activeChapter <= 0) {
            state = undefined;
          } else if (number === activeChapter - 1) {
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
