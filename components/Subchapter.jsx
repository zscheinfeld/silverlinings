import Callout from "./Callout";
import Chart from "./Chart";
import Newaccordion from "./Newaccordion";
import Textblock from "./Textblock";
import styles from "@/components/Chapter.module.css";
import { forwardRef } from "react";
import Sidenote from "./Sidenote";
import Multiplecards from "./Multiplecards";
import Svgchart from "./Svgchart";
import Tensor from "./Tensor";

const Subchapter = forwardRef(({ subchapter, chapterNumber }, ref) => {
  const { header, content, slug } = subchapter;

  return (
    <div ref={ref} id={slug} className={styles.subchaptermodules}>
      <div className={styles.subchaptername}>{header}</div>
      {content.map(({ type, data }) => {
        if (type == "text") {
          return (
            <Textblock
              callouts={[data.callout]}
              paragraphs={data.paragraphs}
            ></Textblock>
          );
        }

        if (type == "chart") {
          return <Chart data={data}></Chart>;
        }

        if (type == "sidenote") {
          return (
            <Sidenote sidenotetext={data.text}></Sidenote>
            );
        }

        if (type == "multiplecards") {
          return (
            <Multiplecards></Multiplecards>
            )
        }

        if (type == "svgchart") {
          return (
            <Svgchart source={data.source}></Svgchart>
          );
        }

        if (type == "accordion") {
          return (
            <Newaccordion
              atitle={data.title}
              questions={data.questions}
              answers={data.answers}
            />
          );
        }

        if (type == "simulation") {
          return (
            <Tensor/>
          );
        }

        if (type == "bottompadding") {
          return <div className={styles.bottompadding}></div>;
        }

        // render accordian
      })}
    </div>
  );
});

export default Subchapter;
