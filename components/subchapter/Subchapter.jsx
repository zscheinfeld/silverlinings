import styles from "./Subchapter.module.scss";
import { forwardRef, Fragment, useMemo } from "react";
import SubchapterToggle from "./SubchapterToggle";
import Content from "@/components/content/Content";
import Spacer from "../content/Spacer";
import Markdown from "../content/Markdown";

const Subchapter = forwardRef(({ subchapter, bordered }, ref) => {
  let { header, content, slug, type } = subchapter;
  if (!type) type = "default";

  const renderedContent = useMemo(() => {
    let result = content.map((data, index) => {
      return <Content key={index} {...data} />;
    });
    if (type !== "toggle") {
      result = result.concat(
        <Spacer border={!bordered && type === "default"} />
      );
    }
    return result;
  }, [content]);

  const lines = header.split("\n");

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
          <div className={`${styles.subchaptername}`}>
            {lines.map((line, index) => (
              <span
                key={index}
                className={`${lines.length > 1 ? (index > 0 ? styles.secondline : styles.firstline) : styles.singleline}`}
              >
                <Markdown>{line}</Markdown>
                <br />
              </span>
            ))}
          </div>
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
