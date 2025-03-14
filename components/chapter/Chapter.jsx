import styles from "@/components/chapter/Chapter.module.scss";
import Subchapter from "../subchapter/Subchapter";
import SubchapterNav from "../subchapter/SubchapterNav";
import React, { useRef, useEffect, useState, useMemo } from "react";
import { throttle } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import Textblock from "@/components/content/Textblock";
import Spacer from "@/components/content/Spacer";

const BAR_WIDTH = 60;
const RESISTANCE_THRESHOLD = 600;

const Chapter = ({
  chapter,
  state,
  hasPrevious,
  hasNext,
  isTopNavOpen,
  onScrollToTop,
  onScrollToBottom,
}) => {
  const [activeSubchapter, setActiveSubchapter] = useState(1);
  const router = useRouter();
  const [overscroll, setOverscroll] = useState(0);
  const { title, number, subchapters, intro, options } = chapter;
  const { type = "default", color, spacer, hideSubchapterNav } = options || {};

  const transition = !isTopNavOpen && state;

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
    const left = "--left";
    const zIndex = "--zIndex";
    const width = "--width";

    let style = {
      [left]: hasPrevious ? `${BAR_WIDTH}px` : 0,
      [zIndex]: number,
    };

    if (hasPrevious && hasNext) {
      style[width] = `calc(100% - ${BAR_WIDTH * 2}px)`;
    } else {
      style[width] = `calc(100% - ${BAR_WIDTH}px)`;
    }

    if (state === "previous") {
      style[left] = 0;
    } else if (state === "archived") {
      style[left] = `-${BAR_WIDTH}px`;
    } else if (state === "next") {
      style[left] = `calc(100% - ${BAR_WIDTH}px)`;
    } else if (state === "upcoming") {
      style[left] = "100%";
    }
    return style;
  }, [state, hasPrevious, hasNext]);

  return (
    <div
      className={`${styles.chapter} ${styles[state]} ${color === "black" && styles.black} ${transition && styles.transition}`}
      style={style}
    >
      <Link
        href={{
          pathname: router.pathname,
          query: { ...router.query, chapter: chapter.slug },
        }}
        className={`${styles.chapterNav} ${styles[`chap-${chapter.number}`]} ${styles[`chap-${state}`]}`}
      >
        <div className={styles.chapterNavText}>
          0{chapter.number} / {chapter.title}
        </div>
      </Link>

      {!hideSubchapterNav && (
        <SubchapterNav
          chapter={chapter}
          subchapters={subchapters}
          activeSubchapter={activeSubchapter}
        />
      )}

      <div
        ref={chapterRef}
        id={`chapter-${number}`}
        className={`${styles.maincontent} ${type === "simulation" && styles.simulatorcontent} ${transition && styles.smooth}`}
      >
        {type === "default" ? (
          <div className={styles.chaptername}>{title}</div>
        ) : null}

        {intro && (
          <div className={styles.chapterintro}>
            <Textblock paragraphs={[intro]} />
          </div>
        )}

        {spacer && <Spacer border={false} />}

        {subchapters.map((subchapter, i) => (
          <Subchapter
            key={subchapter.slug}
            ref={(ref) => (subchapterRefs.current[i] = ref)}
            subchapter={subchapter}
            chapterNumber={number}
          />
        ))}

        <Spacer border={false} />
      </div>
    </div>
  );
};

export default Chapter;
