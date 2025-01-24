import Callout from "@/components/Callout";
import Paragraph from "@/components/Paragraph";
import styles from "@/components/Chapter.module.css";

const Textblock = ({ callouts, paragraphs }) => {
    return (
        <div className={styles.textblock}>
            {/* Render callouts */}
            {callouts.map((callout, index) => (
                <Callout key={`callout-${index}`} content={callout} />
            ))}

            {/* Render paragraphs */}
            {paragraphs.map((paragraph, index) => (
                <Paragraph key={`paragraph-${index}`} content={paragraph} />
            ))}
        </div>
    );
};

export default Textblock;
