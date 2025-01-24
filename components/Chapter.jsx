import Chart from "@/components/Chart";
import Population from "@/data/charts/population";
import Population2 from "@/data/charts/population2";
import Accordion from "@/components/Accordion";
import styles from "@/components/Chapter.module.css"
import Textblock from "@/components/Textblock";
import content from "@/data/content.json";
import Subchapter from "./Subchapter";
import SubchapterNav from "./SubchapterNav";


const Chapter = ({chapter}) =>{

  const {title,number,subchapters} = chapter

    const accordionItems = [
        { title: 'Section 1', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
        { title: 'Section 2', content: 'Content for Section 2' },
        { title: 'Section 3', content: 'Content for Section 3' },
      ];

    return(

    <>



      <div className={styles.subchapterNav}>
          <div className={styles.subchapterNavText}>
            01 / Present
          </div>
        </div>

      <SubchapterNav subchapters={subchapters} number={number} currentSubchapterNumber={2}></SubchapterNav>   
    
      <div className={styles.maincontent}>
        
      <div className={styles.chaptername}>
        {title}
      </div>
      {subchapters.map(subchapter => (<Subchapter subchapter={subchapter}></Subchapter>))}
      {/* <div className={styles.subchaptername}>
      <i>More</i> humans, <i>fewer</i> problems
      </div>
      <Textblock callouts={content.textblocks[0].callouts} paragraphs={content.textblocks[0].paragraphs} />
      <Chart  data={Population}></Chart>
      <Textblock callouts={content.textblocks[1].callouts} paragraphs={content.textblocks[1].paragraphs} />
      <Chart  data={Population2}></Chart>
      <Accordion items={accordionItems}></Accordion>

      <div className={styles.subchaptername}>
      What is aging?
      </div>
      <Textblock callouts={content.textblocks[2].callouts} paragraphs={content.textblocks[2].paragraphs} />
      <Textblock callouts={content.textblocks[3].callouts} paragraphs={content.textblocks[3].paragraphs} />
      
      <div className={styles.subchaptername}>
      Mortality, productivity, and fertility in the U.S.
      </div> */}

      


      </div>
      
    </>
    )



}



export default Chapter;
