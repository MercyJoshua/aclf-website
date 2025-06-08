import { motion } from "framer-motion";
import colors from "../../theme/colors";

const Intro = () => {
  return (
    <section className="px-6 py-20 bg-white dark:bg-zinc-900 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2
          className="text-4xl md:text-5xl font-bold text-primary mb-6"
          style={{ textShadow: `0 0 8px ${colors.secondary}66` }}
        >
          Moments That Matter
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
          Every child’s smile, every gathering, every heartfelt conversation — they’re all part
          of the story we’re telling. These photos capture the impact of our work across
          communities, nations, and lives. Take a look at some of the moments we’ll never forget.
        </p>
      </motion.div>
    </section>
  );
};

export default Intro;
