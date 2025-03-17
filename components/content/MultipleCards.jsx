import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./MultipleCards.module.scss";
import sidenoteStyles from "./Sidenote.module.scss";

const MultipleCards = () => {
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

  const cards = [
    {
      header: "1",
      text: "It is often more profitable for a pharmaceutical company to lengthen the <i>unhealthy</i> life of a patient by a few months than to develop mechanisms that improve overall health. It’s prohibitively expensive to test drugs in dozens of disease indications (which could test health extension); easier to market “me too” drugs than to develop new ones; and difficult to retain patents and patients in long clinical trials (which could quantify life-years saved). ",
    },
    {
      header: "2",
      text: "People prefer to pay for cures than for prevention. Insurers, hospitals, and patients would all be better off prioritizing long-term health. But the incentives for individual agents to do so are misaligned. Because we’re free to change our health insurance, few insurers invest in our future health. And because governments subsidize our age-related health decline with programs like Medicare, we (and insurers) often underinvest in lifestyle choices like better diets — which can partly delay and even reverse <i>some</i> hallmarks of aging. ",
    },
    {
      header: "3",
      text: "Disease is often more easily measured than health. A therapeutic that preventatively extends the human healthspan is taken before its effects can be measured, and it compares against the unknowable counterfactual of how long the patient would have anyway lived in good health. All this leads to a system more prone to treating illness than preventing it.",
    },
  ];

  return (
    <div className={styles.multipleCardsModule}>
      <div className={styles.desktopLabelXL}>MARKET FAILURES</div>
      <div className={styles.multipleCardsContainer} ref={ref}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            className={styles.multipleSidenoteInnerContainer}
          >
            <div className={styles.multipleSideNoteHeader}>{card.header}</div>
            <div 
              className={sidenoteStyles.sidenoteText} 
              dangerouslySetInnerHTML={{ __html: card.text }} 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MultipleCards;
