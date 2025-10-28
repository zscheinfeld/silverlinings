import React, { useState, useEffect } from "react";
import styles from "@/components/Landing.module.scss";

const RotatingDivs = ({ startTransitionAt }) => {
  const [visibleDiv, setVisibleDiv] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionDelay = 2400;

  const divs = [
    <div className={`${styles.rhotspot} ${styles.brain}`}>
      <div
        className={`${styles.rhotspotinnercontainer} ${styles.productivity}`}
      ></div>
      <div className={`${styles.rcard} ${styles.brainrcard}`}>
        <div className={styles.rcardimage}>
          <img src="brain.png" alt="Brain" />
        </div>
        <div className={styles.rcardinformation}>
          <div className={styles.rcardheader}>
            The brain predictably <br /> fails with age.
          </div>
          <div className={styles.rcardtext}>
            At age 65, less than 5% of the population has an Alzheimer’s
            diagnosis. This number increases to nearly 50% beyond age 85.
          </div>
        </div>
      </div>
    </div>,

    <div className={`${styles.rhotspot} ${styles.uterus}`}>
      <div
        className={`${styles.rhotspotinnercontainer} ${styles.fertility}`}
      ></div>
      <div className={`${styles.rcard} ${styles.uterusrcard}`}>
        <div className={styles.rcardimage}>
          <img src="Uterus.png" alt="Uterus" />
        </div>
        <div className={styles.rcardinformation}>
          <div className={styles.rcardheader}>
            Egg reserve disappears by age ~40.
          </div>
          <div className={styles.rcardtext}>
          Most women in the U.S. have children after 30. This increases miscarriages, maternal deaths, and infertility. Reproductive aging is also seen as a driver of diseases like Alzheimer’s. Fast ovarian aging is also linked to shorter healthspan, including higher rates of Alzheimer's.
          </div>
        </div>
      </div>
    </div>,

    <div className={`${styles.rhotspot} ${styles.heart}`}>
      <div
        className={`${styles.rhotspotinnercontainer} ${styles.mortality}`}
      ></div>
      <div className={`${styles.rcard} ${styles.heartrcard}`}>
        <div className={styles.rcardimage}>
          <img src="Heart.png" alt="Heart" />
        </div>
        <div className={styles.rcardinformation}>
          <div className={styles.rcardheader}>
            Many people need their
            <br /> organs replaced as they age.
          </div>
          <div className={styles.rcardtext}>
            The decline of organ function is a common symptom of aging. But
            current cell, tissue, and organ transplant methods are in short
            supply and invasive.
          </div>
        </div>
      </div>
    </div>,
  ];

  // Track scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle transition start/stop based on scroll
  useEffect(() => {
    if (scrollPosition >= startTransitionAt && !isTransitioning) {
      setIsTransitioning(true);
      setVisibleDiv(0); // Start showing divs
    } else if (scrollPosition < startTransitionAt && isTransitioning) {
      setIsTransitioning(false);
      setVisibleDiv(null); // Hide divs when scrolling back up
    }
  }, [scrollPosition, startTransitionAt, isTransitioning]);

  // Rotate divs only when transitioning is active
  useEffect(() => {
    if (isTransitioning) {
      const interval = setInterval(() => {
        setVisibleDiv((prev) => (prev + 1) % divs.length);
      }, transitionDelay * 2);

      return () => clearInterval(interval);
    }
  }, [isTransitioning, divs.length, transitionDelay]);

  return (
    
      <>
      <div className={`${styles.rhotspotcontainer} ${styles.brain}`}>
        <div className={styles.rhotspotinnercontainer}></div>
      </div>
      <div className={`${styles.rhotspotcontainer} ${styles.heart}`}>
        <div className={styles.rhotspotinnercontainer}></div>
      </div>
      <div className={`${styles.rhotspotcontainer} ${styles.uterus}`}>
        <div className={styles.rhotspotinnercontainer}></div>
      </div>

      {/* Render rotating divs only if visible */}
      {isTransitioning &&
        divs.map((content, index) => (
          <div
            key={index}
            className={`${styles.rdiv} ${
              visibleDiv === index ? styles.rvisible : styles.rhidden
            }`}
          >
            {content}
          </div>
        ))}
    </>
  );
};

export default RotatingDivs;
