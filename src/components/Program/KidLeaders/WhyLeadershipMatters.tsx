import { kidleadersContent } from "../../../data/kidleaders";
import { motion } from "framer-motion";

const WhyLeadershipMatters = () => {
  const { heading, paragraph, items } = kidleadersContent.leadershipMatters;

  return (
    <section className="mt-16 px-4 max-w-5xl mx-auto space-y-6">
        {/* Image Section */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/kidleaders/9.jpg" 
          alt="Why Leadership Matters"
          className="w-full max-w-4xl h-48 sm:h-64 md:h-80 object-cover rounded-xl shadow-md"
        />
      </motion.div>
      <h2 className="font-bold text-2xl sm:text-3xl text-secondary mb-6 text-center">
        {heading}
      </h2>

     <motion.p
          className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-justify"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5,}}
        >{paragraph}</motion.p>

<motion.h2
  className="text-xl sm:text-lg font-semibold text-center text-primary mt-8 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5,}}
>At KidLeaders Fun Lab, children learn to: 
</motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={item}
            className="text-base sm:text-lg font-semibold text-left dark:text-light rounded-lg px-4 py-2"
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
              delay: (index % 3) * 0.5,
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyLeadershipMatters;
