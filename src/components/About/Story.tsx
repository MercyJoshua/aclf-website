// src/components/About/Story.tsx

import { motion } from "framer-motion";

const Story = () => {
  return (
    <section className="w-full py-20 px-6 bg-light dark:bg-dark transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Story</h2>
          <p className="text-zinc-700 dark:text-zinc-300 text-sm md:text-lg leading-relaxed">
            African Child Leadership Foundation (ACLF) was founded with a deep passion for nurturing future leaders from a young age. It began as a simple idea — to create a space where children could be seen, heard, and guided with intention. From holding small community sessions to now organizing full-scale leadership conferences and talk shows, ACLF has remained rooted in its mission to shape tomorrow’s trailblazers today.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <img
            src="/gallery/2.png" 
            alt="ACLF Story"
            className="rounded-2xl shadow-md w-full object-cover max-h-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
