'use client';

import { motion } from 'framer-motion';
import { useFormValidation } from '../../hooks/useFormValidation';

export default function Contact() {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFormValidation({
    name: '',
    email: '',
    message: '',
  });

  const onSubmit = async (formData: typeof values) => {
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 relative bg-gradient-to-b from-white to-neutral-50 dark:from-black dark:to-neutral-950">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Let&apos;s discuss your next project and bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg dark:shadow-none border border-neutral-200 dark:border-neutral-800 p-8">
            <form 
              onSubmit={(e) => handleSubmit(e, onSubmit)}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-neutral-700 dark:text-neutral-300 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg",
                    "bg-neutral-50 dark:bg-neutral-800",
                    "border border-neutral-200 dark:border-neutral-700",
                    "focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500",
                    "focus:border-transparent dark:focus:border-transparent",
                    "transition duration-200",
                    errors.name ? 'border-red-500 dark:border-red-500' : ''
                  )}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-neutral-700 dark:text-neutral-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg",
                    "bg-neutral-50 dark:bg-neutral-800",
                    "border border-neutral-200 dark:border-neutral-700",
                    "focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500",
                    "focus:border-transparent dark:focus:border-transparent",
                    "transition duration-200",
                    errors.email ? 'border-red-500 dark:border-red-500' : ''
                  )}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-neutral-700 dark:text-neutral-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  rows={4}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg",
                    "bg-neutral-50 dark:bg-neutral-800",
                    "border border-neutral-200 dark:border-neutral-700",
                    "focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-500",
                    "focus:border-transparent dark:focus:border-transparent",
                    "transition duration-200",
                    errors.message ? 'border-red-500 dark:border-red-500' : ''
                  )}
                  placeholder="Your message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "w-full py-3 px-6 rounded-lg",
                  "bg-neutral-900 dark:bg-white",
                  "text-white dark:text-neutral-900",
                  "hover:bg-neutral-800 dark:hover:bg-neutral-100",
                  "transition-all duration-200",
                  "font-medium",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Utility function for class names
const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};
