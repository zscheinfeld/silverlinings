import styles from "@/components/Chapter.module.css";
import Subchapter from "./Subchapter";
import SubchapterNav from "./SubchapterNav";
import React, { useRef, useEffect, useState, useMemo } from "react";
import { throttle } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";

const BAR_WIDTH = 60;
const RESISTANCE_THRESHOLD = 600;

const Chapter = ({
  chapter,
  type = "default",
  state,
  hasPrevious,
  hasNext,
  onScrollToTop,
  onScrollToBottom,
}) => {
  const [activeSubchapter, setActiveSubchapter] = useState(1);
  const router = useRouter();
  const [overscroll, setOverscroll] = useState(0);
  const { title, number, subchapters } = chapter;

  const chapterRef = useRef(null);
  const subchapterRefs = useRef([]);

  const handleActiveSubchapter = (subchapterNumber) => {
    setActiveSubchapter(subchapterNumber);
    const hash = `#${number}-${subchapterNumber}`;
    window.history.replaceState(null, "", hash);
  };

  useEffect(() => {
    const handleScroll = throttle((event) => {
      if (!chapterRef.current || state !== "current") return;

      const { scrollTop, scrollHeight, clientHeight } = chapterRef.current;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 3;

      if (atBottom && event.deltaY > 0) {
        setOverscroll((prev) =>
          Math.min(prev + event.deltaY, RESISTANCE_THRESHOLD),
        );
      } else if (atTop && event.deltaY < 0) {
        setOverscroll((prev) =>
          Math.max(prev + event.deltaY, -RESISTANCE_THRESHOLD),
        );
      } else {
        setOverscroll(0); // Reset overscroll if scrolling normally
      }

      if (overscroll >= RESISTANCE_THRESHOLD) {
        onScrollToBottom?.();
        setOverscroll(0);
      } else if (overscroll <= -RESISTANCE_THRESHOLD) {
        onScrollToTop?.();
        setOverscroll(0);
      }
    }, 200);

    chapterRef.current?.addEventListener("wheel", handleScroll);

    return () => {
      chapterRef.current?.removeEventListener("wheel", handleScroll);
    };
  }, [state, overscroll]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      let scrolledSubchapter = 1;
      for (let i = 0; i < subchapterRefs.current.length; i++) {
        const ref = subchapterRefs.current[i];
        if (ref.getBoundingClientRect().top < 240) {
          scrolledSubchapter = i + 1;
        }
      }
      handleActiveSubchapter(scrolledSubchapter);
    }, 200);

    chapterRef.current.addEventListener("scroll", handleScroll);
    return () => {
      return chapterRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const style = useMemo(() => {
    let style = {
      left: hasPrevious ? `${BAR_WIDTH}px` : 0,
      zIndex: number,
    };

    if (hasPrevious && hasNext) {
      style.width = `calc(100vw - ${BAR_WIDTH * 2}px)`;
    } else {
      style.width = `calc(100vw - ${BAR_WIDTH}px)`;
    }

    if (state === "previous") {
      style.left = 0;
    } else if (state === "archived") {
      style.left = `-${BAR_WIDTH}px`;
    } else if (state === "next") {
      style.left = `calc(100% - ${BAR_WIDTH}px)`;
    } else if (state === "upcoming") {
      style.left = "100%";
    }
    return style;
  }, [state, hasPrevious, hasNext]);

  return (
    <div className={`${styles.chapter} ${state}`} style={style}>
      <Link
        href={{
          pathname: router.pathname,
          query: { ...router.query, chapter: chapter.slug },
        }}
        className={`${styles.subchapterNav} ${styles[`chap-${chapter.number}`]} ${styles[`chap-${state}`]}`}
      >
        <div className={styles.subchapterNavText}>
          0{chapter.number} / {chapter.title}
        </div>
      </Link>

      <SubchapterNav
        subchapters={subchapters}
        number={number}
        activeSubchapter={activeSubchapter}
      />

      <div
        ref={chapterRef}
        id={`chapter-${number}`}
        className={
          type === "simulation" ? styles.simulatorcontent : styles.maincontent
        }
      >
        {type === "default" ? (
          <div className={styles.chaptername}>{title}</div>
        ) : null}

        {subchapters.map((subchapter, i) => (
          <Subchapter
            ref={(ref) => (subchapterRefs.current[i] = ref)}
            subchapter={subchapter}
            chapterNumber={number}
          />
        ))}
      </div>
    </div>
  );
};

export default Chapter;
