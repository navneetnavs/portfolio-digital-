import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  alpha: number;
  vx: number;
  vy: number;
  shape: "circle" | "square" | "star";
}

interface InteractionConfig {
  selector: string;
  hoverEffect: "grow" | "shrink" | "explode" | "none";
  clickEffect: "burst" | "implode" | "none";
  hoverColor?: string;
  clickColor?: string;
}

interface ParticlesCursorProps {
  particleSize?: number;
  particleColor?: string;
  particleDuration?: number;
  maxParticles?: number;
  particleDensity?: number;
  useRandomColors?: boolean;
  idleCircleSize?: number;
  glowEffect?: boolean;
  trailEffect?: boolean;
  interactionConfigs?: InteractionConfig[];
  cursorSize?: number;
  cursorColor?: string;
  cursorBorderWidth?: number;
  cursorBorderColor?: string;
  canvasBackground?: { opacity: number };
}

const ParticlesCursor: React.FC<ParticlesCursorProps> = ({
  particleSize = 5,
  particleColor = "#00ffff",
  particleDuration = 1,
  maxParticles = 100,
  particleDensity = 3,
  useRandomColors = false,
  idleCircleSize = 20,
  glowEffect = true,
  trailEffect = true,
  interactionConfigs = [],
  cursorSize = 20,
  cursorColor = "rgba(255, 255, 255, 0.5)",
  cursorBorderWidth = 2,
  cursorBorderColor = "#ffffff",
  canvasBackground = { opacity: 0.1 },
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0 });
  const [isIdle, setIsIdle] = useState(true);
  const idleTimerRef = useRef<number | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [currentInteraction, setCurrentInteraction] =
    useState<InteractionConfig | null>(null);

  const getRandomColor = (): string => {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
  };

  const createParticle = (x: number, y: number, color?: string): Particle => ({
    x,
    y,
    size: particleSize * (Math.random() * 0.5 + 0.5),
    color: color || (useRandomColors ? getRandomColor() : particleColor),
    alpha: 1,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    shape: ["circle", "square", "star"][Math.floor(Math.random() * 3)] as
      | "circle"
      | "square"
      | "star",
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawParticle = (particle: Particle) => {
      if (!ctx) return;

      ctx.save();
      ctx.globalAlpha = particle.alpha;
      ctx.fillStyle = particle.color;

      if (glowEffect) {
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
      }

      switch (particle.shape) {
        case "circle":
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2);
          ctx.fill();
          break;
        case "square":
          ctx.fillRect(
            particle.x - particle.size / 2,
            particle.y - particle.size / 2,
            particle.size,
            particle.size,
          );
          break;
        case "star":
          const spikes = 5;
          let rot = (Math.PI / 2) * 3;
          const step = Math.PI / spikes;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y - particle.size / 2);
          for (let i = 0; i < spikes; i++) {
            const x = particle.x + (Math.cos(rot) * particle.size) / 2;
            const y = particle.y + (Math.sin(rot) * particle.size) / 2;
            ctx.lineTo(x, y);
            rot += step;
            const x2 = particle.x + (Math.cos(rot) * particle.size) / 4;
            const y2 = particle.y + (Math.sin(rot) * particle.size) / 4;
            ctx.lineTo(x2, y2);
            rot += step;
          }
          ctx.lineTo(particle.x, particle.y - particle.size / 2);
          ctx.closePath();
          ctx.fill();
          break;
      }

      ctx.restore();
    };

    const updateParticles = () => {
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.alpha -= 1 / (60 * particleDuration);
        particle.size *= 0.99;

        if (particle.alpha <= 0 || particle.size <= 0.1) {
          particlesRef.current.splice(index, 1);
        }
      });

      const dx = mouseRef.current.x - mouseRef.current.lastX;
      const dy = mouseRef.current.y - mouseRef.current.lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const particlesToAdd = Math.min(
        Math.floor(distance * particleDensity),
        5,
      );

      for (let i = 0; i < particlesToAdd; i++) {
        if (particlesRef.current.length < maxParticles) {
          particlesRef.current.push(
            createParticle(
              mouseRef.current.lastX + dx * (i / particlesToAdd),
              mouseRef.current.lastY + dy * (i / particlesToAdd),
              currentInteraction?.hoverColor,
            ),
          );
        }
      }

      mouseRef.current.lastX = mouseRef.current.x;
      mouseRef.current.lastY = mouseRef.current.y;
    };

    // const drawIdleCircle = (size = idleCircleSize / 2) => {
    //   if (!ctx || !isIdle) return;
    //   ctx.save();
    //   ctx.beginPath();
    //   ctx.arc(mouseRef.current.x, mouseRef.current.y, size, 0, Math.PI * 2);
    //   ctx.fillStyle = particleColor;
    //   ctx.globalAlpha = 0.3;
    //   ctx.fill();

    //   if (glowEffect) {
    //     ctx.shadowBlur = 20;
    //     ctx.shadowColor = particleColor;
    //     ctx.strokeStyle = particleColor;
    //     ctx.lineWidth = 2;
    //     ctx.stroke();
    //   }

    //   ctx.restore();
    // };

    const render = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // drawIdleCircle();

      updateParticles();
      particlesRef.current.forEach(drawParticle);

      if (trailEffect) {
        ctx.save();
        ctx.fillStyle = `rgba(${parseInt(particleColor.slice(1, 3), 16)}, ${parseInt(particleColor.slice(3, 5), 16)}, ${parseInt(particleColor.slice(5, 7), 16)}, ${canvasBackground.opacity})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
      }

      requestAnimationFrame(render);
    };

    const updateCursorStyle = () => {
      // const scale =
      //   currentInteraction?.hoverEffect === "grow"
      //     ? 1.5
      //     : currentInteraction?.hoverEffect === "shrink"
      //       ? 0.5
      //       : 1;
      // gsap.to(cursorRef, {
      //   width: cursorSize ,
      //   height: cursorSize * scale,
      //   backgroundColor: currentInteraction?.hoverColor || cursorColor,
      //   borderColor: currentInteraction?.hoverColor || cursorBorderColor,
      //   duration: 0.3,
      // });
    };

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(mouseRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });

      setIsIdle(false);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = window.setTimeout(() => setIsIdle(true), 100);
    };

    const handleInteraction = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const config = interactionConfigs.find((cfg) => {
        target.matches(cfg.selector);
      });
      setCurrentInteraction(config || null);
      // console.log(target)
      updateCursorStyle();

      if (e.type === "click" && config?.clickEffect !== "none") {
        const burstParticles = 20;
        for (let i = 0; i < burstParticles; i++) {
          const angle = (i / burstParticles) * Math.PI * 2;
          const speed = config?.clickEffect === "implode" ? -5 : 5;
          particlesRef.current.push({
            ...createParticle(e.clientX, e.clientY, config?.clickColor),
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
          });
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleInteraction);
    window.addEventListener("click", handleInteraction);
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, [
    particleSize,
    particleColor,
    particleDuration,
    maxParticles,
    particleDensity,
    useRandomColors,
    idleCircleSize,
    glowEffect,
    trailEffect,
    interactionConfigs,
    cursorSize,
    cursorColor,
    cursorBorderWidth,
    cursorBorderColor,
  ]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed left-0 top-0 z-50 h-full w-full"
      />
      <div
        className="pointer-events-none fixed left-0 top-0 z-50 w-fit -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-secondary bg-secondary/40"
        style={{ width: idleCircleSize, height: idleCircleSize }}
        ref={cursorRef}
      ></div>
    </>
  );
};

export default ParticlesCursor;
