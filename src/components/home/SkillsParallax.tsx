"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaJava, FaJs, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAngular, FaAws, FaGitAlt, FaDocker, FaJira, FaConfluence } from "react-icons/fa";
import { SiTypescript, SiCplusplus, SiSpringboot, SiNextdotjs, SiExpress, SiTailwindcss, SiMysql, SiMongodb, SiPostgresql, SiFirebase, SiGooglecloud, SiKubernetes, SiJenkins, SiPostman } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = {
  row1: [
    { title: "HTML", icon: FaHtml5, color: "#E34F26" },
    { title: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { title: "Python", icon: FaPython, color: "#3776AB" },
    { title: "C++", icon: SiCplusplus, color: "#00599C" },
    { title: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { title: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { title: "Java", icon: FaJava, color: "#007396" },
  ],
  row2: [
    { title: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { title: "React", icon: FaReact, color: "#61DAFB" },
    { title: "Node.js", icon: FaNodeJs, color: "#339933" },
    { title: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { title: "Express", icon: SiExpress, color: "#000000" },
    { title: "Angular", icon: FaAngular, color: "#DD0031" },
    { title: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  ],
  row3: [
    { title: "GCP", icon: SiGooglecloud, color: "#4285F4" },
    { title: "Git", icon: FaGitAlt, color: "#F05032" },
    { title: "AWS", icon: FaAws, color: "#FF9900" },
    { title: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { title: "MySQL", icon: SiMysql, color: "#4479A1" },
    { title: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { title: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  ],
  row4: [
    { title: "Confluence", icon: FaConfluence, color: "#172B4D" },
    { title: "REST API", icon: TbApi, color: "#009688" },
    { title: "JIRA", icon: FaJira, color: "#0052CC" },
    { title: "Postman", icon: SiPostman, color: "#FF6C37" },
    { title: "Docker", icon: FaDocker, color: "#2496ED" },
    { title: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { title: "Jenkins", icon: SiJenkins, color: "#D24939" },
  ],
};

export const SkillsParallax = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const translateYValue = isMobile ? -300 : -700;

  const translateX = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const translateXReverse = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [15, 0, 0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [20, 0, 0, 20]);
  const translateY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [translateYValue, 0, 0, translateYValue]);

  return (
    <div id="skills"
      ref={ref}
      className="h-[120vh] md:h-[150vh] pb-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      {/* Row 1 */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="flex flex-row-reverse space-x-reverse space-x-2 md:space-x-6 mb-4 md:mb-8 justify-center"
      >
        {skills.row1.map((skill) => (
          <SkillCard
            key={skill.title}
            {...skill}
            translate={translateX}
          />
        ))}
      </motion.div>
      {/* Row 2 */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="flex flex-row space-x-2 md:space-x-6 mb-4 md:mb-8 justify-center"
      >
        {skills.row2.map((skill) => (
          <SkillCard
            key={skill.title}
            {...skill}
            translate={translateXReverse}
          />
        ))}
      </motion.div>
      {/* Row 3 */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="flex flex-row-reverse space-x-reverse space-x-2 md:space-x-6 mb-4 md:mb-8 justify-center"
      >
        {skills.row3.map((skill) => (
          <SkillCard
            key={skill.title}
            {...skill}
            translate={translateX}
          />
        ))}
      </motion.div>
      {/* Row 4 */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="flex flex-row space-x-2 md:space-x-6 mb-4 md:mb-8 justify-center"
      >
        {skills.row4.map((skill) => (
          <SkillCard
            key={skill.title}
            {...skill}
            translate={translateXReverse}
          />
        ))}
      </motion.div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl z-20 relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        My Skills
      </h1>
      <p className="max-w-3xl text-base font-bold md:text-xl mt-8 dark:text-neutral-200">
        Here are some of the key technologies I work with
      </p>
    </div>
  );
};

const SkillCard = ({
  title,
  icon: Icon,
  color,
  translate,
}: {
  title: string;
  icon: React.ElementType;
  color: string;
  translate: any;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      className="group/skill relative h-24 w-24 md:h-40 md:w-40 rounded-2xl bg-white/5 dark:bg-white/[0.02] border border-neutral-200 dark:border-white/[0.08] hover:border-neutral-300 dark:hover:border-white/[0.15] transition-colors duration-500"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neutral-50 dark:from-neutral-900/50 to-neutral-100/50 dark:to-neutral-800/50" />
      
      <div className="relative h-full w-full p-2 md:p-4 flex flex-col items-center justify-center">
        <motion.div
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5 }
          }}
          className="relative"
        >
          <Icon 
            className="w-10 h-10 md:w-16 md:h-16 transition-transform duration-300" 
            style={{ color }}
          />
          <div 
            className="absolute inset-0 blur-lg opacity-25 transition-opacity duration-300 group-hover/skill:opacity-40"
            style={{ backgroundColor: color }}
          />
        </motion.div>
        
        <div className="mt-3 md:mt-4">
          <h2 className="text-xs md:text-sm font-medium text-neutral-700 dark:text-neutral-300 text-center transition-colors duration-300 group-hover/skill:text-neutral-900 dark:group-hover/skill:text-white">
            {title}
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsParallax;
