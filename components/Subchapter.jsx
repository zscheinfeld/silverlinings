import Chart from "./Chart";
import Newaccordion from "./Newaccordion";
import Textblock from "./Textblock";
import styles from "@/components/Chapter.module.css";
import { forwardRef, useMemo } from "react";
import Sidenote from "./Sidenote";
import Multiplecards from "./Multiplecards";
import Svgchart from "./Svgchart";
import Simulation from "./Simulation";
import Fineprintaccordion from "./Fineprintaccordion";
import SubchapterAccordion from "./Fineprintaccordion";

const Subchapter = forwardRef(({ subchapter, chapterNumber }, ref) => {
  const { header, content, slug, options } = subchapter;
  const { type = "default", showHeader = true } = options || {};

  const renderedContent = useMemo(() => {
    return content.map(({ type, data }, index) => {
      if (type === "text") {
        return (
          <Textblock
            key={index}
            callouts={[data.callout]}
            paragraphs={data.paragraphs}
          />
        );
      }

      if (type === "chart") {
        return <Chart key={index} data={data}></Chart>;
      }

      if (type === "sidenote") {
        return <Sidenote key={index} sidenotetext={data.text}></Sidenote>;
      }

      if (type === "multiplecards") {
        return <Multiplecards key={index} />;
      }

      if (type === "svgchart") {
        return (
          <Svgchart
            key={index}
            source={data.source}
            imageoverlay={data.imageoverlay}
            overlaycontent={data.imageoverlay}
            textoverlay={data.textoverlay}
            textcontent={data.text}
          />
        );
      }

      if (type === "accordion") {
        return (
          <Newaccordion
            key={index}
            title={data.title}
            numbered={data.numbered}
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
        return <Simulation key={index} data={data} />;
      }

      if (type === "bottompadding") {
        return <div key={index} className={styles.bottompadding}></div>;
      }

      if (type === "fineprint") {
        return <Fineprintaccordion key={index} />;
      }
    });
  }, [content]);

  return (
    <div
      ref={ref}
      id={slug}
      className={
        type === "simulation"
          ? styles.simulationsubachaptermodules
          : type === "accordion"
            ? styles.accordionsubachaptermodules
            : styles.subchaptermodules
      }
    >
      {type === "default" && (
        <>
          {showHeader && <div className={styles.subchaptername}>{header}</div>}
          {renderedContent}
        </>
      )}
      {type === "simulation" && renderedContent}
      {type === "accordion" && (
        <SubchapterAccordion header={header}>
          {renderedContent}
        </SubchapterAccordion>
      )}
    </div>
  );
});

export default Subchapter;
