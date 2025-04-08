import styles from "./Subchapter.module.scss";
import { forwardRef, useMemo } from "react";
import SubchapterToggle from "./SubchapterToggle";
import Content from "@/components/content/Content";

const Subchapter = forwardRef(({ subchapter }, ref) => {
  let { header, content, slug, bordered, type } = subchapter;
  if (!type) type = "default";

  const renderedContent = useMemo(() => {
    return content.map((data, index) => {
      return <Content key={index} {...data} />;
    });
  }, [content]);

  return (
    <div
      ref={ref}
      id={slug}
      className={`${
        type === "toggle" || type === "header"
          ? styles.accordionsubachaptermodules
          : styles.subchaptermodules
      } ${bordered && styles.bordered}`}
    >
      {type === "default" && (
        <>
          <div className={styles.subchaptername}>{header}</div>
          {renderedContent}
        </>
      )}
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
