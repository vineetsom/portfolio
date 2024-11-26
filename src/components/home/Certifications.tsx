'use client';

import { motion } from 'framer-motion';
import MagicButton from '../ui/MagicButton';
import { CardHoverEffect } from '../ui/card-hover-effect';

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    subtitle: "Amazon Web Services",
    date: "Jan 2024",
    link: "https://www.credly.com/badges/example"
  },
  {
    title: "Professional Scrum Master I",
    subtitle: "Scrum.org",
    date: "Dec 2023",
    link: "https://www.scrum.org/certificates/example"
  },
  {
    title: "Microsoft Azure Fundamentals",
    subtitle: "Microsoft",
    date: "Nov 2023",
    link: "https://learn.microsoft.com/certifications/example"
  },
  {
    title: "Google Cloud Professional Data Engineer",
    subtitle: "Google Cloud",
    date: "Oct 2023",
    link: "https://www.credential.net/example"
  },
  {
    title: "Databricks Certified Associate Developer",
    subtitle: "Databricks",
    date: "Sep 2023",
    link: "https://credentials.databricks.com/example"
  },
  {
    title: "Snowflake SnowPro Core",
    subtitle: "Snowflake",
    date: "Aug 2023",
    link: "https://www.snowflake.com/certifications/example"
  },
  {
    title: "Apache Kafka Certification",
    subtitle: "Confluent",
    date: "Jul 2023",
    link: "https://www.confluent.io/certification/example"
  },
  {
    title: "MongoDB Certified Developer",
    subtitle: "MongoDB",
    date: "Jun 2023",
    link: "https://university.mongodb.com/certification/example"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 relative bg-gradient-to-b from-white to-neutral-50 dark:from-black dark:to-neutral-950">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardHoverEffect className="!bg-gradient-to-br !from-white/5 !to-white/10 dark:!from-neutral-900/50 dark:!to-neutral-800/50 backdrop-blur-sm !border-0 shadow-lg">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg bg-gradient-to-r from-neutral-900 via-violet-600 to-violet-400 dark:from-white dark:via-violet-400 dark:to-violet-200 bg-clip-text text-transparent">
                      {cert.title}
                    </h3>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 whitespace-nowrap ml-4">
                      {cert.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {cert.subtitle}
                    </p>
                    <MagicButton 
                      title="View Credentials"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      }
                      position="right"
                      handleClick={() => window.open(cert.link, '_blank')}
                      otherClasses="h-8 text-xs"
                    />
                  </div>
                </div>
              </CardHoverEffect>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
