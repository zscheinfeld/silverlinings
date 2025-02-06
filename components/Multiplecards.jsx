import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "@/components/Chapter.module.css";

const Multiplecards = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.9 }
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
            <div className={styles.sidenoteText}>
            Behavioral economics, too, can explain how “people are more willing to pay for a cure than for prevention.” Insurers, hospitals, and patients face a tragedy of the commons where all parties would be better off prioritizing long-term health, yet the incentives for individual agents to do so remain misaligned. For instance, because we’re free to change our health insurance, few insurers invest in our future health. And because governments largely subsidize our age-related health decline with programs like Medicare, we (and insurers) often underinvest in lifestyle choices like better diets — which can partly delay and even reverse some of the hallmarks of aging. 
            </div>
        </motion.div>
    );
};

export default Multiplecards;
