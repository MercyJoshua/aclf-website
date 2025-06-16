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
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">WHAT WE BELIEVE
</h2>
          <p className="text-zinc-700 dark:text-zinc-300 text-sm md:text-lg leading-relaxed">
            We believe sustainable development starts with children. They are not just the future—they are the foundation. Leadership does not begin in adulthood; it’s shaped in childhood through the right guidance, tools, and experiences. That’s why we design practical, age-appropriate programs that teach children empathy, innovation, and problem-solving—skills they need to grow into responsible, impact-driven leaders. When we invest early, we don’t just change a child’s life, we transform the future of communities.
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
            src="/gallery/8.jpg" 
            alt="ACLF Story"
            className="rounded-2xl shadow-md w-full object-cover max-h-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
