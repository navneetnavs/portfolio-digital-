"use client";
import React, { useRef } from "react";
import { projects } from "@/data/constants";
import ProjectCard from "@/components/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { MoveLeft, MoveRight } from "lucide-react";

const Projects = () => {
  const racesRef = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const races: HTMLElement | null = racesRef.current;

    function getScrollAmount() {
      let racesWidth = races?.scrollWidth;
      if (racesWidth) return -(racesWidth - window.innerWidth);
      return 0;
    }

    const tl = gsap.timeline();
    tl.to(".racesWrapper", {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
      scrollTrigger: {
        trigger: ".racesWrapper",
        start: "top 30%",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true,
      },
      onComplete: () => {
        gsap.to("#section-projects", {
          x: 0,
          opacity: 1,
        });
      },
    });
  }, []);

  return (
    <div className="overflow-clip">
      <div className="racesWrapper">
        <div
          ref={racesRef}
          className="races flex w-fit flex-nowrap space-x-16 text-[20vw] font-semibold capitalize tracking-tight *:flex-shrink-0 [&>*:nth-child(odd)]:text-secondary"
        >
          <h2>Projects</h2>
          <h2 className="text-stroke-2 text-black">That</h2>
          <h2>Might</h2>
          <h2 className="text-stroke-2 text-black">Amaze</h2>
          <h2>You</h2>
        </div>
      </div>
      <section
        className="translate-x-[100%] overflow-x-hidden px-16 max-md:px-2"
        id="section-projects"
      >
        <div className="mt-10 w-full pb-12 max-md:px-4">
          <h3 className="text-xl font-medium text-secondary">Projects</h3>
          <h1 className="mt-2 text-5xl font-medium tracking-tighter">
            Top Projects <br />
            That Enhanced my journey
          </h1>
        </div>
        <div className="max-w-screen container mx-auto overflow-hidden py-8">
          {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> */}
          <div className="hide-scroll flex snap-x snap-mandatory flex-nowrap overflow-auto *:flex-shrink-0">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card-wrapper mx-5 w-[45%] select-none snap-start bg-zinc-950 max-md:w-full"
              >
                <ProjectCard project = {project} />
              </div>
            ))}
          </div>
          {/* <p className="flex justify-between gap-3 mt-10">
            <MoveLeft color="#fff" size={25} />
            <MoveRight color="#fff" size={25} />
          </p> */}
        </div>
      </section>
    </div>
  );
};

export default Projects;
