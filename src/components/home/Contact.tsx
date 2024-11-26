'use client';

import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const email = "devikashendkar@gmail.com";

  return (
    <section id="contact" className="py-24 relative bg-gradient-to-b from-white to-neutral-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-8 text-center">
            <FaEnvelope className="w-12 h-12 mx-auto mb-4 text-violet-500" />
            <p className="text-lg text-neutral-600 mb-4">
              Drop me a line at
            </p>
            <p className="text-xl font-medium text-neutral-900 mb-6">
              {email}
            </p>
            <motion.a
              href={`mailto:${email}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-violet-500 text-white hover:bg-violet-700 transition-colors duration-200 font-medium"
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
        </motion.div>
      </div>
    </section>
  );
}
