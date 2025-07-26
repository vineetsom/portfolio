'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import imageLoader from '../../lib/imageLoader';
import { useTheme } from 'next-themes';
import Vineet from "../../../public/images/Vineet.jpeg";

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className="min-h-[80vh] py-24 relative bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side with background and morphing bubble */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[600px] md:h-[700px]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  loader={imageLoader}
                  src={isDark ? "images/bg-dark.png" : "images/peach.png"}
                  alt="Background"
                  fill
                  className="object-cover object-left"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={100}
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
                  }}
                />
              </div>
              {/* Overlay for dark theme */}
              {isDark && (
                <div 
                  className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
                  }}
                />
              )}
            </div>

            {/* Fixed position morphing bubble */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="relative w-[400px] h-[400px] bg-white overflow-hidden"
                animate={{
                  borderRadius: [
                    '60% 40% 30% 70%/60% 30% 70% 40%',
                    '40% 60% 70% 30%/50% 60% 30% 60%',
                    '30% 60% 70% 40%/50% 30% 60% 40%',
                    '60% 40% 30% 70%/60% 30% 70% 40%'
                  ],
                  scale: [1, 1.02, 0.98, 1],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.33, 0.66, 1]
                }}
                style={{
                  borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%'
                }}
              >
                {/* Container for the image with its own subtle animation */}
                <motion.div
                  className="absolute inset-[-2px]"
                  animate={{
                    scale: [1, 1.01, 0.99, 1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.33, 0.66, 1]
                  }}
                >
                  <Image
                    loader={imageLoader}
                    src={Vineet}
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                    sizes="300px"
                  />
                </motion.div>
                {/* Subtle shadow and highlight effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-2">
            <motion.h2 
                className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Vineet
              </motion.h2>
              <motion.h2 
                className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white flex items-center gap-4"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Somwanshi
                <motion.div 
                  className="inline-flex items-center justify-center bg-violet-600 text-white px-4 py-2 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, 0] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-2xl">👋</span>
                </motion.div>
              </motion.h2>
            </div>

            <motion.h3 
              className="text-2xl md:text-3xl font-semibold text-violet-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Software Developer
            </motion.h3>

            <motion.p 
              className="text-lg text-zinc-700 dark:text-zinc-300 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              From logic to Legos, I build solutions with precision.
            </motion.p>
            <motion.h4
              className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-white mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Vineet Somwanshi
            </motion.h4>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Get in Touch
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
