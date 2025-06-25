import { motion } from "framer-motion";
import { kidleadersContent } from "../../../data/kidleaders";

const ResearchSection = () => {
  const { paragraphs, bold } = kidleadersContent.research;

  return (
    <section className="mt-16 px-4 max-w-5xl mx-auto space-y-6">
      {/* Image before title */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/kidleaders/11.jpg" 
          alt="Research illustration"
          className="w-full max-w-3xl h-48 sm:h-64 md:h-80 lg:h-[22rem] object-cover rounded-xl shadow-md"
        />
      </motion.div>

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
          className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-justify"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          {text}
        </motion.p>
      ))}

      <motion.p
        className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-primary text-justify leading-relaxed"
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
