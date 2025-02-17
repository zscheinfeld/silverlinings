import Chart from "./Chart";
import Newaccordion from "./Newaccordion";
import Textblock from "./Textblock";
import styles from "@/components/Chapter.module.css";
import { forwardRef } from "react";
import Sidenote from "./Sidenote";
import Multiplecards from "./Multiplecards";
import Svgchart from "./Svgchart";
import Simulation from "./Simulation";
import Fineprintaccordion from "./Fineprintaccordion";

const Subchapter = forwardRef(({ subchapter, chapterNumber }, ref) => {
  const { header, content, slug } = subchapter;

  return (
    <div ref={ref} id={slug} className={styles.subchaptermodules}>
      {content.map(({ type, data }) => {
        if (type === "subchaptertitle") {
          return <div className={styles.subchaptername}>{header}</div>;
        }
        if (type === "text") {
          return (
            <Textblock
              callouts={[data.callout]}
              paragraphs={data.paragraphs}
            ></Textblock>
          );
        }

        if (type === "chart") {
          return <Chart data={data}></Chart>;
        }

        if (type === "sidenote") {
          return <Sidenote sidenotetext={data.text}></Sidenote>;
        }

        if (type === "multiplecards") {
          return <Multiplecards></Multiplecards>;
        }

        if (type === "svgchart") {
          return (
            <Svgchart
              source={data.source}
              imageoverlay={data.imageoverlay}
              overlaycontent={data.imageoverlay}
              textoverlay={data.textoverlay}
              textcontent={data.text}
            ></Svgchart>
          );
        }

        if (type === "accordion") {
          return (
            <Newaccordion
              atitle={data.title}
              questions={data.questions}
              answers={data.answers.map((answer) =>
                answer.split("\n\n").map((paragraph, index) => (
                  <div className={styles.answerparagraph} key={index}>
                    {paragraph}
                  </div>
                )),
              )}
            />
          );
        }

        if (type === "simulation") {
          return <Simulation data={data} />;
        }

        if (type === "bottompadding") {
          return <div className={styles.bottompadding}></div>;
        }

        if (type === "fineprint") {
          return <Fineprintaccordion></Fineprintaccordion>;
        }

        // render accordian
      })}
    </div>
  );
});

export default Subchapter;
