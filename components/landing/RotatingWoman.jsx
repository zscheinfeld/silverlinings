import React, { useEffect, useState } from "react";
import styles from "@/components/Landing.module.scss";
import RotatingDivs from "./cards/RotatingDivs";

const RotatingWoman = ({ windowTransition }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile(); // Initial
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className={styles.womanContainer}>
      {!isMobile && (
        <RotatingDivs startTransitionAt={windowTransition} />
      )}

      <div className={styles.womanInnerContainer}>
        <img src="/woman4.png" alt="Woman" />
      </div>

      <div
        className={styles.gradientOverlay}
        style={{
          backgroundImage: `linear-gradient(to right, #191818, rgba(0,0,10,0))`,
        }}
      />
    </div>
  );
};

export default RotatingWoman;
