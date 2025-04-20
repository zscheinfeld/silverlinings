import styles from "./Bodynavigation.module.scss";
import React from "react";
import HotspotWithTooltip from "./HotspotWithTooltip";

const Bodynavigation = () => {
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
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <div className={styles.image}>
          
            <img src="woman-lightmode.png">

            </img>
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
  );
};

export default Bodynavigation;
