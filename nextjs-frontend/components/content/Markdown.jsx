import MarkdownToJSX from "markdown-to-jsx";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styles from "./Markdown.module.scss";

const Markdown = ({ children }) => {
  return (
    <MarkdownToJSX
      options={{
        overrides: {
          a(props) {
            const { children, className, href, title, ...rest } = props;
            if (href === "https://tooltip") {
              return (
                <>
                  <Tooltip
                    id={children[0]}
                    arrow={false}
                    arrowColor="transparent"
                    className={styles.customTooltip}
                    place="top"
                  />
                  <span
                    className={styles.tooltipAnchor}
                    data-tooltip-id={children[0]}
                    data-tooltip-content={title}
                  >
                    {children}
                  </span>
                </>
              );
            } else {
              return (
                <a href={href} className={className} title={title} {...rest}>
                  {children}
                </a>
              );
            }
          },
        },
      }}
    >
      {children}
    </MarkdownToJSX>
  );
};

export default Markdown;
