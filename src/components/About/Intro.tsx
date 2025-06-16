
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
          ABOUT
        </h1>
        <p className="text-md md:text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
          
The ACLiF is committed to equipping children, youths, and girls with Leadership, design-thinking, and problem-solving skills—while shaping their mindset to see think, and act like the leaders they are becoming
        </p>
      </motion.div>
    </section>
  );
};

export default Intro;
