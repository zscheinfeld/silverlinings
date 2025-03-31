import { useEffect, useState, useRef } from "react";
import styles from "@/components/GsapLanding.module.scss";
import AnimatedMapFade from "@/components/landing/AnimatedMapFade";
import WorldMap from "@/components/landing/WorldMap";
import AnimatedLandingElementFade from "@/components/landing/AnimatedLandingElementFade.jsx";
import LottieAnimation from "@/components/landing/LottieAnimation";
import RotatingWoman from "@/components/landing/RotatingWoman";
import InteractiveWoman from "@/components/landing/InteractiveWoman";
import UterusHotspot from "@/components/landing/cards/UterusHotspot";
import LandingTextIntro from "@/components/landing/LandingTextIntro";
import Overview from "./landing/Overview";
import TopNav from "@/components/TopNav";

const GsapLanding = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = (isOpen) => {
    setIsMenuOpen(isOpen);
    console.log("Menu state:", isOpen);
  };

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const fadeInRefs = useRef([]); // Array to hold references to elements we want to observe
  // Add new ref for landing text
  const landingTextRef = useRef(null);

  useEffect(() => {
    // 1. Intersection Observer Options
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    // 2. Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        } else {
          entry.target.classList.remove(styles.visible);
        }
      });
    }, options);

    // 3. Function to Observe Elements
    const observeElements = () => {
      fadeInRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      if (landingTextRef.current) {
        observer.observe(landingTextRef.current);
      }
    };

    // 4. Observe elements initially
    observeElements();

    // 5. Handle window resize to reinitialize observer
    const handleResize = () => {
      observer.disconnect(); // Clear previous observers on resize
      observeElements(); // Re-observe after resizing
    };

    window.addEventListener("resize", handleResize);

    // 7. Cleanup Observer + Scroll + Resize Event Listeners
    return () => {
      fadeInRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });

      if (landingTextRef.current) {
        observer.unobserve(landingTextRef.current);
      }

      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures effect runs only once

  const [fadeOutPoint, setFadeOutPoint] = useState(null);

  useEffect(() => {
    setFadeOutPoint(window.innerHeight / 2);
  }, []);

  return (
    <>
      <div className={styles.background}>
        <div className={styles.space}></div>

        <LandingTextIntro fadeOutPoint={fadeOutPoint} />

        <AnimatedLandingElementFade
          fadeInStart={0}
          fadeInEnd={fadeOutPoint}
          fadeOutStart={fadeOutPoint * 3}
          fadeOutEnd={fadeOutPoint * 3.5}
        >
          <LottieAnimation />
          <div className={styles.image}>
            <img src="woman/face_darkmode.png" alt="Face Dark Mode" />
          </div>
        </AnimatedLandingElementFade>

        <AnimatedLandingElementFade
          fadeInStart={fadeOutPoint * 3.5}
          fadeInEnd={fadeOutPoint * 4}
          fadeOutStart={fadeOutPoint * 6}
          fadeOutEnd={fadeOutPoint * 6.5}
        >
          <RotatingWoman windowTransition={fadeOutPoint * 4} />
        </AnimatedLandingElementFade>

        <div className={styles.space}></div>

        {/* Animated Map */}
        <AnimatedMapFade
          fadeInStart={fadeOutPoint * 6.5}
          fadeInEnd={fadeOutPoint * 6.75}
          fadeOutStart={fadeOutPoint * 11}
          fadeOutEnd={fadeOutPoint * 11.5}
        >
          <WorldMap />
        </AnimatedMapFade>

        <AnimatedLandingElementFade
          fadeInStart={fadeOutPoint * 13.5}
          fadeInEnd={fadeOutPoint * 14}
          fadeOutStart={fadeOutPoint * 16}
          fadeOutEnd={fadeOutPoint * 17}
        >
          <UterusHotspot></UterusHotspot>
          <InteractiveWoman></InteractiveWoman>
        </AnimatedLandingElementFade>

        <div className={styles.space}></div>
        <div className={styles.space}></div>
        <div className={styles.landingtextlightcontainer}>
          <div className={styles.landingtextlightinnercontainer}>
            <div className={styles.landingtextleft}>
              <div className={styles.landingtextlarge}>
                Our short healthspan affects every family, economy, and
                government.
              </div>
            </div>
            <div className={styles.landingtextright}>
              <div className={styles.landingtextsmall}>
                In 2025, some of the free-market economies with the highest debt
                are developed countries with large populations of older adults
                suffering from age-related health conditions like cancer,
                menopause, and Alzheimer’s. Japan’s debt-to-GDP ratio, for
                instance, is at 260% — twice the American ratio — in no small
                part due to the sky-high costs of an aging and shrinking
                population. But biological aging affects everyone.
              </div>
              <div className={styles.landingtextsmall}>
                Even adults who exercise regularly and eat a healthy diet will
                face the diseases of aging and rely on an unpaid caregiver or
                become one. Think of an 80-year-old who has exercised regularly
                for decades and still gets cancer “just” because of their
                biological age. This creates a significant burden on populations
                of all incomes and ages. In 2020, some 38 million Americans
                provided 36 billion hours of unpaid care. By 2029, the United
                States will spend $3 trillion yearly — half its federal budget —
                on the medical treatment and social care of adults aged 65 or
                older. 
              </div>
            </div>
          </div>
        </div>
        <div className={styles.space}></div>
        <div className={styles.space}></div>

        <div className={styles.landingtextlightcontainer2}>
          <div className={styles.landingtextlightinnercontainer2}>
            <div className={styles.landingtextleft2}>
              <div className={styles.landingtextlarge}>
                When it comes to “longevity,” private markets have mostly
                produced a $200B unproven supplements industry, and treatments
                for late-stage diseases.
              </div>
            </div>
            <div className={styles.landingtextright2}>
              <div className={styles.landingtextsmall}>
                To date, no therapeutic has been designed to prevent biological
                aging. In this open project, we present a roadmap of market
                failures and scientific challenges that stand in the way of real
                advancements in aging science. Then, we use an open-source model
                to simulate how new R&D breakthroughs could impact the U.S.
                population and economy.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.landingoutertext}>
          <div
            className={`${styles.landinginnertext} ${styles.light} ${styles.landingmedium}`}
          >
            What if new scientific breakthroughs could delay biological aging
            and extend healthy life?
          </div>
          <div
            className={`${styles.landinginnertext} ${styles.light} ${styles.landingsmall}`}
          >
            <div
              className={`${styles.landingtextsmall} ${styles.maxwidth500} ${styles.seemoreText}`}
            >
              {isExpanded && (
                <div>
                  We present results informed by interviews with 72 scientists
                  and dozens of economists. But our model lets you simulate
                  different futures for the U.S. population and economy. You can
                  input the number of years until a therapeutic can safely delay
                  brain or overall aging; what percentage of the U.S. population
                  would benefit; and how this could affect{" "}
                  <span className={styles.textmortality}>mortality</span>,{" "}
                  <span className={styles.textproductivity}>productivity</span>,
                  and <span className={styles.textfertility}>fertility</span>{" "}
                  rates by age. In each simulation, we present the number of
                  lives saved or gained. We also highlight GDP as a helpful
                  (even if imperfect) proxy for lives improved.<br></br>
                  <br></br>
                  Beyond a certain point, improvements in non-cognitive
                  functions have counterintuitive effects on GDP. For instance,
                  a 1-year delay in brain aging is worth nearly as much as a
                  1-year delay in overall biological aging in the near term.
                  This is because the returns from improving the age of other
                  organs (e.g. kidneys or ovaries) are not immediate, and
                  sometimes reduce GDP temporarily. To understand the non-linear
                  effects of each R&D area in the short and long run (and for
                  GDP alternatives that measure non-market outcomes), see the
                  report.
                </div>
              )}

              <button onClick={toggleText} className={styles.seeMoreButton}>
                {isExpanded ? "See Less" : "See More"}
              </button>
            </div>
          </div>
        </div>

        {/* <div className={styles.space}></div>
      <div className={styles.landingoutertext}>
        <div
          className={`${styles.landinginnertext} ${styles.light} ${styles.landingmedium}`}
        >
          Delaying biological aging by just 1 year could boost U.S. GDP by $426B
          per year, yielding $22.5T over several decades & saving 1.3M lives.
        </div>
        <div
          className={`${styles.landinginnertext} ${styles.light} ${styles.landingsmall}`}
        >
          <div className={`${styles.landingsmall2}`}>
            Slower aging would mean lower medical costs, fewer unpaid
            caretakers, lower mortality rates, slightly higher fertility rates,
            and increased productivity for the growing number of older adults
            who choose to remain in the workforce.
          </div>
        </div>
      </div> */}
        <div className={styles.space}></div>

        <Overview></Overview>
      </div>
    </>
  );
};

export default GsapLanding;
