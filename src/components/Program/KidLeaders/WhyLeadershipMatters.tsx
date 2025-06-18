import { kidleadersContent } from "../../../data/kidleaders";
import { motion } from "framer-motion";

const glowColors = [
  "#6c2c8d", // primary
  "#db2487", // secondary
  "#fbb040", // yellow/orange
  "#8dc63f", // green
  "#00a79d", // teal
  "#ffd700", // gold
  "#ff69b4", // hot pink
  "#40e0d0", // turquoise
];

const WhyLeadershipMatters = () => {
  const { heading, items } = kidleadersContent.leadershipMatters;

  return (
    <section className="mt-12 px-4">
      <h2 className="font-bold text-2xl sm:text-3xl text-secondary mb-6 text-center">
        {heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {items.map((item, index) => {
          const color = glowColors[index % glowColors.length];
          return (
            <motion.div
              key={item}
              className="text-base sm:text-lg font-semibold text-center rounded-lg px-4 py-2"
              style={{
                color,
                textShadow: `0 0 6px ${color}`,
              }}
              animate={{
                textShadow: [
                  `0 0 4px ${color}`,
                  `0 0 10px ${color}`,
                  `0 0 4px ${color}`,
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
                delay: (index % 3) * 0.5,
              }}
            >
              {item}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyLeadershipMatters;
