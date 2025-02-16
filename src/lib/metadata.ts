import type { Metadata } from 'next';
import { FaReact, FaAws, FaMoneyCheckAlt, FaExchangeAlt, FaCloud, FaAndroid, FaMicrochip, FaRaspberryPi, FaTasks, FaStripeS } from "react-icons/fa";
import { FaJava } from 'react-icons/fa6';
import { SiSpringboot, SiMysql, SiTypescript, SiNextdotjs, SiChartdotjs, SiTailwindcss, SiAppwrite, SiNodedotjs, SiExpress, SiPostgresql, SiPrisma, SiSpring, SiPostman, SiHibernate, SiGithub, SiSwift, SiFirebase, SiXcode, SiDjango, SiReact } from "react-icons/si";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const siteMetadata = {
  title: 'Devika Shendkar - Portfolio',
  description: 'Professional portfolio showcasing full-stack development projects and skills',
  author: 'Devika Shendkar',
  siteUrl: 'https://devika7300.github.io/portfolio/',
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
    description: "Built an event-driven data processing system using the PERN stack with WebSocket, improving real-time data processing. Optimized RESTful APIs with caching and load balancing for better reliability. Enhanced system architecture with AWS services while collaborating in an Agile environment.",
    skills: ["PostgreSQL", "Express", "React.js", "Node.js", "WebSocket", "AWS", "Agile"],
  },
  {
    title: "Application Development Associate",
    company: "Accenture",
    location: "Pune, IN",
    type: "Full-time",
    date: "2021 - 2022",
    description: "Spearheaded the development of a microservices-based inventory system using Spring Boot, React.js, and MongoDB, improving stock accuracy and automating operations across multiple locations. Migrated backend services to Azure Kubernetes Service (AKS), reducing downtime and integrating Apache Kafka for real-time updates. Managed the entire software development lifecycle, delivering the project two weeks ahead of schedule while optimizing costs.",
    skills: ["Java", "Spring boot", "React", "Azure Kubernetes Service(AKS)", "MongoDB", "Kafka", "REST API", "Jenkins"],
  },
  {
    title: "Software Developer",
    company: "Sigma Infosolutions Ltd.",
    location: "Bangalore, IN",
    type: "Full-time",
    date: "2019 - 2021",
    description: "Developed 3+ full-stack applications, improving scalability and engagement. Built an event management web app with Spring Boot and MySQL, optimizing API performance. Designed a CRM dashboard using React.js, Redux, and MongoDB for efficient data handling. Architected an e-commerce backend with Node.js and PayPal integration, ensuring reliable transactions. Improved CI/CD pipelines with Jenkins and Docker while enhancing security with Spring Security and JUnit testing.",
    skills: ["Java", "Spring boot", "React", "Node.js", "Express", "AWS", "MySQL", "MongoDB", "Docker", "Jenkins"],
  },
];

export const education = [
  {
    title: "Master of Science in Computer Science",
    institution: "Syracuse University",
    location: "Syracuse, NY",
    date: "2022 - 2024",
  },
  {
    title: "Bachelor of Engineering in Information Technology",
    institution: "University of Pune",
    location: "Pune, IN",
    date: "2017 - 2021",
  }
];

export const projects = [
  {
    id: 1,
    title: "TrustVault - Online Banking Platform",
    des: "An online banking platform that features secure account management, efficient fund transfers, and a real-time dashboard to enhance user decision-making across various devices.",
    img: "images/projects/project1.jpg",
    icons: [
      { icon: SiTypescript, color: "#3178C6" },  // TypeScript
      { icon: SiNextdotjs, color: "#000000" },  // Next.js
      { icon: SiChartdotjs, color: "#FF6384" },  // Chart.js
      { icon: SiTailwindcss, color: "#38B2AC" },  // Tailwind CSS
      { icon: FaMoneyCheckAlt, color: "#00FF94" },  // Plaid (Color is assumed as no official color is widely recognized)
      { icon: SiAppwrite, color: "#F02E65" },  // Appwrite
      { icon: FaExchangeAlt, color: "#FF7400" }  // Dwolla (Color is assumed as no official color is widely recognized)
    ],
    link: "https://github.com/devika7300/trustvault-app",
  },
  {
    id: 2,
    title: "TaskTrail - Project Management Application",
    des: "Developed a project management dashboard that supports light/dark mode, task tracking, assignment, and timeline management, enhancing collaboration and data integrity.",
    img: "images/projects/project2.png",
    icons: [
      { icon: SiNextdotjs, color: "#000000" },  // Next.js
      { icon: SiTypescript, color: "#3178C6" },  // TypeScript
      { icon: SiNodedotjs, color: "#339933" },  // Node.js
      { icon: SiExpress, color: "#000000" },  // Express.js (No official color, commonly represented in black)
      { icon: FaAws, color: "#FF9900" },  // Amazon Web Services (AWS)
      { icon: SiTailwindcss, color: "#38B2AC" },  // Tailwind CSS
      { icon: SiPostgresql, color: "#336791" },  // PostgreSQL
    ],
    
    link: "https://github.com/devika7300/project-management-tasktrail-app",
  },
  {
    id: 3,
    title: "Real-Time Movie Ticket Booking System",
    des: "Developed a web application using Django REST Framework and React TypeScript, featuring real-time seat availability updates, modular microservices architecture, and multithreaded operations for efficient concurrent booking management.",
    img: "images/projects/movie.jpg",
    icons: [
      { icon: SiDjango, color: "#092E20" },  // Django
      { icon: SiReact, color: "#61DAFB" },  // React
      { icon: SiTypescript, color: "#3178C6" },  // TypeScript
      { icon: SiFirebase, color: "#FFCA28" },  // Firebase
      { icon: FaStripeS, color: "#008CDD" }  // Stripe (Using Stripe S icon as there's no specific SiStripe)
  ],
    link: "https://github.com/devika7300/real-time-movie-ticket-booking-system",
  },
  {
    id: 4,
    title: "E-commerce Backend Application",
    des: " E-commerce app with functionalities such as product listings, categories, order processing, shopping carts, and user profiles which supports smooth scalability as business needs grow.",
    img: "images/projects/project3.png",
    icons: [
      { icon: SiSpring, color: "#6DB33F" },  // Spring Boot
      { icon: FaJava, color: "#007396" },  // Java
      { icon: SiPostman, color: "#FF6C37" },  // Postman
      { icon: SiPostgresql, color: "#336791" },  // PostgreSQL
      { icon: SiHibernate, color: "#59666C" },  // Hibernate (Assumed color, as no official color is widely recognized)
      { icon: SiGithub, color: "#181717" }  // GitHub
    ],
    
    link: "https://github.com/devika7300/Spring-boot-ecommerce-app",
  },
  // {
  //   id: 4,
  //   title: "Green Guardian - Automated Plant Care System",
  //   des: "Developed an IoT-based automated plant care system that monitors soil moisture and temperature, triggering automated watering.",
  //   img: "images/projects/project4.png",
  //   icons: [
  //     { icon: FaJava, color: "#007396" },  // Core Java
  //     { icon: FaCloud, color: "#0B2C4A" },  // Using a cloud icon for ThingSpeak
  //     { icon: FaAndroid, color: "#3DDC84" },  // Android Development
  //     { icon: FaMicrochip, color: "#E7352C" },  // Using a microchip icon for ESP32 Microcontrollers
  //     { icon: FaRaspberryPi, color: "#C51A4A" }   // ESP32 Microcontrollers (Espressif is the company behind ESP32, using the company color)
  //   ],
  //   link: "https://github.com/devika7300/Green-Gardian?tab=readme-ov-file",
  // },
  {
    id: 5,
    title: "Shift Management",
    des: "A web application that enables streamlined scheduling, real-time adjustments, and enhanced visibility into workforce allocation, thereby boosting overall operational efficiency and reducing labor costs.",
    img: "images/projects/project5.png",
    icons: [
      { icon: SiMysql, color: "#00758F" },  // MySQL
       { icon: SiPostman, color: "#FF6C37" },  // Postman
      { icon: SiSpringboot, color: "#6DB33F" },  // Spring Boot
      { icon: FaJava, color: "#007396" },  // Java
      { icon: FaTasks, color: "#0074D9" },  // Kanban (Using a tasks icon in a blue shade as a symbolic representation)
    ],
    link: "https://github.com/devika7300/Shift-Management",
  },
  {
    id: 6,
    title: "EvenToday: Event Planner",
    des: "This platform facilitates seamless collaboration among event organizers, vendors, and attendees, offering tools for scheduling, budget tracking, and real-time updates.",
    img: "images/projects/project6.png",
    icons: [
      { icon: SiSwift, color: "#F05138" },  // Swift (Programming Language)
      { icon: SiFirebase, color: "#FFCA28" },  // Firebase
      { icon: SiXcode, color: "#147EFB" },  // Xcode
      { icon: SiSwift, color: "#007ACC" },  // SwiftUI
    ],
    link: "https://github.com/devika7300/EvenToday",
  },
];
