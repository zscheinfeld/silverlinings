import styles from "./Bodynavigation.module.scss";
import React from "react";
import HotspotWithTooltip from "./HotspotWithTooltip";
import Accordion from "./Accordion";

const Bodynavigation = () => {
  const accordionItems = [
    {
      title:
        "Explainer: “You input what scientific advancements you believe are feasible in the next 1-20 years. Then, you see the returns on investment in terms of lives saved & impacts on U.S. GDP.”",
      description:
        "We simulate delays in biological aging by considering shifts backwards in mortality, productivity, and fertility rates by age in the U.S. Fertility rates are capped to match realistic birth rates. To visualize a 5-year shift in each lever in the model, think of a world where “45 is the new 40,” so that all adults over the age of 40 in the U.S. live, work, save, consume, spend, and die at the rates of adults 5 years younger. This is different from extending  life expectancy by 5 years.\n\n We assume no shifts in the age of retirement, making our results especially conservative. Instead, we consider the number of older adults who would voluntarily remain in the workforce past age 65, given empirical data. This is conservative because in a future where older adults enjoy better health, voluntary labor participation would likely be higher. To inspect each of our simulation parameters, please read our upcoming book, or our technical paper. \n\n In our baseline results, we use a 2% discount rate for real dollar results (adjusted for inflation). This is the long run real interest rate forecast by the Congressional Budget Office. We also assume 10 years until market entry, and 20 years until full market penetration for each therapeutic. Given the fast pace of technological advancement, we encourage the reader to focus on near-term annual changes to U.S. GDP, while entertaining possible long-term returns over several decades. The latter offers important insight into how, for instance, higher fertility rates only begin to offer returns on investment after several decades. (Newborns don’t work, and they temporarily reduce parents’ labor supply.)  These far-future effects cannot be precisely estimated, but they also cannot be ignored.\n\n",
    },
  ];

  // Scroll to the target element by ID with smooth behavior
  const scrollToTarget = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth", // Enables smooth scrolling
        block: "start", // Aligns target to the top of the viewport
      });
    } else {
      console.warn(`No element found with ID: ${targetId}`);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <img src="woman-lightmode.png"></img>
          </div>
          {/* <div 
                className={styles.hotspot}
                style={{ top: "50px", left: "445px" }}
                >
                    <button
                    onClick={() => scrollToTarget("2-1")} // Smooth scroll to the target
                    className={styles.hotspotinnercontainer}

                    >
                    </button>
                </div> */}
          <HotspotWithTooltip
            top="50px"
            left="445px"
            targetId="2-1"
            id="tip-1"
            title="Future 1"
            bodyText="We can slow brain <br> aging by 1 year"
            image="/brainsimulation.png"
            place="right"
            offset={30}
            maxWidth={250}
          />

          {/* <div 
                className={styles.hotspot}
                style={{ top: "400px", left: "450px", animationDelay:"300ms" }}
                >
                    <button
                    onClick={() => scrollToTarget("2-2")} // Smooth scroll to the target
                    className={styles.hotspotinnercontainer}

                    >
                    </button>
                </div> */}
          <HotspotWithTooltip
            top="400px"
            left="450px"
            targetId="2-2"
            id="tip-2"
            title="Future 2"
            bodyText="We can slow reproductive <br>  aging  by 1 year"
            image="/simtool/uterus.png"
            place="left"
            offset={30}
            maxWidth={250}
          />

          {/* <div 
                className={styles.hotspot}
                style={{ top: "200px", left: "480px", animationDelay:"600ms" }}
                >
                    <button
                    onClick={() => scrollToTarget("2-3")} // Smooth scroll to the target
                    className={styles.hotspotinnercontainer}

                    >
                    </button>
                </div> */}

          <HotspotWithTooltip
            top="200px"
            left="480px"
            targetId="2-3"
            id="tip-3"
            title="Future 3"
            bodyText="We can replace aging"
            image="/simtool/heart.png"
            place="left"
            offset={30}
            maxWidth={250}
          />

          {/* <div 
                className={styles.hotspot}
                style={{ top: "270px", left: "430px", animationDelay:"900ms"  }}
                >
                    <button
                    onClick={() => scrollToTarget("2-4")} // Smooth scroll to the target
                    className={styles.hotspotinnercontainer}
                    >
                    </button>
                </div> */}
          <HotspotWithTooltip
            top="270px"
            left="430px"
            targetId="2-4"
            id="tip-4"
            title="Future 4"
            bodyText="We can measure
                & <br> marginally slow aging"
            image="/simtool/chip.png"
            place="left"
            offset={30}
            maxWidth={250}
          />

          {/* <div 
                className={styles.hotspot}
                style={{ top: "330px", left: "470px", animationDelay:"150ms" }}
                >
                    <button
                    onClick={() => scrollToTarget("2-5")} // Smooth scroll to the target
                    className={styles.hotspotinnercontainer}
                    >
                    </button>
                </div> */}

          <HotspotWithTooltip
            top="330px"
            left="470px"
            targetId="2-5"
            id="tip-5"
            title="Future 5"
            bodyText="We can make 41 the new 40 <br> (or 60 the new 55!)"
            image="/simtool/cell.png"
            place="left"
            offset={30}
            maxWidth={250}
          />
        </div>
      </div>
      <div className={styles.space}></div>
      <Accordion
        title={false}
        numbered={false}
        items={accordionItems}
      ></Accordion>
      <div className={styles.spacer}></div>
    </>
  );
};

export default Bodynavigation;
