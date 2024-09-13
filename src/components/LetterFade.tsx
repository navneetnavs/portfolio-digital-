"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useRef } from "react";

type LetterFadeParams = {
  className?: string;
  letter?: string;
  delay?: number;
  duration?: number;
  initialDelay?: number;
  children: React.ReactNode;
  highlightWords?: string[];
};

const letterGroup = (text: string, highlightWords?: string[]) => {
  const letters = text.split(" ");
  return letters.map((letter, index) => {
    return (
      <span key={index} className="fade-letter inline-block pr-2">
        {/* {letter == " " && <span className="">_ </span>} */}
        {letter}
      </span>
    );
  });
};

const LetterFade = ({
  children,
  className,
  highlightWords,
}: LetterFadeParams) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".fade-letter", {
      opacity: 0.08,
      translateY: 50,
      duration: 1,
      stagger: 0.8,
      x: -400,
      scrollTrigger: {
        trigger: "#fade",
        start: "top bottom",
        end: "center 60%",
        scrub: 2,
      },
    });
  });
  return (
    <p className={className} id="fade">
      {letterGroup(
        children?.toString() || "No text was provided",
        highlightWords,
      )}
    </p>
  );
};

export default LetterFade;
