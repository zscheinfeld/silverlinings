import Callout from "@/components/content/Callout";
import Paragraph from "@/components/content/Paragraph";
import Bold from "@/components/content/Bold";
import styles from "./Textblock.module.scss";


const Textblock = ({ callouts, paragraphs, bold }) => {
  return (
    <div className={styles.textblock}>
      {/* Render callouts only if there are any */}
      {callouts?.length > 0 &&
        callouts.map((callout, index) => (
          <Callout key={`callout-${index}`} content={callout} />
        ))}

      {bold?.length > 0 &&
        bold.map((bolditem, index) => (
          <Bold key={`callout-${index}`} content={bolditem}></Bold>
        ))}

      {/* Always render paragraphs */}
      {paragraphs?.map((paragraph, index) => (
        <Paragraph key={`paragraph-${index}`} content={paragraph} />
      ))}
    </div>
  );
};

export default Textblock;
