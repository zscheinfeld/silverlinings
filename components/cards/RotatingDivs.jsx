import React, { useState, useEffect } from "react";
import styles from "@/components/Landing.module.css";

const RotatingDivs = ({ backgroundColor, startTransitionAt }) => {
  const [visibleDiv, setVisibleDiv] = useState(null); // Initially no div is visible
  const [isTransitioning, setIsTransitioning] = useState(false); // Track if transition should happen
  const transitionDelay = 1400; // Match this to CSS transition duration

  const divs = [
    <div className={`${styles.rhotspot} ${styles.brain}`}>
      <div className={`${styles.rhotspotinnercontainer} ${styles.productivity}`}></div>
      <div
        className={`${styles.rcard} ${styles.brainrcard}`}
        style={{ backgroundColor }} // Apply backgroundColor dynamically
      >
        <div className={styles.rcardimage}>
          <img src="Brain.png" alt="Brain" />
        </div>
        <div className={styles.rcardinformation}>
          <div className={styles.rcardheader}>
            The brain predictably <br /> fails with age.
          </div>
          <div className={styles.rcardtext}>
            At age 65, less than 5% of the population has an Alzheimer’s diagnosis. This number increases to roughly 50% beyond age 85.
          </div>
        </div>
      </div>
    </div>,
    <div className={`${styles.rhotspot} ${styles.heart}`}>
      <div className={`${styles.rhotspotinnercontainer} ${styles.mortality}`}></div>
      <div
        className={`${styles.rcard} ${styles.heartrcard}`}
        style={{ backgroundColor }} // Apply backgroundColor dynamically
      >
        <div className={styles.rcardimage}>
          <img src="Heart.png" alt="Heart" />
        </div>
        <div className={styles.rcardinformation}>
          <div className={styles.rcardheader}>
            Many people need their<br /> organs replaced as they age.
          </div>
          <div className={styles.rcardtext}>
            The decline of organ function is a common symptom of aging. But current cell, tissue, and organ transplant methods are in short supply and invasive.
          </div>
        </div>
      </div>
    </div>,
    <div className={`${styles.rhotspot} ${styles.uterus}`}>
      <div className={`${styles.rhotspotinnercontainer} ${styles.fertility}`}></div>
      <div
        className={`${styles.rcard} ${styles.uterisrcard}`}
        style={{ backgroundColor }} // Apply backgroundColor dynamically
      >
        <div className={styles.rcardimage}>
          <img src="Uterus.png" alt="Uterus" />
        </div>
        <div className={styles.rcardinformation}>
          <div className={styles.rcardheader}>Egg reserve disappears by age ~40.</div>
          <div className={styles.rcardtext}>
            Most women in the U.S. have children after 30. This increases miscarriages, maternal deaths, and infertility. Reproductive aging is also seen as a driver of diseases like Alzheimer’s.
          </div>
        </div>
      </div>
    </div>,
  ];

  // Track scroll position and trigger transitions after reaching scroll threshold
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Update scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  // Only trigger transitions if scroll position is past the threshold
  useEffect(() => {
    if (scrollPosition >= startTransitionAt && !isTransitioning) {
      setIsTransitioning(true); // Start transitions when scroll position exceeds threshold
      setVisibleDiv(0); // Make the first div visible when scrolling past threshold
    }
  }, [scrollPosition, startTransitionAt, isTransitioning]);

  // Handle rotation of the divs once transitions are enabled
  useEffect(() => {
    if (isTransitioning) {
      const interval = setInterval(() => {
        setVisibleDiv((prev) => (prev + 1) % divs.length);
      }, transitionDelay * 2); // Adjust cycle time
      return () => clearInterval(interval);
    }
  }, [divs.length, transitionDelay, isTransitioning]);

  return (
    <div className={styles.rcontainer}>
      <div className={`${styles.rhotspotcontainer} ${styles.brain}`}>
        <div className={styles.rhotspotinnercontainer}></div>
      </div>

      <div className={`${styles.rhotspotcontainer} ${styles.heart}`}>
        <div className={styles.rhotspotinnercontainer}></div>
      </div>

      <div className={`${styles.rhotspotcontainer} ${styles.uterus}`}>
        <div className={styles.rhotspotinnercontainer}></div>
      </div>

      <div className={`${styles.rhotspotcontainer} ${styles.organ4}`}>
        <div className={styles.rhotspotinnercontainer}></div>
      </div>

      <div className={`${styles.rhotspotcontainer} ${styles.organ5}`}>
      <div className={styles.rhotspotinnercontainer}></div>
      </div>

      {/* Render divs only when visible */}
      {divs.map((content, index) => (
        <div
          key={index}
          className={`${styles.rdiv} ${
            visibleDiv === index ? styles.rvisible : styles.rhidden
          }`}
        >
          {content}
        </div>
      ))}
    </div>
  );
};

export default RotatingDivs;
