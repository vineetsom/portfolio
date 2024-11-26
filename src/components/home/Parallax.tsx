"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Parallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Fast, smooth sunrise from below text to above
  const sunY = useTransform(scrollYProgress, 
    [0, 0.4], // Very short range for quick effect
    ["330%", "50%"] // Starts below text (70%) and moves above it (20%)
  );
  const mountainY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen relative overflow-hidden"
    >
      {/* Peach morning sky gradient */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.08],
            [
              "linear-gradient(to bottom, #2B1B4D 0%, #6B3276 50%, #E6735C 100%)",
              "linear-gradient(to bottom, #FFB5BA 0%, #FFDAB9 50%, #FFE4C4 100%)"
            ]
          )
        }}
      />

      {/* Stars that fade quickly */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.04], [1, 0]) }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 20}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Sun with quick rise animation */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ y: sunY }}
      >
        <div className="relative">
          <div className="w-48 h-48 rounded-full bg-[#FFD700] absolute -top-24 -left-24 blur-3xl opacity-20" />
          <div className="w-48 h-48 rounded-full bg-gradient-to-b from-[#FFD700] to-[#FFA500] relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-[rgba(255,255,255,0.2)]" />
          </div>
        </div>
      </motion.div>

      {/* Original mountains code - untouched */}
      {/* <div className="absolute bottom-0 w-full">
        <svg 
          viewBox="0 0 1440 320" 
          className="w-full absolute bottom-0"
          style={{ height: '45vh' }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 
               C240,200 360,50 480,150 
               C600,250 660,100 720,200 
               C780,300 840,150 960,200 
               C1080,250 1200,100 1440,150 
               L1440,320 L0,320 Z"
            fill="#8B3E5D"
            opacity="0.6"
          />
        </svg>

        <svg 
          viewBox="0 0 1440 320" 
          className="w-full absolute bottom-0"
          style={{ height: '42vh' }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,150 
               C180,250 300,100 480,200 
               C660,300 690,150 720,250 
               C750,350 780,200 960,250 
               C1140,300 1260,150 1440,200 
               L1440,320 L0,320 Z"
            fill="#3D1D5C"
            opacity="0.8"
          />
        </svg>

        <svg 
          viewBox="0 0 1440 320" 
          className="w-full absolute bottom-0"
          style={{ height: '40vh' }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 
               C180,300 300,150 480,250 
               C600,320 660,200 720,400 
               C780,200 840,250 960,300 
               C1080,350 1200,200 1440,250 
               L1440,320 L0,320 Z"
            fill="#2C1B4D"
          />
        </svg>
      </div> */}
        {/* Mountains - Back Layer */}
        <motion.div
        className="absolute bottom-0 w-full"
        style={{ y: mountainY }}
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#2c1b4d"
            d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,192C840,192,960,160,1080,154.7C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </motion.div>

      {/* Mountains - Front Layer */}
      <motion.div
        className="absolute bottom-0 w-full"
        style={{ y: useTransform(mountainY, y => `${parseFloat(y as string) + 5}%`) }}
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#1a0f2e"
            d="M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,144C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </motion.div>

      {/* Text content */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.04], [1, 0]) }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center z-10"
      >
        <h1 className="text-6xl font-bold text-white mb-4 tracking-wider">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-white/90">
          Scroll to begin the journey
        </p>
      </motion.div>
    </div>
  );
};

export default Parallax;
