import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Animatedlandingelementfade({
  fadeInStart,
  fadeInEnd,
  fadeOutStart,
  fadeOutEnd,
  children,
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP timeline for fade-in, hold, and fade-out
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: elementRef.current.parentNode, // Use the parent as the trigger
        start: `${fadeInStart}px`,
        end: `${fadeOutEnd}px`,
        scrub: true,
        onUpdate: (self) => {
          // Toggle pointer-events based on scroll progress
          const progress = self.progress; // 0 to 1 based on scroll position
          if (progress > 0 && progress < 1) {
            elementRef.current.style.pointerEvents = "auto";
          } else {
            elementRef.current.style.pointerEvents = "none";
          }
        },
      },
    });

    timeline
      .fromTo(
        elementRef.current,
        { opacity: 0 }, // Start at 0% opacity
        {
          opacity: 1,
          duration: (fadeInEnd - fadeInStart) / (fadeOutEnd - fadeInStart),
        }, // Fade to 100%
      )
      .to(elementRef.current, {
        opacity: 1,
        duration: (fadeOutStart - fadeInEnd) / (fadeOutEnd - fadeInStart), // Hold at full opacity
      })
      .to(elementRef.current, {
        opacity: 0,
        duration: (fadeOutEnd - fadeOutStart) / (fadeOutEnd - fadeInStart), // Fade back to 0%
      });

    return () => {
      if (timeline.scrollTrigger) timeline.scrollTrigger.kill();
      timeline.kill();
    };
  }, [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd]);

  return (
    // Apply animation to the child component directly
    <div ref={elementRef} style={{ zIndex: 500, position: "relative" }}>
      {children}
    </div>
  );
}
