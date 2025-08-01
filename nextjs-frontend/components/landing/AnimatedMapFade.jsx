import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function AnimatedMapFade({
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
          const progress = self.progress; // 0 to 1 based on scroll position
        
          // Enable pointer events when the map is fully visible (progress > 0.1)
          if (progress > 0.1 && progress < 0.9) {
            elementRef.current.style.pointerEvents = "auto"; // Enable pointer events when map is visible
          } else {
            elementRef.current.style.pointerEvents = "none"; // Disable pointer events otherwise
          }
        },
      },
    });

    // GSAP animation for fade-in, hold, and fade-out
    timeline
      .fromTo(
        elementRef.current,
        { opacity: 0 }, // Start at 0% opacity
        {
          opacity: 1,
          duration: (fadeInEnd - fadeInStart) / (fadeOutEnd - fadeInStart), // Fade to 100% opacity
        }
      )
      .to(elementRef.current, {
        opacity: 1,
        duration: (fadeOutStart - fadeInEnd) / (fadeOutEnd - fadeInStart), // Hold at full opacity
      })
      .to(elementRef.current, {
        opacity: 0,
        duration: (fadeOutEnd - fadeOutStart) / (fadeOutEnd - fadeInStart), // Fade back to 0% opacity
      });

    // Cleanup function to kill GSAP animations and scrollTrigger
    return () => {
      if (timeline.scrollTrigger) timeline.scrollTrigger.kill();
      timeline.kill();
    };
  }, [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd]);

  return (
    // Apply animation to the child component directly
    <div ref={elementRef}>
      {children}
    </div>
  );
}
