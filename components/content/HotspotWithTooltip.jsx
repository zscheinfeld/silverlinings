import React, { useMemo } from "react";
import { Tooltip } from "react-tooltip";
import styles from "./Bodynavigation.module.scss";

const HotspotWithTooltip = ({
  top,
  left,
  targetId,
  title,
  bodyText,
  image,
  id,
  place = "right", // ✅ default to "right"
  offset = 30 ,     // ✅ optional offset control
  maxWidth = 1000 // ✅ default max width in px
}) => {
  const scrollToTarget = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // ✅ Memoize tooltip HTML to prevent re-renders
  const tooltipHtml = useMemo(() => {
    return `<div class="${styles.tooltipContent}">
      ${image ? `<img src="${image}" class="${styles.tooltipImage}" />` : ""}
      <div class="${styles.tooltipText}">
        <div class="${styles.tooltipTitle}">${title}</div>
        <div class="${styles.tooltipBody}">${bodyText}</div>
      </div>
    </div>`;
  }, [title, bodyText, image]);

  return (
    <>
      <div className={styles.hotspot} style={{ top, left }}>
        <button
          className={styles.hotspotinnercontainer}
          onClick={() => scrollToTarget(targetId)}
          data-tooltip-id={id}
          data-tooltip-html={tooltipHtml}
        />
      </div>

      <Tooltip
  id={id}
  className={styles.customTooltip}
  noArrow={true}
  data-fade={true}
  opacity={1}
  place={place}
  offset={offset}
  anchorSelect={`[data-tooltip-id='${id}']`}
  float={false}
  style={{ "--tooltip-max-width": `${maxWidth}px` }} // ✅ use CSS variable
/>
    </>
  );
};

export default React.memo(HotspotWithTooltip);
