"use client";
import React, { useEffect, useRef, useState } from "react";

interface DrawingCursorProps {
  gradientColors?: string[]; // Optional array of gradient colors
  size?: number; // Optional
  length?: number; // Optional
}

const DrawingCursor: React.FC<DrawingCursorProps> = ({
  gradientColors = ["#ffffff"],
  size = 5,
  length = 8
}) => {
  "use client";
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number }[]>([]);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const mobileCheck =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        global.navigator.userAgent,
      );
    setIsMobileDevice(mobileCheck);
    const canvas = canvasRef.current;
    if (!canvas || isMobileDevice) return; // Skip if on mobile
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    if (!context) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Store the latest point
      points.current.push({ x: e.clientX, y: e.clientY });

      // Limit the number of points to 10
      if (points.current.length >= length) {
        points.current.shift();
      }

      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the lines between points with gradient or default white
      context.beginPath();
      for (let i = 0; i < points.current.length - 1; i++) {
        const start = points.current[i];
        const end = points.current[i + 1];

        if (gradientColors.length > 1) {
          // Create a gradient for each segment
          const gradient = context.createLinearGradient(
            start.x,
            start.y,
            end.x,
            end.y,
          );
          gradient.addColorStop(0, gradientColors[i % gradientColors.length]);
          gradient.addColorStop(
            1,
            gradientColors[(i + 1) % gradientColors.length],
          );
          context.strokeStyle = gradient;
        } else {
          // Default to white if no gradientColors or only one color is provided
          context.strokeStyle = gradientColors[0];
        }

        context.lineWidth = size;

        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.stroke();
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("resize", () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      const mobileCheck =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          global.navigator.userAgent,
        );
      setIsMobileDevice(mobileCheck);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [gradientColors, isMobileDevice]);

  return !isMobileDevice ? (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed left-0 top-0 z-30"
    />
  ) : null;
};

export default DrawingCursor;
