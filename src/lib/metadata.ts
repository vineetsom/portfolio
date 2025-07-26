import type { Metadata } from 'next';
import { FaReact, FaAws, FaMoneyCheckAlt, FaExchangeAlt, FaCloud, FaAndroid, FaMicrochip, FaRaspberryPi, FaTasks, FaStripeS } from "react-icons/fa";
import { FaJava } from 'react-icons/fa6';
import { SiSpringboot, SiMysql, SiTypescript, SiNextdotjs, SiChartdotjs, SiTailwindcss, SiAppwrite, SiNodedotjs, SiExpress, SiPostgresql, SiPrisma, SiSpring, SiPostman, SiHibernate, SiGithub, SiSwift, SiFirebase, SiXcode, SiDjango, SiReact } from "react-icons/si";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const siteMetadata = {
  title: 'Vineet Somwanshi - Portfolio',
  description: 'Professional portfolio showcasing full-stack development projects and skills',
  author: 'Vineet Somwanshi',
  siteUrl: 'https://your-portfolio-url.com/',
  twitterHandle: '@vsomwanshi',
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
          url: `${currentUrl}/images/profile1.png`,
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
      images: [`${currentUrl}/images/profile1.png`],
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
    title: "Fullstack Software Engineering Intern",
    company: "SeattleU Software Company",
    location: "Seattle, WA",
    type: "Internship",
    date: "06/2024 - Present",
    skills: ["Go", "React", "Gin", "Microservices", "Webhook", "Retry Mechanisms"],
  },
  {
    title: "Software Engineer",
    company: "Simplify Healthcare Pvt. Ltd.",
    location: "Pune, India",
    type: "Full-time",
    date: "07/2021 - 05/2023",
    skills: ["AWS DynamoDB", "AWS Lambda", "SQS", "EventBridge", "Step Functions", "S3", "RDS", "Microservices"],
  },
  {
    title: "Software Engineer Intern",
    company: "Vedang Infotech Pvt. Ltd.",
    location: "Pune, India",
    type: "Internship",
    date: "01/2020 - 06/2020",
    skills: ["Kafka", "AWS Lambda", "DynamoDB", "gRPC", "Prometheus", "Grafana", "AWS Lookout for Metrics"],
  },
];

export const education = [
  {
    title: "Master of Science in Computer Science",
    institution: "Seattle University",
    location: "Seattle, WA, USA",
    date: "09/2023 - 12/2025",
  },
  {
    title: "Bachelor of Technology in Computer Science",
    institution: "MIT World Peace University",
    location: "Pune, India",
    date: "06/2018 - 05/2021",
  }
];

export const projects = [
  {
    id: 1,
    title: "Artificial Neural Network-Based Chronic Disease Prediction",
    des: "Developed an ANN system for chronic disease prediction (anemia and hypertension) using image processing and hybrid SOM algorithms. Designed a user-friendly GUI for pathologists to streamline patient registration, blood image analysis, and automated reporting. Published research in IRJET and IJARESM journals.",
    img: "images/projects/project1.jpg",
    icons: [
      { icon: FaJava, color: "#007396" },
      // Add appropriate icon for C# or replace with a similar icon
      { icon: SiMysql, color: "#4479A1" },
    ],
    link: "https://github.com/vineetsom/ann-chronic-disease-prediction",
  },
  {
    id: 2,
    title: "Distributed Messaging and Consensus System",
    des: "Designed a distributed system combining Pub-Sub messaging, DHT for decentralized storage, and Bully Algorithm for leader election. Secured tamper-proof logs using Blockchain.",
    img: "images/projects/project2.png",
    icons: [
      { icon: SiMysql, color: "#4479A1" },
      { icon: FaJava, color: "#007396" },
      // Add appropriate icon for Blockchain or replace with a similar icon
    ],
    link: "https://github.com/vineetsom/distributed-messaging-consensus",
  },
];
