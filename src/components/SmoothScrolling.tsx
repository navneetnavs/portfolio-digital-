"use client";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useRef } from "react";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  // lenis options for configuration
  const lenisOptions = {
    lerp: 0.08,
    duration: 1.5,
    smoothTouch: true, //smooth scroll for touch devices
    smooth: true,
    // infinite: true
  };
  

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
export default SmoothScrolling;
