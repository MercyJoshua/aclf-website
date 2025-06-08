import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="py-20 px-6 bg-light dark:bg-dark transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          Empowering Young Minds
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300 text-md md:text-lg leading-relaxed">
          Through a range of transformative programs, the African Child Leadership Foundation equips children and their families with leadership skills, emotional intelligence, and real-world tools to shape their future with confidence.
        </p>
      </motion.div>
    </section>
  );
};

export default Intro;
