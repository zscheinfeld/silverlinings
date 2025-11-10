import React, { useEffect, useRef } from 'react';
import styles from "@/components/content/Overviewlight.module.scss";
import Overviewlightitem from "./Overviewlightitem";
import Accordion from './Accordion';

const Overviewlight = () => {



 

  const overviewData = [
    {
      futureTitle: <>
      Slow brain aging<br/>by 1 year
     </>,
      imgSrc: "brainsimulation.png",
      futureImageLabel: "Productivity (P)",
      futureImageLabelColor: "yellow",
      futureInfo: "Most productivity depends on cognitive function, and brain health is the foundation of human identity. Though a distinction is often made between 'healthy' brain aging and neurodegenerative diseases, the boundary between normal and abnormal neurodegeneration is blurry. Much funding is devoted to late-stage brain diseases, but the predictable decline of brain health with age remains overlooked.",
      stat1: "$201B",
      stat2: "$8.9T",
      stat3: "268k",
      labelVisibility: "dark",
      statLabel1: "Yearly gain to U.S. GDP",
      statLabel2: (
        <>
          Long-term return<br />(Net Present Value over decades)
        </>
      ),
      statLabel3: (
        <>
          Lives saved or gained<br />(by 2050)
        </>
      ),
      
    },
    {
      futureTitle: (
        <>
          Slow reproductive <br/>aging by 1 year
        </>
      ),
      imgSrc: "simtool/uterus.png",
      futureImageLabel: "Fertility (F)",
      futureImageLabelColor: "green",
      futureInfo: "Most women in the U.S. reproduce after age 30. This increases miscarriages, maternal deaths, and infertility. Our model takes into account the short- and long-term effects of better reproductive aging on labor supply, wages, and new lives. We also consider the less studied relationship between menopause and lifespan/healthspan, as reproductive aging is increasingly understood as a driver of diseases like Alzheimer’s",
      stat1: "$9B",
      stat2: "$9.3T",
      stat3: "391k",
      statLabel1: "Yearly gain to U.S. GDP",
      statLabel2: (
        <>
          Long-term return<br />(Net Present Value over decades)
        </>
      ),
      statLabel3: (
        <>
          Lives saved or gained<br />(by 2050)
        </>
      ),
    },

    {
      futureTitle:  (
        <>
          2x increase in <br/>organ supply
        </>
      ),
      altTitle: (
        <>
          4x increase in <br/>organ supply
        </>
      ),
      imgSrc: "simtool/heart.png",
      futureImageLabel: "Mortality (M)",
      futureImageLabelColor: "green",
      futureInfo: "The decline of organ function is a common symptom of aging. Many people need their organs replaced as they age. In the near future, a combination of biotechnologies may be needed to improve biological aging — including organ, cell, and tissue engineering. We simulate the economic effects of first meeting organ demand for the terminally ill, then achieving true organ abundance.",
      stat1: "$50B",
      stat2: "$3.2T",
      stat3: "529k",
      altStat1: "$236B",
      altStat2: "$13.6T",
      altStat3: "2.4M",
      statLabel1: "Yearly gain to U.S. GDP",
      statLabel2: (
        <>
          Long-term return<br />(Net Present Value over decades)
        </>
      ),
      statLabel3: (
        <>
          Lives saved or gained<br />(by 2050)
        </>
      ),
      enableSwitch: true
    },


    {
        futureTitle: (
          <>
            Slow biological<br/>aging by 1 year
          </>
        ),
        altTitle: (
          <>
            Slow biological <br/>aging by 5 years
          </>
        ),
        imgSrc: "simtool/cell.png",
        futureImageLabel: "All (P, F, M)",
        futureImageLabelColor: "green",
        futureInfo: "Think of a world where 41 is the new 40, so that all U.S. adults 40+ live, work, save, spend, consume, and die at the rates of adults 1 year younger.  We simulate a 1-year delay in the biological age of cells, organs and tissues. This is likely possible with existing methods. To unlock more significant year shifts (e.g. 20y), we may need to couple lifestyle interventions with therapeutics that target cellular aging + better tissue, cell, and organ engineering. ",
        stat1: "$408B",
        stat2: "$27.1T",
        stat3: "1.7M",
        altStat1: "$2.0T",
        altStat2: "$101.9T ",
        altStat3: "6.9M",
        statLabel1: "Yearly gain to U.S. GDP",
        statLabel2: (
          <>
            Long-term return<br />(Net Present Value over decades)
          </>
        ),
        statLabel3: (
          <>
            Lives saved or gained<br />(by 2050)
          </>
        ),
        enableSwitch: true
      },

      {
        futureTitle: (
            <>
              New tools and existing interventions to <br></br> marginally slow aging
            </>
          ),
        imgSrc: "simtool/chip.png",
        futureImageLabel: "All (P, F, M)",
        futureImageLabelColor: "green",
        futureInfo: "We lack the tools & data to precisely measure biological aging. This bottlenecks the development of new therapeutics, and prevents us from knowing whether  existing ones can slow aging. We simulate the value of first- and second-generation therapeutics. The first are existing drugs that may marginally improve how we age, but have not yet been tested. The second are counterfactual therapeutics that could slow aging in still-healthy adults.",
        stat1: "$40B",
        stat2: "$2.4T",
        stat3: "275k",
        statLabel1: "Yearly gain to U.S. GDP",
        statLabel2: (
          <>
            Long-term return<br />(Net Present Value over decades)
          </>
        ),
        statLabel3: (
          <>
            Lives saved or gained<br />(by 2050)
          </>
        ),
      },

      
      
    // Add more items as needed
  ];

  const overviewItemRefs = useRef([]);
  const headerRef = useRef(null); // Ref for the overview header

  // Use an effect to initialize the Intersection Observer
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'visible' class to the element when it enters the viewport
          entry.target.classList.add(styles.visible);
        } else {
          // Optionally remove the 'visible' class when it exits the viewport
          entry.target.classList.remove(styles.visible);
        }
      });
    }, options);

    // Observe the overview header
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Observe each overview item
    overviewItemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // Cleanup the observer on component unmount
      observer.disconnect();
    };
  }, []);

  return (

    <div className={styles.overviewContainer}>
      <div className={styles.overviewInnerContainer}>
        <div
          ref={headerRef} // Add ref to the header
          className={`${styles.overviewHeader} ${styles.scrollFadeIn}`} // Apply fade-in class
        >
          <i>High-impact</i> R&D <br></br>opportunities in aging biology
        </div>

        <div className={styles.itemMasterContainer}>

        

        {overviewData.map((item, index) => (
          <div
            key={index} // Use index as a key (or unique ID if available)
            ref={(el) => (overviewItemRefs.current[index] = el)} // Assigning ref to each item
            className={styles.scrollFadeIn} // Add fade-in class for animation
          >
            <Overviewlightitem
              futureTitle={item.futureTitle}
              altTitle={item.altTitle}
              imgSrc={item.imgSrc}
              futureImageLabel={item.futureImageLabel}
              futureImageLabelColor={item.futureImageLabelColor}
              futureInfo={item.futureInfo}
              stat1={item.stat1}
              stat2={item.stat2}
              stat3={item.stat3}
              altStat1={item.altStat1}
              altStat2={item.altStat2}
              altStat3={item.altStat3}
              statLabel1={item.statLabel1}
              statLabel2={item.statLabel2}
              statLabel3={item.statLabel3}
              enableSwitch={item.enableSwitch}
              labelVisibility={item.labelVisibility}
/>
          </div>
        ))}

        </div>

      </div>
    </div>
    
  );
};

export default Overviewlight;
