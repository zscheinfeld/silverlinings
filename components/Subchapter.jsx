import Chart from "./Chart"
import Textblock from "./Textblock"
import styles from "@/components/Chapter.module.css"

const Subchapter =({subchapter})=>{
    const {header, number, content, slug} = subchapter 

    return(
        <div id={slug} className={styles.subchaptermodules}>
        
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