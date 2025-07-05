import { motion } from "framer-motion";

const paragraphs = [
  `We use a simplified Design Thinking approach and project-based learning to guide participants from “What bothers me?” to “What can I do about it?”`,
  `More than just a project, they leave with a lived experience of leadership — one that becomes a springboard for the rest of their lives.`,
  `By the end of the program, each participant executes a mini social impact project that addresses a real issue in their home, school, or community.`,
  `They also access a 4-week follow-up mentorship or workshop session to sharpen their skills and position them better for the future.`,
];

const HowWeDoItSection = () => {
  return (
    <section className="relative rounded-md shadow-sm max-w-4xl mx-auto mt-10 px-6 sm:px-10 py-12 space-y-8 overflow-hidden">
      <motion.h3
        className="text-2xl sm:text-3xl font-bold text-primary text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
      >
        🛠 How We Do It
      </motion.h3>

      {paragraphs.map((para, i) => {
        const direction = i % 2 === 0 ? -30 : 30; // Alternate left/right slide

        return (
          <motion.p
            key={i}
            className="text-base sm:text-lg leading-relaxed text-justify text-gray-700 dark:text-gray-200"
            initial={{ opacity: 0, x: direction }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          >
            {para}
          </motion.p>
        );
      })}
    </section>
  );
};

export default HowWeDoItSection;
