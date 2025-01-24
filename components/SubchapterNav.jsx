import styles from "@/components/Chapter.module.css"
import useHash from "@/hooks/useHash"
import Link from "next/link"

const SubchapterNav = ({subchapters, number, currentSubchapterNumber})=>{
const hash = useHash() 
    

    return(
        <div className={styles.subchapterInnerNav}>
          {/* <div className={styles.previousSubChapterContainer}>
            <div className={styles.previousSubChapter}>
            </div>
            <div className={styles.previousSubChapter}>
            </div>
            <div className={styles.previousSubChapter}>
            </div>
          </div> */}
        <h1 suppressHydrationWarning>{hash}</h1>
         <div className={styles.previousSubChapterContainer}>
         {subchapters.map(subchapter=>{
            if(subchapter.number<currentSubchapterNumber){

             return(

            
            <Link href={`#${subchapter.slug}`} className={styles.previousSubChapter}>
            </Link>
            )   

            }
         })}

         </div>
          {subchapters.map(subchapter=>{


            
            if (subchapter.number == currentSubchapterNumber){
                return (
                <Link href={`#${subchapter.slug}`} className={styles.subchapterInnernavText}>
                {number}.{subchapter.number}
                {subchapter.header}
                </Link>
                )  
            }

            else if (subchapter.number> currentSubchapterNumber){
            return(
            <Link href={`#${subchapter.slug}`} className={styles.upcomingSubChapter}>
            {number}.{subchapter.number}
            </Link>
            )
            }


            
            
            })}
       
          {/* 
          <div className={styles.upcomingSubChapter}>
            1.3
          </div> */}
      </div> 
    )
}

export default SubchapterNav

