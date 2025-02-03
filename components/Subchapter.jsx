import { useInView } from "react-intersection-observer"
import Chart from "./Chart"
import Newaccordion from "./Newaccordion"
import Textblock from "./Textblock"
import styles from "@/components/Chapter.module.css"
import { useEffect } from "react"

const Subchapter =({subchapter})=>{
    const {header, number, content, slug} = subchapter 
    const {ref, inView}= useInView()
 
    useEffect(()=>{
        
        if (inView==true){
console.log(subchapter.header)
        }
        else{

        }
        
    }, [inView])


    return(
        <div ref={ref} id={slug} className={styles.subchaptermodules}>
        
        <div className={styles.subchaptername}>
            {header}
        </div>
        {content.map(({type,data}) => {
    
            if (type == "text"){
                return(
                    <Textblock callouts= {[data.callout]} paragraphs = {data.paragraphs}></Textblock>
                )
            }

            if (type =="chart"){
                return(
                    <Chart data={data}></Chart>
                ) 

            }

            if (type =="svgchart"){
                return(
                    <div className={styles.chartcontainer}>
                        <img src= {data.source}/>
                    </div>
                ) 
            }

            if (type =="accordion"){
                return(
                    <Newaccordion atitle={data.title} questions={data.questions} answers={data.answers}/>
                ) 
            }

            if (type =="bottompadding"){
                return(
                    <div className={styles.bottompadding}></div>
                ) 
            }

            // render accordian 
           
        


        })}

        </div>
    )


}

export default Subchapter