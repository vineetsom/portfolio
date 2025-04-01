'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { CardHoverEffect } from '../ui/card-hover-effect';
import { useTheme } from 'next-themes';

export default function Contact() {
  const email = "devikashendkar7@gmail.com";
  const phone = "+1 (315) 288 6282";
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="contact" className="py-24 relative bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <CardHoverEffect className={`${
            isDark 
              ? '!bg-gradient-to-br !from-neutral-900/50 !to-neutral-800/50'
              : '!bg-gradient-to-br !from-white/5 !to-white/10'
          } backdrop-blur-sm !border-0 shadow-lg`}>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email */}
                <div className="text-center">
                  <FaEnvelope className="w-10 h-10 mx-auto mb-4 text-violet-500 dark:text-violet-400" />
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
                    Email
                  </p>
                  <p className="text-lg font-medium text-neutral-900 dark:text-white mb-6">
                    {email}
                  </p>
                  <motion.a
                    href={`mailto:${email}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg ${
                      isDark
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500'
                        : 'bg-violet-500 hover:bg-violet-700'
                    } text-white transition-all duration-200 font-medium`}
                  >
                    Mail Me
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>

                {/* Phone */}
                <div className="text-center">
                  <FaPhone className="w-10 h-10 mx-auto mb-4 text-violet-500 dark:text-violet-400" />
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
                    Phone
                  </p>
                  <p className="text-lg font-medium text-neutral-900 dark:text-white mb-6">
                    {phone}
                  </p>
                  <motion.a
                    href={`tel:${phone.replace(/\D/g, '')}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg ${
                      isDark
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500'
                        : 'bg-violet-500 hover:bg-violet-700'
                    } text-white transition-all duration-200 font-medium`}
                  >
                    Call Me
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </div>
            </div>
          </CardHoverEffect>
        </motion.div>
      </div>
    </section>
  );
}

