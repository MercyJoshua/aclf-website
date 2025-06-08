
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="w-full py-20 px-6 bg-light dark:bg-dark transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-2xl md:text-4xl font-bold text-primary mb-4">
          Who We Are
        </h1>
        <p className="text-md md:text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
          The African Child Leadership Foundation (ACLF) is committed to shaping the future of Africa through the minds and hearts of its children. We empower young people between the ages of 5 to 18 with leadership, values, and practical life skills to become change-makers in their communities.
        </p>
      </motion.div>
    </section>
  );
};

export default Intro;
