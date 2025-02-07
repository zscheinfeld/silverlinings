import { useEffect, useState } from "react";
import Chapter from "./Chapter";
import styles from "./Chapter.module.css";
import { Chapters } from "@/data/book";
import Link from "next/link";
import { useRouter } from "next/router";
import Topnav from "@/components/Topnav";

const Book = () => {
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

  return (
    <div className="book">
      <Topnav />
      {Chapters.map((chapter) => {
        const { number } = chapter;
        let state = "current";

        if (number == activeChapter - 1) {
          state = "previous";
        } else if (number < activeChapter - 1) {
          state = "archived";
        } else if (number == activeChapter + 1) {
          state = "next";
        } else if (number > activeChapter + 1) {
          state = "upcoming";
        }

        console.log(chapter.title, state);

        return (
          <div className={`chapter ${state}`} style={{ display: "flex" }}>
            <Link
              href={{
                pathname: router.pathname,
                query: { ...router.query, chapter: chapter.slug },
              }}
              className={`${styles.subchapterNav} chapter-bar  chap-${chapter.number} chap-${state} `}
            >
              <div className={styles.subchapterNavText}>
                0{chapter.number} / {chapter.title}
              </div>
            </Link>
            <Chapter chapter={chapter} type={chapter.number === 3 ? "simulation" : undefined} />
          </div>
        );
      })}
    </div>
  );
};

export default Book;
