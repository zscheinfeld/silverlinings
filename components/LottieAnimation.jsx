import dynamic from "next/dynamic";
import styles from "@/components/Gsaplanding.module.css";

// Dynamically import Lottie without SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import animationData from "/public/lottie/Hair.json";

const LottieAnimation = () => {
  return (
    <Lottie
      className={styles.landingimage}
      animationData={animationData}
      loop
      autoplay
    />
  );
};

export default LottieAnimation;
