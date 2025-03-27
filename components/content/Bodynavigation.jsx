import styles from "./Bodynavigation.module.scss";
import React from "react";

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
        <div className={styles.image}>
            <img src="woman-lightmode.png">

                




            </img>
        
                <div 
                className={styles.hotspot}
                style={{ top: "50px", left: "445px" }}
                >
                    <button
                    onClick={() => scrollToTarget("2-1")} // Smooth scroll to the target
                    className={styles.hotspotinnercontainer}

                    >
                    </button>
                </div>

                <div 
                className={styles.hotspot}
                style={{ top: "400px", left: "450px", animationDelay:"300ms" }}
                >
                    <button
                    onClick={() => scrollToTarget("2-2")} // Smooth scroll to the target
                    className={styles.hotspotinnercontainer}

                    >
                    </button>
                </div>

                <div 
                className={styles.hotspot}
                style={{ top: "200px", left: "480px", animationDelay:"600ms" }}
                >
                    <button
                    onClick={() => scrollToTarget("2-3")} // Smooth scroll to the target
                    className={styles.hotspotinnercontainer}

                    >
                    </button>
                </div>

                <div 
                className={styles.hotspot}
                style={{ top: "270px", left: "430px", animationDelay:"900ms"  }}
                >
                    <button
                    onClick={() => scrollToTarget("2-4")} // Smooth scroll to the target
                    className={styles.hotspotinnercontainer}
                    >
                    </button>
                </div>

                <div 
                className={styles.hotspot}
                style={{ top: "330px", left: "470px", animationDelay:"150ms" }}
                >
                    <button
                    onClick={() => scrollToTarget("2-5")} // Smooth scroll to the target
                    className={styles.hotspotinnercontainer}
                    >
                    </button>
                </div>
            

        </div>



      
    </div>
  );
};

export default Bodynavigation;
