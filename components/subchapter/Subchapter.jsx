import styles from "./Subchapter.module.scss";
import { forwardRef, useMemo } from "react";
import SubchapterToggle from "./SubchapterToggle";
import Content from "@/components/content/Content";

const Subchapter = forwardRef(({ subchapter, chapterNumber }, ref) => {
  const { header, content, slug, options } = subchapter;
  const { type = "default", showHeader = true, bordered } = options || {};

  const renderedContent = useMemo(() => {
    return content.map(({ type, data }, index) => (
      <Content key={index} type={type} data={data} />
    ));
  }, [content]);

  return (
    <div
      ref={ref}
      id={slug}
      className={`${
        type === "simulation"
          ? styles.simulationsubachaptermodules
          : type === "toggle" || type === "header"
            ? styles.accordionsubachaptermodules
            : styles.subchaptermodules
      } ${bordered && styles.bordered}`}
    >
      {type === "default" && (
        <>
          {showHeader && <div className={styles.subchaptername}>{header}</div>}
          {renderedContent}
        </>
      )}
      {type === "simulation" && renderedContent}
      {type === "toggle" && (
        <SubchapterToggle header={header}>{renderedContent}</SubchapterToggle>
      )}
      {type === "header" && (
        <SubchapterToggle header={header} isHeader={true}>
          {renderedContent}
        </SubchapterToggle>
      )}
    </div>
  );
});

export default Subchapter;
