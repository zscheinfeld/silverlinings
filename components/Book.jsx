import { useMemo } from "react";
import Chapter from "./chapter/Chapter";
import { useRouter } from "next/router";
import styles from "./Book.module.scss";
import usePrevious from "@/hooks/usePrevious";

const Book = ({ book, activeChapter, isOpen, isTopNavOpen }) => {
  const router = useRouter();
  const { chapters } = book;

  const style = useMemo(() => {
    return {
      left: isOpen ? 0 : "100%",
    };
  }, [isOpen]);

  const onScrollToBottom = () => {
    const nextChapter = chapters[activeChapter + 1];
    if (nextChapter) {
      void router.push({
        pathname: router.pathname,
        query: { chapter: nextChapter.slug },
      });
    }
  };

  const onScrollToTop = () => {
    const previousChapter = chapters[activeChapter - 1];
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
        {chapters.map((chapter) => {
          const { number } = chapter;
          const hasPrevious = number !== 0;
          const hasNext = number !== chapters.length - 1;

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
