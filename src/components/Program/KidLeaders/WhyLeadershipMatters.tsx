import { kidleadersContent } from "../../../data/kidleaders";
import { motion } from "framer-motion";


const WhyLeadershipMatters = () => {
  const { heading, items } = kidleadersContent.leadershipMatters;

  return (
    <section className="mt-12 px-4">
      <h2 className="font-bold text-2xl sm:text-3xl text-secondary mb-6 text-center">
        {heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {items.map((item, index) => {
          return (
            <motion.div
              key={item}
              className="text-base sm:text-lg font-semibold text-left light:text-secondary  rounded-lg px-4 py-2"
             
              animate={{
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
