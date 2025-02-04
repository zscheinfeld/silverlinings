import Chart from "@/components/Chart";
import Population from "@/data/charts/population";
import Population2 from "@/data/charts/population2";
import Accordion from "@/components/Accordion";
import styles from "@/components/Chapter.module.css"
import Textblock from "@/components/Textblock";
import content from "@/data/content.json";
import Subchapter from "./Subchapter";
import SubchapterNav from "./SubchapterNav";
import React, { useRef, useEffect } from "react";


const Chapter = ({chapter}) =>{

  const mainContentRef = useRef(null);

  const {title,number,subchapters} = chapter

    const accordionItems = [
        { title: 'Section 1', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
        { title: 'Section 2', content: 'Content for Section 2' },
        { title: 'Section 3', content: 'Content for Section 3' },
      ];

    return(

    <>
    



      <SubchapterNav subchapters={subchapters} number={number}></SubchapterNav>   
    
      <div ref={mainContentRef} className={styles.maincontent}>
        
      <div className={styles.chaptername}>
        {title}
      </div>
      {subchapters.map(subchapter => (<Subchapter subchapter={subchapter} chapterNumber={number}></Subchapter>))}
      
      </div>
      
    </>
    )


}



export default Chapter;
