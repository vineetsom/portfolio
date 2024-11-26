import type { Metadata } from 'next';
import { FaReact, FaAws } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const siteMetadata = {
  title: 'Devika Shendkar - Portfolio',
  description: 'Professional portfolio showcasing full-stack development projects and skills',
  author: 'Devika Shendkar',
  siteUrl: 'https://devika7300.github.io',
  twitterHandle: '@devika',
};

export const generateMetadata = (path: string): Metadata => {
  const currentUrl = `${siteMetadata.siteUrl}${basePath}${path}`;
  
  return {
    title: siteMetadata.title,
    description: siteMetadata.description,
    authors: [{ name: siteMetadata.author }],
    openGraph: {
      title: siteMetadata.title,
      description: siteMetadata.description,
      url: currentUrl,
      siteName: siteMetadata.title,
      type: 'website',
      images: [
        {
          url: `${currentUrl}/images/devika1.png`,
          width: 1200,
          height: 630,
          alt: siteMetadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteMetadata.title,
      description: siteMetadata.description,
      creator: siteMetadata.twitterHandle,
      images: [`${currentUrl}/images/devika1.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(siteMetadata.siteUrl),
  };
}; 

export const experiences = [
  {
    title: "Full Stack Developer",
    company: "PTC",
    location: "Boston, MA",
    type: "Full-time",
    date: "2024 - Present",
    description: "Developed an event-driven data management system using the PERN stack, enhancing data processing and retrieval efficiencies. Collaborated with multiple cross-functional teams in an Agile environment and optimized system architecture with AWS services. Additionally, I established CI/CD pipelines with GitLab CI, streamlining deployments and accelerating feature rollouts.",
    skills: ["PostgreSQL", "Express", "React.js", "Node.js", "GitLab CI", "AWS"],
  },
  {
    title: "Application Development Associate",
    company: "Accenture",
    location: "Pune, IN",
    type: "Full-time",
    date: "2021 - 2022",
    description: "Spearheaded the development of a microservices-based inventory system, enhancing stock accuracy and automating operations for multiple locations. Migrated the backend system to Kubernetes-managed AWS, improving system capacity and integrating Apache Kafka for real-time updates.managed the entire software development lifecycle, delivering the project two weeks ahead of schedule and reducing costs.",
    skills: ["Java", "Spring boot", "React", "AWS", "MySQL", "Kafka", "REST API", "Kubernetes", "Jenkins"],
  },
  {
    title: "Software Developer",
    company: "Sigma Infosolutions Ltd.",
    location: "Bangalore, IN",
    type: "Full-time",
    date: "2019 - 2021",
    description: "Developed 3+ full-stack applications, enhancing scalability and engagement. Created a hybrid database with MySQL and MongoDB to optimize queries. Designed RESTful APIs for efficient data integration. Improved CI/CD pipelines with Jenkins and Docker, and implemented security with Spring Security and JUnit testing. Led Agile workflows using Git and Jira for timely project delivery.",
    skills: ["Java", "Spring boot", "React", "AWS", "MySQL", "MongoDB", "Docker", "Jenkins"],
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "images/projects/project1.png",
    icons: [
      { icon: FaReact, color: "#61DAFB" },
      { icon: SiMysql, color: "#00758F" },
      { icon: SiSpringboot, color: "#6DB33F" },
      { icon: FaAws, color: "#FF9900" }
    ],
    link: "https://github.com/devika7300/Shift-management",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "images/projects/project2.png",
    icons: [
      { icon: FaReact, color: "#61DAFB" },
      { icon: SiMysql, color: "#00758F" },
      { icon: SiSpringboot, color: "#6DB33F" },
      { icon: FaAws, color: "#FF9900" }
    ],
    link: "https://github.com/devika7300",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "images/projects/project3.png",
    icons: [
      { icon: FaReact, color: "#61DAFB" },
      { icon: SiMysql, color: "#00758F" },
      { icon: SiSpringboot, color: "#6DB33F" },
      { icon: FaAws, color: "#FF9900" }
    ],
    link: "https://github.com/devika7300",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "images/projects/project2.png",
    icons: [
      { icon: FaReact, color: "#61DAFB" },
      { icon: SiMysql, color: "#00758F" },
      { icon: SiSpringboot, color: "#6DB33F" },
      { icon: FaAws, color: "#FF9900" }
    ],
    link: "https://github.com/devika7300",
  },
  {
    id: 5,
    title: "Project Management Dashboard",
    des: "A comprehensive project management tool with real-time updates and team collaboration features.",
    img: "images/projects/project1.png",
    icons: [
      { icon: FaReact, color: "#61DAFB" },
      { icon: SiMysql, color: "#00758F" },
      { icon: SiSpringboot, color: "#6DB33F" },
      { icon: FaAws, color: "#FF9900" }
    ],
    link: "https://github.com/devika7300",
  },
  {
    id: 6,
    title: "E-commerce Platform",
    des: "Full-featured e-commerce solution with inventory management and payment processing.",
    img: "images/projects/project3.png",
    icons: [
      { icon: FaReact, color: "#61DAFB" },
      { icon: SiMysql, color: "#00758F" },
      { icon: SiSpringboot, color: "#6DB33F" },
      { icon: FaAws, color: "#FF9900" }
    ],
    link: "https://github.com/devika7300",
  },
];
