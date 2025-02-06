import { useState } from "react";
import styles from "@/components/Chapter.module.css";

const Svgchart = ({ source, imageoverlay = true, textoverlay = true }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={styles.chartcontainer} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            style={{ position: "relative" }}
        >
            <img src={source} alt="Chart" />

            {/* Image Overlay */}
            {imageoverlay && (
                <div className={`${styles.overlay} ${isHovered ? styles.visible : ""}`}>
                    Hover Image Overlay Content
                </div>
            )}

            {/* Text Overlay */}
            {textoverlay && (
                <div className={`${styles.textOverlay} ${isHovered ? styles.visible : ""}`}>
                    Hover Text Overlay Content
                </div>
            )}
        </div>
    );
};

export default Svgchart;
