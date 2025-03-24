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
const RESISTANCE_THRESHOLD = 100;
const MOBILE_RESISTANCE_THRESHOLD = 150;

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
  const { title, number, subchapters, intro, image, options } = chapter;
  const { type = "default", color, spacer, hideSubchapterNav } = options || {};

  const overscroll = useRef();

  const transition = !isTopNavOpen && state;

  const chapterRef = useRef(null);
  const subchapterRefs = useRef([]);

  const handleActiveSubchapter = (subchapter) => {
    setActiveSubchapter(subchapter.number);
    window.history.replaceState(
      null,
      "",
      `${router.pathname}?${new URLSearchParams({
        chapter: chapter.slug,
        subchapter: subchapter.slug,
      }).toString()}`,
    );
  };

  useEffect(() => {
    if (router.query.chapter !== chapter.slug || !router.query.subchapter) {
      return;
    }
    scrollToSubchapter(router.query.subchapter);
  }, [router.query]);

  const scrollToSubchapter = (slug, smooth) => {
    const target = document.getElementById(slug);
    if (chapterRef.current && target) {
      const targetOffset = target.offsetTop - chapterRef.current.offsetTop;
      const BUFFER = 40;
      chapterRef.current.scrollTo({
        top: targetOffset - BUFFER,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  };

  useEffect(() => {
    if (!chapterRef.current || state !== "current") {
      overscroll.current = 0;
      return;
    }

    let startY = 0;

    const handleWheel = throttle((event) => {
      const { scrollTop, scrollHeight, clientHeight } = chapterRef.current;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 3;

      if (atBottom && event.deltaY > 0) {
        overscroll.current = Math.min(
          overscroll.current + event.deltaY,
          RESISTANCE_THRESHOLD,
        );
      } else if (atTop && event.deltaY < 0) {
        overscroll.current = Math.max(
          overscroll.current + event.deltaY,
          -RESISTANCE_THRESHOLD,
        );
      } else {
        overscroll.current = 0;
      }

      checkOverscroll(RESISTANCE_THRESHOLD);
    }, 200);

    const handleTouchStart = (event) => {
      if (event.touches.length === 1) {
        startY = event.touches[0].clientY;
      }
    };

    const handleTouchMove = throttle((event) => {
      if (!chapterRef.current) return;

      const currentY = event.touches[0].clientY;
      const deltaY = startY - currentY;

      const { scrollTop, scrollHeight, clientHeight } = chapterRef.current;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 3;

      if (atBottom && deltaY > 0) {
        overscroll.current =
          overscroll.current + Math.min(deltaY, MOBILE_RESISTANCE_THRESHOLD);
      } else if (atTop && deltaY < 0) {
        overscroll.current =
          overscroll.current + Math.max(deltaY, -MOBILE_RESISTANCE_THRESHOLD);
      } else {
        overscroll.current = 0;
      }

      checkOverscroll(MOBILE_RESISTANCE_THRESHOLD);
    }, 200);

    const checkOverscroll = (threshold) => {
      if (overscroll.current >= threshold) {
        onScrollToBottom?.();
        overscroll.current = 0;
      } else if (overscroll.current <= threshold * -1) {
        onScrollToTop?.();
        overscroll.current = 0;
      }
    };

    const el = chapterRef.current;
    el.addEventListener("wheel", handleWheel);
    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchmove", handleTouchMove);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
    };
  }, [state, overscroll]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      let scrolledSubchapter = 0;
      for (let i = 0; i < subchapterRefs.current.length; i++) {
        const ref = subchapterRefs.current[i];
        if (ref.getBoundingClientRect().top < 240) {
          scrolledSubchapter = i;
        }
      }
      handleActiveSubchapter(chapter.subchapters[scrolledSubchapter]);
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
          query: { chapter: chapter.slug },
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
          scrollToSubchapter={scrollToSubchapter}
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

        {image && (
          <div className={styles.chapterimage}>
            <img src={image} alt="" />
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
