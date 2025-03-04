import React, { useState, useRef, useEffect } from "react";
import { animate } from "motion";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    items.forEach((_, index) => {
      const contentElement = contentRefs.current[index];

      if (contentElement) {
        if (activeIndex === index) {
          animate(
            contentElement,
            { height: contentElement.scrollHeight },
            { duration: 0.1, easing: "ease-in-out" },
          );
        } else {
          animate(
            contentElement,
            { height: 0 },
            { duration: 0.1, easing: "ease-in-out" },
          );
        }
      }
    });
  }, [activeIndex, items]);

  return (
    <div
      style={{ border: "1px solid #ccc", borderRadius: "4px", width: "300px" }}
    >
      {items.map((item, index) => (
        <div key={index}>
          {/* Header */}
          <div
            onClick={() => handleToggle(index)}
            style={{
              padding: "10px",
              cursor: "pointer",
              background: "#f7f7f7",
              borderBottom: "1px solid #ccc",
            }}
          >
            {item.title}
          </div>
          {/* Content */}
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            style={{
              height: 0,
              overflow: "hidden",
              background: "#fff",
              transition: "height 0.3s ease",
            }}
          >
            <div style={{ padding: "10px" }}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
