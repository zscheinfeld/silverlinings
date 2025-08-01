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
  place = "right",
  offset = 30,
  maxWidth = 1000,
  renderInPortal = false,
  stat1,
  statLabel1,
  stat2,
  statLabel2,
  stat3,
  statLabel3
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

  const tooltipHtml = useMemo(() => {
    return `<div class="${styles.tooltipContent}">
  
      <div class="${styles.topDiv}">
      ${image ? `<div class="${styles.imageWrapper}"><img src="${image}" /></div>` : ""}
      <div class="${styles.tooltipText}">
        <div class="${styles.intervention}">
        INTERVENTION
        </div>
        <div class="${styles.tooltipTitle}">${title}</div>
        <div class="${styles.tooltipBody}">${bodyText}</div>
      </div>
      
      </div>
      <div class="${styles.hairline}"></div>
        <div class="${styles.statoutercontainer}">
  
          <div class="${styles.statcontainer}">
          <div class="${styles.stat}">${stat1}</div>
          <div class="${styles.statlabel}">${statLabel1}</div>
          </div>
  
          <div class="${styles.statcontainer}">
          <div class="${styles.stat}">${stat2}</div>
          <div class="${styles.statlabel}">${statLabel2}</div>
          </div>
  
          <div class="${styles.statcontainer}">
          <div class="${styles.stat}">${stat3}</div>
          <div class="${styles.statlabel}">${statLabel3}</div>
          </div>
  
      </div>
    </div>`;
  }, [title, bodyText, image, stat1, statLabel1, stat2, statLabel2, stat3, statLabel3]);
  

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
