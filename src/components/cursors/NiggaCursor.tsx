import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { v4 as uuidv4 } from "uuid"; // for generating unique IDs
import "tailwindcss/tailwind.css";

type Particle = {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  shape: "circle" | "square" | "star";
  alpha: number;
  scale: number;
};

type CursorProps = {
  particleSize?: number;
  particleColor?: string | string[];
  particleDuration?: number;
  maxParticles?: number;
  particleDensity?: number;
  particleShape?: "circle" | "square" | "star";
  canvasBackground?: {
    opacity: number;
  };
};

const NiggaCursor: React.FC<CursorProps> = ({
  particleSize = 8,
  particleColor = "#ffffff",
  particleDuration = 1.5,
  maxParticles = 100,
  particleDensity = 0.5,
  particleShape = "circle",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const idleCircleRef = useRef<HTMLDivElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const [isIdle, setIsIdle] = useState(false);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const randomColor = () => {
    if (Array.isArray(particleColor)) {
      return particleColor[Math.floor(Math.random() * particleColor.length)];
    }
    return particleColor;
  };

  const createParticle = (x: number, y: number) => {
    if (particles.current.length >= maxParticles) {
      particles.current.shift(); // Remove the oldest particle to maintain the maxParticles limit
    }

    const size = particleSize * (Math.random() * 0.5 + 0.75);
    const color = randomColor();

    particles.current.push({
      id: uuidv4(),
      x,
      y,
      size,
      color,
      shape: particleShape,
      alpha: 1,
      scale: 1,
    });
  };

  const updateParticles = () => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);

    particles.current.forEach((particle, index) => {
      particle.alpha -= 0.02;
      particle.scale -= 0.02;
      if (particle.alpha <= 0 || particle.scale <= 0) {
        particles.current.splice(index, 1);
        return;
      }

      ctx.globalAlpha = particle.alpha;
      ctx.fillStyle = particle.color;
      ctx.beginPath();

      switch (particle.shape) {
        case "circle":
          ctx.arc(
            particle.x,
            particle.y,
            particle.size * particle.scale,
            0,
            Math.PI * 2,
          );
          break;
        case "square":
          ctx.rect(
            particle.x,
            particle.y,
            particle.size * particle.scale,
            particle.size * particle.scale,
          );
          break;
        case "star":
          // Draw a simple star shape
          const outerRadius = particle.size * particle.scale;
          const innerRadius = outerRadius / 2;
          const spikes = 5;
          let rotation = (Math.PI / 2) * 3;
          let x = particle.x;
          let y = particle.y;
          ctx.moveTo(x, y - outerRadius);

          for (let i = 0; i < spikes; i++) {
            x = particle.x + Math.cos(rotation) * outerRadius;
            y = particle.y - Math.sin(rotation) * outerRadius;
            ctx.lineTo(x, y);
            rotation += Math.PI / spikes;

            x = particle.x + Math.cos(rotation) * innerRadius;
            y = particle.y - Math.sin(rotation) * innerRadius;
            ctx.lineTo(x, y);
            rotation += Math.PI / spikes;
          }
          ctx.lineTo(particle.x, particle.y - outerRadius);
          break;
      }

      ctx.closePath();
      ctx.fill();
    });
  };

  const animateParticles = () => {
    updateParticles();
    requestAnimationFrame(animateParticles);
  };

  const handleMouseMove = (e: MouseEvent) => {
    setIsIdle(false);
    if (idleCircleRef.current) {
      idleCircleRef.current.style.display = "none";
    }

    for (let i = 0; i < particleDensity * 10; i++) {
      createParticle(e.clientX, e.clientY);
    }
  };

  const handleMouseIdle = () => {
    setIsIdle(true);
    if (idleCircleRef.current) {
      idleCircleRef.current.style.display = "block";
      gsap.to(idleCircleRef.current, { opacity: 1, duration: 0.5 });
    }
  };

  const handleClick = (e: MouseEvent) => {
    for (let i = 0; i < 30; i++) {
      createParticle(e.clientX, e.clientY);
    }
  };

  const handleResize = () => {
    setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);

    const idleTimer = setTimeout(handleMouseIdle, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      clearTimeout(idleTimer);
    };
  }, [canvasSize]);

  useEffect(() => {
    animateParticles();
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed left-0 top-0 z-50"
        style={{ width: "100%", height: "100%" }}
      />
      <div
        ref={idleCircleRef}
        className="pointer-events-none fixed z-50 rounded-full opacity-0"
        style={{
          width: `${particleSize * 2}px`,
          height: `${particleSize * 2}px`,
          backgroundColor: Array.isArray(particleColor)
            ? particleColor[0]
            : particleColor,
        }}
      />
    </>
  );
};

export default NiggaCursor;
