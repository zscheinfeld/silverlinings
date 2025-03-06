import Callout from "@/components/content/Callout";
import Paragraph from "@/components/content/Paragraph";
import styles from "./Textblock.module.scss";

const Textblock = ({ callouts, paragraphs }) => {
  return (
    <div className={styles.textblock}>
      {/* Render callouts only if there are any */}
      {callouts?.length > 0 &&
        callouts.map((callout, index) => (
          <Callout key={`callout-${index}`} content={callout} />
        ))}

      {/* Always render paragraphs */}
      {paragraphs?.map((paragraph, index) => (
        <Paragraph key={`paragraph-${index}`} content={paragraph} />
      ))}
    </div>
  );
};

export default Textblock;
