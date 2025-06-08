// src/components/About/MissionVision.tsx

import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

const cards = [
  {
    title: "Our Mission",
    icon: <FaBullseye size={28} className="text-secondary" />,
    description:
      "To raise confident, ethical, and visionary young leaders by nurturing their potential through transformative programs and support systems.",
  },
  {
    title: "Our Vision",
    icon: <FaEye size={28} className="text-secondary" />,
    description:
      "A continent where every child is empowered with leadership, character, and creativity to influence their world positively.",
  },
  {
    title: "Our Core Values",
    icon: <FaHeart size={28} className="text-secondary" />,
    description:
      "Integrity, Compassion, Curiosity, Excellence, and Service are the values that guide everything we do.",
  },
];

const MissionVision = () => {
  return (
    <section className="w-full py-16 px-6 bg-white dark:bg-zinc-900 transition-colors">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">Mission, Vision & Core Values</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="p-6 rounded-2xl shadow-md bg-light dark:bg-dark text-primary"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
