import { motion } from "framer-motion";

const missionText = `To help African children develop the mindset and confidence to see themselves as problem-solvers, community leaders, and change agents, starting now.`;

const MissionSection = () => {
  const words = missionText.split(" ");

  return (
    <section className="relative rounded-lg shadow-lg max-w-4xl mx-auto mt-12 px-6 sm:px-10 py-16 flex flex-col items-center overflow-hidden bg-white dark:bg-gray-900">
      {/* Decorative Image Top Left */}
      <div className="absolute top-0 left-0 w-32 sm:w-40 h-32 sm:h-40 rounded-full overflow-hidden shadow-md">
        <img
          src="/think4impact/6.jpg"
          alt="Decorative Top Left"
          className="w-full h-full object-cover"
        />

        {/* Overlay for mobile */}
        <div className="absolute inset-0 bg-black/40 sm:bg-transparent" />
      </div>

      {/* Decorative Image Bottom Right */}
      <div className="absolute bottom-0 right-0 w-32 sm:w-40 h-32 sm:h-40 rounded-full overflow-hidden shadow-md">
        <img
          src="/think4impact/2.jpg"
          alt="Decorative Bottom Right"
          className="w-full h-full object-cover"
        />

        {/* Overlay for mobile */}
        <div className="absolute inset-0 bg-black/40 sm:bg-transparent" />
      </div>

      {/* Mission Heading */}
      <motion.h3
        className="text-2xl sm:text-3xl font-bold text-primary text-center mb-6 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        🎯 Our Mission
      </motion.h3>

      {/* Mission Text word-by-word */}
      <p className="text-base sm:text-lg leading-relaxed text-justify text-gray-700 dark:text-gray-200 flex flex-wrap max-w-xl relative z-10">
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="mr-1 inline-block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
