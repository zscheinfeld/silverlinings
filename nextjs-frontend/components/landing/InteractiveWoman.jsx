import styles from "@/components/Womanstyles.module.scss";
import UterusHotspot from "./cards/UterusHotspot";
import BrainHotspot from "./cards/BrainHotspot";
import HeartHotspot from "./cards/HeartHotspot";
import HotspotCard from "./cards/Hotspotcard";

const InteractiveWoman = () => {
  return (

    //top: 390px;
  //right: 320px;
    <div className={styles.womanContainer}>
      {/* <UterusHotspot></UterusHotspot> */}
      


      <div className={`${styles.hotspot} ${styles.organ4}`}>
        <div className={styles.hoverDivbg}>
          <div className={styles.hoverDiv}></div>
        </div>
      </div>

      <div className={`${styles.hotspot} ${styles.organ5}`}>
        <div className={styles.hoverDivbg}>
          <div className={styles.hoverDiv}></div>
        </div>
      </div>

      <div className={styles.leftContainer}></div>


      <div className={styles.womanmidContainer}>
          <div className={styles.womanInnerContainer}>
                  <img src="/woman4.png" alt="Interactive Woman" />
                  {/* <BrainHotspot></BrainHotspot>
                  <HeartHotspot></HeartHotspot> */}
                  <HotspotCard
        hotspotPosition={{ top: "450px", right: "470px" }}
        organImageSrc="/uterus.png"          // Base image (always visible)
        overlayImageSrc="/uteruspink.png"     // New! Overlay image (fades in on hover)
        organAlt="Uterus"
        interventionTitle="Slow reproductive aging by 1 year"
        descriptionText="Most women in the U.S. reproduce after age 30. This increases miscarriages, maternal deaths, and infertility. Our model takes into account the short- and long-term effects of better reproductive aging on labor supply, wages, and new lives. We also consider the less studied relationship between menopause and lifespan/healthspan, as reproductive aging is increasingly understood as a driver of diseases like Alzheimer’s."
        yearlyGain="$9B"
        netPresentValue="$9.3T"
        livesSaved="391k"
        cardAlign="center"
        hotspotColor="#FB8ED7" 
        baseImageSettings={{
          scale: 0.7,
          x: "-50px",
          y: "-310px",
          opacity: 0.6, // darker look
        }}
        overlayImageSettings={{
          scale: 1,
          x: "0px",
          y: "-375px",
          opacity: 1,
        }}                     // New! Make hover image 20% larger
      />

                       <HotspotCard
        hotspotPosition={{ top: "240px", right: "440px" }}
        organImageSrc="/Heart.png"          // Base image (always visible)
        overlayImageSrc="/Heartred.png"     // New! Overlay image (fades in on hover)
        organAlt="Heart"
        interventionTitle="2x increase in organ supply"
        descriptionText=" Most productivity depends on cognitive function, and brain health
        is the foundation of human identity. Though a distinction is often
        made between “healthy” brain aging and neurodegenerative diseases,
        the boundary between normal and abnormal neurodegeneration is
        blurry. Much funding is devoted to late-stage brain diseases, but
        the predictable decline of brain health with age remains
        overlooked."
        yearlyGain="$50B"
        netPresentValue="$3.2T"
        livesSaved="529k"
        cardAlign="top"
        hotspotColor="#F0696B" 
        baseImageSettings={{
          scale: 0.6,
          x: "-65px",
          y: "-340px",
          opacity: 0.6, // darker look
        }}
        overlayImageSettings={{
          scale: .75,
          x: "25px",
          y: "-385px",
          opacity: 1,
        }}                     // New! Make hover image 20% larger
      />

<HotspotCard
        hotspotPosition={{ top: "90px", right: "475px" }}
        organImageSrc="/brain.png"          // Base image (always visible)
        overlayImageSrc="/brainyellow.png"     // New! Overlay image (fades in on hover)
        organAlt="Brain"
        interventionTitle="Slow brain aging by 1 year"
        descriptionText="Most productivity depends on cognitive function, and brain health
        is the foundation of human identity. Though a distinction is often
        made between “healthy” brain aging and neurodegenerative diseases,
        the boundary between normal and abnormal neurodegeneration is
        blurry. Much funding is devoted to late-stage brain diseases, but
        the predictable decline of brain health with age remains
        overlooked."
        yearlyGain="$201B"
        netPresentValue="$8.9T"
        livesSaved="268k"
        cardAlign="top"
        hotspotColor="#FFF3A8" 
        baseImageSettings={{
          scale: 0.6,
          x: "-65px",
          y: "-340px",
          opacity: 0.6, // darker look
        }}
        overlayImageSettings={{
          scale: .75,
          x: "25px",
          y: "-385px",
          opacity: 1,
        }}                     // New! Make hover image 20% larger
      />
         
         
          </div>
      </div>
      
      {/* <div className={styles.gradientOverlay}></div> */}
    </div>
  );
};

export default InteractiveWoman;
