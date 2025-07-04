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
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto list-none">
        {items.map((item, index) => (
          <motion.li
            key={item}
            className="flex items-start gap-3 text-base sm:text-lg font-semibold text-left dark:text-light rounded-lg px-4 py-2"
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
              delay: (index % 3) * 0.5,
            }}
          >
            {/* Example icon from react-icons */}
            <span className="mt-1 text-primary">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7.629 15.707a1 1 0 0 1-1.415 0l-4.243-4.243a1 1 0 1 1 1.415-1.415l3.536 3.535 7.778-7.778a1 1 0 1 1 1.415 1.415l-8.486 8.486z"/>
              </svg>
            </span>
            {item}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default WhyLeadershipMatters;
