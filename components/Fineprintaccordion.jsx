import Sidenote from "./Sidenote";
import Textblock from "./Textblock";
import styles from "@/components/Chapter.module.css";

const Fineprintaccordion = () => {
    return (
        <>

        <div className={styles.fineprintq}>
            <h1>How much funding will each future require?</h1>
        </div>

        <div className={styles.fineprinta}>
        <Textblock 
                callouts={[]} 
                paragraphs={[
                    "Because science is unpredictable, and because large R&D investments do not always result in large returns, we built an interactive tool where you simulate what you believe is feasible in the near and far future. As a rule, we have focused on the returns to successful investments resulting in small improvements to the biology of aging. Most scientists we consulted believe these R&D “breakthroughs” (e.g. reversing brain aging by 1 year) are already possible — even with low-tech solutions like exercise or existing therapeutics — but they haven’t yet been rigorously tested in clinical trials. (More on this in Future 4.)"
                ]}
            />
            <Sidenote sidenotetext={"Increased birth rates are unique in at least one aspect. New humans engender more new humans. In the very long run, newborns are likely to themselves produce more newborns, who then produce more newborns. This means increased fertility rates have compounding effects we do not get by simply extending the cognitive healthspan of a living human. Yet there are diminishing returns to how many more children women would have even if, like the American Lobster, female humans could safely reproduce through age 90."}>

            </Sidenote>

            <Textblock 
                callouts={[]} 
                paragraphs={[
                    "Slight improvements in reproductive aging alone would have extraordinary socioeconomic value. Yet we cannot predict that if the U.S. invests, say, $25 billion — half the entire annual budget of the National Institutes of Health — into research on delaying menopause by 10 years, this future would surely exist.  Some futures may be millions of dollars and a handful of scientists away, while others may demand billions of dollars and hundreds of tiny technological convergences. This is why we chose not to peg specific investment amounts to each advancement. ",

                    "We note that the direction of R&D investments is perhaps more important than the funding amount.  For instance, heavily funding research on late-stage neurodegenerative diseases (now at roughly $3 billion per year) has so far produced discouraging results. This is why we advocate for new R&D funding mechanisms like philanthropic foundations, bold federal agencies, and individual donors willing to bet on historically overlooked approaches in science. Some readers may wish to assume a doubling in the existing NIH funding for each R&D area. Others may be interested in forcing this exercise into an apples-to-apples comparison by assuming an equal investment amount to unlock each alternative future. Without exception, the simulated returns dwarf any plausible investment amount."
                ]}
            />
        </div>

            
        </>
    );
};

export default Fineprintaccordion