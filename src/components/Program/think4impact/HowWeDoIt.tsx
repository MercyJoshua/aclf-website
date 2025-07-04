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
        transition={{ duration: 0.7 }}
      >
        🛠 How We Do It
      </motion.h3>

      {paragraphs.map((para, i) => {
        const words = para.split(" ");
        const direction = i % 2 === 0 ? -50 : 50; // Alternate left/right

        return (
          <p
            key={i}
            className="text-base sm:text-lg leading-relaxed text-justify flex flex-wrap"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="mr-1 inline-block"
                initial={{ opacity: 0, x: direction }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05 + i * 0.2, // Stagger each word & paragraph
                }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        );
      })}
    </section>
  );
};

export default HowWeDoItSection;
