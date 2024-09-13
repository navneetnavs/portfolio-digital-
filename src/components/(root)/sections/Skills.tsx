"use client";
import gsap from "gsap";
import React, { useRef } from "react";
import { skills } from "@/data/constants";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Skills: React.FC = () => {
  const menuRefs: any = [];

  const toggleMenu = (index: number) => {
    const menu = menuRefs[index];
    const menuIcon = menu.previousSibling.querySelector(".dropdown-icon");
    if (menu) {
      const isActive = menu.classList.contains("active");
      isActive ? menu.classList.remove("active") : menu.classList.add("active");
      gsap.to(menu, {
        height: isActive ? "auto" : 0,
        opacity: isActive ? 1 : 0,
        duration: 0.5,
        ease: "power2.inOut",
        onStart: () => {
          isActive
            ? gsap.to(menuIcon, {
                rotate: 90,
              })
            : gsap.to(menuIcon, {
                rotate: 0,
              });
        },
      });
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-skills",
        scrub: 2,
        start: "top bottom",
        end: "center 60%",
        pin: "#test",
        pinSpacing: true,
      },
    });
    tl.from([".skill-head", ".skill-subtitle"], {
      y: 100,
      stagger: 0.1,
    });
  }, []);

  return (
    <section className="min-h-screen px-20 max-md:px-4 overflow-x-hidden" id="section-skills">
      <div className="w-full text-center">
        <div className="overflow-hidden">
          <h3 className="skill-head text-xl font-medium text-secondary">
            Skills
          </h3>
        </div>
        <div className="overflow-hidden">
          <h1 className="skill-subtitle mt-2 text-5xl font-medium tracking-tighter">
            Tools and Technologies <br />
            That Power My Development
          </h1>
        </div>
      </div>
      <div className="mt-32 grid gap-5 lg:grid-cols-2">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="mb-10 flex flex-col">
              <button
                onClick={() => toggleMenu(index)}
                className="relative z-20 mb-4 flex items-center overflow-hidden text-nowrap px-2 py-2 font-medium tracking-wider transition-all duration-500 after:absolute after:bottom-0 after:left-0 after:z-[-20] after:h-1 after:w-full after:bg-secondary after:transition-all after:duration-500 hover:text-black hover:transition-all hover:duration-500 after:hover:h-[200%] after:hover:transition-all after:hover:duration-500"
              >
                <h1 className="space-x-2 text-xl">
                  <span className="text-2xl text-secondary">
                    {index.toString().padStart(2, "0")}.
                  </span>
                  <span>{skill.category}</span>
                </h1>
                <i className="dropdown-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </i>
              </button>
              <ul
                ref={(elem) => menuRefs.push(elem)}
                className="active grid grid-cols-2 overflow-hidden *:border *:px-4 *:py-2"
                style={{
                  height: 0,
                  opacity: 0,
                }}
              >
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="cursor-default font-medium hover:text-secondary"
                  >
                    {item}
                  </span>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
