"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Playfair_Display, Space_Grotesk } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

const Parallax = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [viewportHeight, setViewportHeight] = useState('100vh');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const updateViewportHeight = () => {
      setViewportHeight(`${window.innerHeight}px`);
    };
    
    checkMobile();
    updateViewportHeight();
    
    window.addEventListener('resize', checkMobile);
    window.addEventListener('resize', updateViewportHeight);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const sunY = useTransform(scrollYProgress, 
    [0, 0.4], 
    isMobile ? ["400%", "30%"] : ["330%", "50%"]
  );
  
  const mountainY = useTransform(scrollYProgress, 
    [0, 1], 
    isMobile ? ["0%", "5%"] : ["0%", "20%"]
  );

  return (
    <div
      ref={ref}
      className="w-full relative overflow-hidden"
      style={{ height: viewportHeight }}
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
        {Array.from({ length: isMobile ? 12 : 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * (isMobile ? 15 : 20)}%`,
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
          <div className="w-24 sm:w-48 h-24 sm:h-48 rounded-full bg-[#FFD700] absolute -top-12 sm:-top-24 -left-12 sm:-left-24 blur-3xl opacity-20" />
          <div className="w-24 sm:w-48 h-24 sm:h-48 rounded-full bg-gradient-to-b from-[#FFD700] to-[#FFA500] relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-[rgba(255,255,255,0.2)]" />
          </div>
        </div>
      </motion.div>

      {/* Mountains */}
      <motion.div
        className="absolute -bottom-1 w-full"
        style={{ y: mountainY }}
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[25vh] sm:h-auto"
          preserveAspectRatio="none"
          style={{ minHeight: '150px' }}
        >
          <path
            fill="#2c1b4d"
            d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,192C840,192,960,160,1080,154.7C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </motion.div>

      {/* Mountains - Front Layer */}
      <motion.div
        className="absolute -bottom-1 w-full"
        style={{ y: useTransform(mountainY, y => `${parseFloat(y as string) + (isMobile ? 2 : 5)}%`) }}
      >
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-[25vh] sm:h-auto"
          preserveAspectRatio="none"
          style={{ minHeight: '150px' }}
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
        className="absolute top-[15%] sm:top-1/4 left-1/2 -translate-x-1/2 text-center z-10 w-full px-4 sm:px-0"
      >
        <p className={`${spaceGrotesk.className} text-[10px] xs:text-xs sm:text-sm md:text-lg text-white/80 mb-2 mx-auto tracking-wide font-light`}>
          From logic to Legos, I build solutions with precision.
        </p>
        <h1 className={`${playfair.className} text-xl xs:text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-2 sm:mb-4 tracking-wider`}>
          Devika Shendkar
        </h1>
        <p className={`${playfair.className} text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 mb-4 sm:mb-8 font-light tracking-widest`}>
          Software Developer
        </p>
        <div className="flex justify-center gap-6">
          <motion.a
            href="https://github.com/devika7300"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/devika-shendkar/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-3 h-6 sm:w-4 sm:h-8 rounded-full border-2 border-white/50 flex justify-center pt-1.5 sm:pt-2">
          <motion.div
            className="w-0.5 sm:w-1 h-1.5 sm:h-2 bg-white/50 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className={`${spaceGrotesk.className} text-white/40 mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-widest`}>
          Scroll
        </span>
      </motion.div>
    </div>
  );
};

export default Parallax;
