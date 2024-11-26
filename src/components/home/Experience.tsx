'use client';

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "../../utils/cn";
import { CardHoverEffect } from "../ui/card-hover-effect";
import { experiences } from "../../lib/metadata";
import { LuPencil } from "react-icons/lu";
import { FaReact } from "react-icons/fa";

interface Experience {
  title: string;
  company: string;
  location: string;
  type: string;
  date: string;
  description: string;
  skills: string[];
}

const TechBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-3 py-1.5 rounded-full text-xs font-medium
      bg-purple-50 dark:bg-purple-900/10 
      text-purple-600 dark:text-purple-300
      border border-purple-100 dark:border-purple-800
      hover:bg-purple-100 dark:hover:bg-purple-900/20
      hover:border-purple-300 dark:hover:border-purple-700
      transition-all duration-200 ease-in-out
      cursor-default
      shadow-sm shadow-purple-100/50 dark:shadow-none">
      {children}
    </div>
  );
};

export default function Experience() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 30,
    restDelta: 0.001,
    mass: 0.1
  });

  return (
    <section id="experience" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            My professional journey in Software Development
          </p>
        </motion.div>

        <div className="relative" ref={ref}>
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-purple-500/20" />
          
          {/* Beam Effect */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-purple-500 to-transparent [mask-image:linear-gradient(to_bottom,white_70%,transparent_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-transparent opacity-50" />
          </motion.div>

          <div className="relative">
            {experiences.map((experience: Experience, idx: number) => (
              <div key={idx} className="relative mb-24 last:mb-0">
                {/* Date */}
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "absolute top-0 text-sm text-purple-500 font-medium",
                    idx % 2 === 0 ? "right-[51%] pr-4" : "left-[51%] pl-4"
                  )}
                >
                  {experience.date}
                </motion.div>

                {/* Icon */}
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[0.5px] top-0">
                  <div className="relative">
                    {/* Background that covers the line */}
                    <div className="absolute inset-0 -m-[1px] bg-white dark:bg-black" />
                    
                    {/* Icon container */}
                    <motion.div
                      initial={{ scale: 0, rotate: idx % 2 === 0 ? -45 : 0 }}
                      whileInView={{ scale: 1, rotate: idx % 2 === 0 ? -45 : 0 }}
                      viewport={{ once: true }}
                      className="relative w-7 h-7 flex items-center justify-center"
                    >
                      {idx % 2 === 0 ? (
                        <LuPencil className="w-6 h-6 text-purple-500 rotate-45" />
                      ) : (
                        <FaReact className="w-6 h-6 text-purple-500" />
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    x: idx % 2 === 0 ? 100 : -100,
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: idx * 0.2,
                    type: "spring",
                    bounce: 0.4
                  }}
                  className={cn(
                    "w-[calc(50%-3rem)] mt-12",
                    idx % 2 === 0 ? "ml-auto" : "mr-auto"
                  )}
                >
                  <CardHoverEffect>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                        <span className="font-medium">{experience.company}</span>
                        <span>•</span>
                        <span>{experience.location}</span>
                      </div>

                      <p  style={{ fontSize: '14px' }} className="text-neutral-700  dark:text-neutral-300 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill: string) => (
                          <TechBadge key={skill}>
                            {skill}
                          </TechBadge>
                        ))}
                      </div>
                    </div>
                  </CardHoverEffect>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
