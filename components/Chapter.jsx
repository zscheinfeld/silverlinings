import styles from "@/components/Chapter.module.css";
import Subchapter from "./Subchapter";
import SubchapterNav from "./SubchapterNav";
import React, { useRef, useEffect, useState } from "react";
import { throttle } from "lodash";

const Chapter = ({ chapter }) => {
  const [activeSubchapter, setActiveSubchapter] = useState(1);
  const { title, number, subchapters } = chapter;

  const chapterRef = useRef(null);
  const subchapterRefs = useRef([]);

  const handleActiveSubchapter = (subchapterNumber) => {
    setActiveSubchapter(subchapterNumber);
    const hash = `#${number}-${subchapterNumber}`;
    window.history.replaceState(null, "", hash);
  };

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

  return (
    <>
      <SubchapterNav
        subchapters={subchapters}
        number={number}
        activeSubchapter={activeSubchapter}
      />

      <div
        ref={chapterRef}
        id={`chapter-${number}`}
        className={styles.maincontent}
      >
        <div className={styles.chaptername}>{title}</div>
        {subchapters.map((subchapter, i) => (
          <Subchapter
            ref={(ref) => (subchapterRefs.current[i] = ref)}
            subchapter={subchapter}
            chapterNumber={number}
          />
        ))}
      </div>
    </>
  );
};

export default Chapter;
