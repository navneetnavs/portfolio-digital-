"use client";
import React from "react";
import CubeIcon from "../../illustrations/Cube";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    const body = window.document.querySelector<HTMLBodyElement>("body");
    body?.classList.add("force-scroll-disabled");

    const tl = gsap.timeline();

    tl.set("#overlay", {
      opacity: 0,
      onComplete: () => {
        gsap.set("#overlay", { display: "none" });
      },
    });
    tl.from("#firstname", {
      duration: 1,
      opacity: 0,
      x: "-12em",
    });
    tl.from(
      "#lastname",
      {
        duration: 1,
        opacity: 0,
        x: "12em",
      },
      "<",
    );
    tl.from("#firstname-i", {
      duration: 1.2,
      opacity: 0,
      y: "-150%",
      ease: "elastic.inOut",
    });
    tl.from("#paragraph", {
      y: "120%",
      onComplete: () => body?.classList.remove("force-scroll-disabled"),
    });
  }, []);
  return (
    <section
      className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-clip px-20 max-md:px-4"
      id="section-home"
    >
      <div
        className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black"
        id="overlay"
      ></div>
      <div className="z-10 select-none">
        <h1 className="text-center text-[12rem] font-semibold leading-[0.85] tracking-tight *:block max-md:text-7xl">
          <span className="text-nowrap" id="firstname">
            DiG
            <span className="inline-flex" id="firstname-i">i</span>
            tal
          </span>
          <span className="" id="lastname">
            Artisan
          </span>
        </h1>
      </div>
      <p
        className="absolute bottom-2 z-10 mt-auto text-center text-lg font-medium text-gray-light"
        id="paragraph"
      >
        Hello, my name is <span className="text-white">Navneet Kumar</span>, nice
        to meet you I would like to <br />
        welcome you with my portfolio.
      </p>
      {/* <CubeIcon className="size-96 absolute" color="#90FF00" /> */}
    </section>
  );
};

export default Hero;
