import { motion } from "framer-motion";
import { kidleadersContent } from "../../../data/kidleaders";

const ResearchSection = () => {
  const { paragraphs, bold } = kidleadersContent.research;

  return (
    <section className="mt-16 px-4 max-w-5xl mx-auto space-y-6">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-secondary mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🔬 Backed by Research
      </motion.h2>

      {paragraphs.map((text, i) => (
        <motion.p
          key={i}
          className="text-sm leading-relaxed text-justify"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          {text}
        </motion.p>
      ))}

      <motion.p
        className="text-sm font-bold text-primary text-justify leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: paragraphs.length * 0.2 }}
      >
        {bold}
      </motion.p>
    </section>
  );
};

export default ResearchSection;
