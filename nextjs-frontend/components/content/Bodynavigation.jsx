import styles from "./Bodynavigation.module.scss";
import React from "react";
import HotspotWithTooltip from "./HotspotWithTooltip";
import Lightaccordion from "./Lightaccordion";

const Bodynavigation = () => {
  const accordionItems = [
    {
      title:(
        <><span className={styles.mobileOnly}>To use our simulation tool on desktop, </span><span className={styles.desktopOnly}>To use our simulation tool, </span>
        you input what scientific advancements you believe are feasible in the next 1 - 20 years. Then, you see returns on investment in terms of lives saved & impact on U.S. GDP.</>),
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
            title="Slow brain aging by 1 year"
            bodyText="Most productivity depends on cognitive function, and brain health
            is the foundation of human identity. Though a distinction is often
            made between “healthy” brain aging and neurodegenerative diseases,
            the boundary between normal and abnormal neurodegeneration is
            blurry. Much funding is devoted to late-stage brain diseases, but
            the predictable decline of brain health with age remains
            overlooked."
            image="/brainsimulation.png"
            place="right"
            offset={16}
            maxWidth={250}
            stat1="$364B"
            statLabel1="Yearly gain<br>to U.S. GDP"
            stat2="$15T"
            statLabel2="Long-term <br> Net Present Value"
            stat3="257k"
            statLabel3="Lived saved <br>or gained by 2050"
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
            title="Slow reproductive <br> aging by 1 year"
            bodyText="Most women in the U.S. reproduce after age 30. This increases
            miscarriages, maternal deaths, and infertility. Our model takes
            into account the short- and long-term effects of better
            reproductive aging on labor supply, wages, and new lives. We also
            consider the less studied relationship between menopause and
            lifespan/healthspan, as reproductive aging is increasingly
            understood as a driver of diseases like Alzheimer’s."
            image="/simtool/uterus.png"
            place="left"
            offset={30}
            maxWidth={250}
            stat1="$11B"
            statLabel1="Yearly gain<br>to U.S. GDP"
            stat2="$8.5T"
            statLabel2="Long-term <br> Net Present Value"
            stat3="25k"
            statLabel3="Lived saved <br>or gained by 2050"
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
            title="2x increase in<br> organ supply"
            bodyText="The decline of organ function is a common symptom of aging. Many people need their organs replaced as they age. In the near future, a combination of biotechnologies may be needed to improve biological aging — including organ, cell, and tissue engineering. We simulate the economic effects of first meeting organ demand for the terminally ill, then achieving true organ abundance."
            image="/simtool/heart.png"
            place="left"
            offset={10}
            maxWidth={250}
            stat1="$68B"
            statLabel1="Yearly gain<br>to U.S. GDP"
            stat2="$3.9"
            statLabel2="Long-term <br> Net Present Value"
            stat3="600k"
            statLabel3="Lived saved <br>or gained by 2050"
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
            title="Measure
            & marginally slow aging"
            bodyText="We lack the tools & data to precisely measure biological aging. This bottlenecks the development of new therapeutics, and prevents us from knowing whether  existing ones can slow aging. We simulate the value of first- and second-generation therapeutics. The first are existing drugs that may marginally improve how we age, but have not yet been tested. The second are counterfactual therapeutics that could slow aging in still-healthy adults."
            image="/simtool/chip.png"
            place="left"
            offset={30}
            maxWidth={250}
            stat1="$58B"
            statLabel1="Yearly gain<br>to U.S. GDP"
            stat2="$2.7T"
            statLabel2="Long-term <br> Net Present Value"
            stat3="300k"
            statLabel3="Lived saved <br>or gained by 2050"
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
            title="Slow biological<br>aging by 1 year "
            bodyText="Think of a world where 41 is the new 40, so that all U.S. adults 40+ live, work, save, spend, consume, and die at the rates of adults 1 year younger.  We simulate a 1-year delay in the biological age of cells, organs and tissues. This is likely possible with existing methods. To unlock more significant year shifts (e.g. 20y), we may need to couple lifestyle interventions with therapeutics that target cellular aging + better tissue, cell, and organ engineering. "
            image="/simtool/cell.png"
            place="left"
            offset={30}
            maxWidth={250}
            stat1="$426B"
            statLabel1="Yearly gain<br>to U.S. GDP"
            stat2="$22.5T"
            statLabel2="Long-term <br> Net Present Value"
            stat3="1.3M"
            statLabel3="Lived saved <br>or gained by 2050"
          />
        </div>
      </div>
      <div className={styles.space}></div>
      <Lightaccordion
        title={false}
        numbered={false}
        items={accordionItems}
      ></Lightaccordion>
      <div className={styles.spacer}></div>
    </>
  );
};

export default Bodynavigation;
