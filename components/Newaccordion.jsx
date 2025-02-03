import styles from "@/components/Newaccordion.module.css";
import Accordionitem from "./Accordionitem";

const Newaccordion = ({atitle, questions, answers}) =>{
    return(

        

     
        <div className={styles.accordioncontainer}>
        <div className={styles.title}>
        {atitle}
        </div>
        

        {questions.map((item, index) => (
                <Accordionitem key={`accordion-${index}`} question={item} answer={answers[index]}/>
            ))}
        {/* <Accordionitem question= "zach" answer="answer1"/>
        <Accordionitem question= "zach" answer="answer2"/> */}
        </div>

      
    )

}

export default Newaccordion