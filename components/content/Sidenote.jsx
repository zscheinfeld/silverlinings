import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./Sidenote.module.scss";

const Sidenote = ({ sidenotetext }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.9 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={styles.sidenoteInnterContainer}
    >
      <div className={styles.sideNoteHeader}>SIDE NOTE</div>
      <div className={styles.sidenoteText}>{sidenotetext}</div>
    </motion.div>
  );
};

export default Sidenote;
