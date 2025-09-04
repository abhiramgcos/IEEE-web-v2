"use client";

import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span 
        className="scroll-reveal-text opacity-0" 
        key={index}
        style={{ 
          transform: 'translateY(120%) scaleY(2.3) scaleX(0.7)',
          transformOrigin: '50% 0%'
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".scroll-reveal-text");

    // Clear any existing animations
    gsap.killTweensOf(charElements);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scroller,
        start: scrollStart,
        end: scrollEnd,
        once: true,
        toggleActions: "play complete complete complete",
        onEnter: () => {
          // Ensure proper stacking context
          el.style.zIndex = "1";
        },
        onLeave: () => {
          // Reset z-index when animation is complete
          el.style.zIndex = "auto";
        }
      }
    });

    tl.to(charElements, {
      duration: animationDuration,
      ease: ease,
      opacity: 1,
      yPercent: 0,
      scaleY: 1,
      scaleX: 1,
      stagger: stagger,
      clearProps: "transform", // Clear GSAP transforms after animation
    });

    // Cleanup function
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
  ]);

  return (
    <h2
      ref={containerRef}
      className={`scroll-reveal-container my-5 overflow-hidden ${containerClassName}`}
    >
      <span
        className={`scroll-reveal-text text-[clamp(2.5rem,6vw,4rem)] leading-[1.5] ${textClassName}`}
      >
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;
