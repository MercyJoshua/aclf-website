import { motion } from "framer-motion";

const missionText = `To help African children develop the mindset and confidence to see themselves as problem-solvers, community leaders, and change agents, starting now.`;

const MissionSection = () => {
  const words = missionText.split(" ");

  return (
    <section className="relative rounded-md shadow-sm max-w-4xl mx-auto mt-10 px-6 sm:px-10 py-12 flex flex-col items-center  overflow-hidden">
      <motion.h3
        className="text-2xl sm:text-3xl font-bold text-primary text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        🎯 Our Mission
      </motion.h3>

      <p className="text-base sm:text-lg leading-relaxed text-justify text-gray-700 dark:text-gray-200 flex flex-wrap max-w-3xl">
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="mr-1 inline-block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
            }}
          >
            {word}
          </motion.span>
        ))}
      </p>
    </section>
  );
};

export default MissionSection;
