"use client"
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the plugin
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  useEffect(() => {
    // Set up smooth scrolling for all links
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: targetId!,
            offsetY: 70, // Adjust this value if you have a fixed header
          },
          ease: "power2.inOut",
        });
      });
    });
  }, []);

  return (
    <nav className="ml-16">
      <ul className="flex *:px-4 *:transition-colors hover:*:text-secondary max-md:hidden">
        <li>
          <a href="#section-home">Home</a>
        </li>
        <li>
          <a href="#section-about">About</a>
        </li>
        <li>
          <a href="#section-skills">Skills</a>
        </li>
        <li>
          <a href="#section-projects">Projects</a>
        </li>
        {/* <li>
          <a href="#section-blog">Blog</a>
        </li> */}
        <li>
          <a href="#section-contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
