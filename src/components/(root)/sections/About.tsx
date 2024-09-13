"use client"
import React, { useRef } from "react";
import CubeIcon from "../../illustrations/Cube";
import OutlinedButton from "../../buttons/Outlined";
import CircleIcon from "../../illustrations/Circle";
import Stripes from "../../Stripes";
import LetterFade from "../../LetterFade";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const About = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-subtitle",
        scrub: 2,
        start: "top bottom",
        end: "bottom 70%",
      },
    });
    tl.from([".about-head", "#about-subtitle", ".about-btn"], {
      y: 100,
      stagger: 0.02,
    });
  }, []);
  return (
    <section className="relative mt-20 min-h-screen overflow-x-clip px-20 max-md:px-4" id="section-about">
      <div className="flex justify-between">
        <div className="">
          <div className="overflow-hidden">
            <h3 className="about-head text-xl font-medium text-secondary">
              About Me
            </h3>
          </div>
          <div className="overflow-hidden">
            <h1
              className="mt-2 overflow-hidden text-5xl font-medium tracking-tighter"
              id="about-subtitle"
            >
              I can deliver results that <br /> exceed your expectations.
            </h1>
          </div>
          <div className="about-btn mt-12 w-fit">
            <OutlinedButton title="Hire Me Now" />
          </div>
        </div>
        {/* <div className="relative">
          <CircleIcon className="size-32" color="#90FF00" />
        </div> */}
      </div>
      <LetterFade
        className="z-50 ml-auto mt-10 h-[85vh] text-start text-lg font-medium tracking-widest text-gray-200 lg:w-1/2"
        highlightWords={["Navneet"]}
      >
        Hi, I&apos;m Navneet, a self-taught Full Stack Developer with over a year
        of hands-on experience in building and designing web applications. With a
        solid foundation in both front-end and back-end technologies, I excel
        in crafting seamless and efficient web applications.  My passion for exploring
        new technologies and pushing creative boundaries keeps me constantly learning 
        and growing. I thrive on the challenges of turning ideas into reality through code and am
        always eager to dive into the latest tools and frameworks to craft innovative solutions.
        
      </LetterFade>
      <div className="h-[40vh] w-full">
        <Stripes />
      </div>
    </section>
  );
};

export default About;
