'use client';

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const GithubGlobe = ({
  className,
}: {
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const points = generatePoints();
    let animationFrameId: number;
    let angle = 0;

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      angle += isHovered ? 0.005 : 0.002;
      const rotatedPoints = points.map((point) => rotatePoint(point, angle));

      // Draw connections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;
      for (let i = 0; i < rotatedPoints.length; i++) {
        for (let j = i + 1; j < rotatedPoints.length; j++) {
          const distance = getDistance(rotatedPoints[i], rotatedPoints[j]);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(rotatedPoints[i].x, rotatedPoints[i].y);
            ctx.lineTo(rotatedPoints[j].x, rotatedPoints[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw points
      rotatedPoints.forEach((point) => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn("h-full w-full", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="w-full h-full"
      />
    </motion.div>
  );
};

function generatePoints() {
  const points = [];
  const numPoints = 50;
  const radius = 150;
  const center = { x: 200, y: 200 };

  for (let i = 0; i < numPoints; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 2;

    const x = center.x + radius * Math.sin(phi) * Math.cos(theta);
    const y = center.y + radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    points.push({ x, y, z });
  }

  return points;
}

function rotatePoint(point: { x: number; y: number; z: number }, angle: number) {
  const center = { x: 200, y: 200 };
  const rotatedX =
    (point.x - center.x) * Math.cos(angle) -
    point.z * Math.sin(angle) +
    center.x;
  const rotatedZ =
    (point.x - center.x) * Math.sin(angle) +
    point.z * Math.cos(angle);

  return {
    x: rotatedX,
    y: point.y,
    z: rotatedZ,
  };
}

function getDistance(
  point1: { x: number; y: number },
  point2: { x: number; y: number }
) {
  const dx = point2.x - point1.x;
  const dy = point2.y - point1.y;
  return Math.sqrt(dx * dx + dy * dy);
}
