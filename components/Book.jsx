import { useState } from "react";
import Chapter from "./Chapter";
import Chapter1 from "@/data/chapter1";
import Chapter2 from "@/data/chapter2";
import Chapter3 from "@/data/chapter3";
import styles from "./Chapter.module.css";

// import "./Book.scss";


const Chapters = [
  Chapter1,
  Chapter2,
  Chapter3
  // { name: 'chap4', number: 4 },
  // { name: 'chap5', number: 5 },
];

const Book = () => {
  // const [value, fnToUpdateTheValue] = useState(defaultValue)
  const [activeChapter, setActiveChapter] = useState(1);

  const handleClick = (number) => {
    setActiveChapter(number);
    // console.log("new chapter")
  };

  return (

    <div className="book">
      {Chapters.map((chapter) => {
        const { number, name } = chapter;
        let state = "current";

        if (number == activeChapter - 1 ) {
          state = "previous";
        } 

        else if (number < activeChapter - 1){
          state = "archived";
        }
  
        else if (number == activeChapter + 1) {
          state = "next";
        }

        else if (number > activeChapter + 1) {
          state = "upcoming";
        }
      
        return (
          <div className={`chapter ${state}`} style={{ display: "flex" }}>
            <button onClick={() => handleClick(number)} className={`${styles.subchapterNav} chapter-bar  chap-${chapter.number} chap-${state} `}>
            <div className={styles.subchapterNavText}>
            0{chapter.number} / {chapter.title}
            </div>
            </button>
            
            {/* <button
              onClick={() => handleClick(number)}
              className={`chapter-bar ${name}`}
            >
              {number}
            </button> */}
            {/* Use -1 here because arrays are 0-indexed */}
            <Chapter chapter={chapter} />
          </div>
        );
      })}
    </div>
  );
};

export default Book;
