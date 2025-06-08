import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full py-16 px-6 bg-white dark:bg-zinc-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">We’d Love to Hear From You</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-300">
          Whether you have questions, ideas, want to volunteer, or partner with us — we’re just a message away.
        </p>
      </div>
    </motion.section>
  );
};

export default Intro;
