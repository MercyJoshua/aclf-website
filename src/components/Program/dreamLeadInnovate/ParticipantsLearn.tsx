import { motion } from "framer-motion";
import { Star } from "lucide-react";

const learnPoints = [
  "The roadmaps to a life of value",
  "The power of internal and external environment",
  "How to build their internal environment suitable to power their development",
  "How to design their future through vision boards",
  "Actionable steps and habits to live a life of personal leadership, value, and impact",
  "How to take action as an impactful Leader today",
  "How to build sustainable systems to achieve goals",
];

const ParticipantsLearn = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 sm:px-10 py-16 space-y-10">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-primary text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        Participants Will Learn
      </motion.h2>

      <ul className="space-y-4">
        {learnPoints.map((point, index) => (
          <motion.li
            key={index}
            className="flex items-start text-base sm:text-lg leading-relaxed text-justify"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="mt-1 mr-3 text-primary">
              <Star className="w-5 h-5" fill="currentColor" />
            </span>
            <span>{point}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ParticipantsLearn;
