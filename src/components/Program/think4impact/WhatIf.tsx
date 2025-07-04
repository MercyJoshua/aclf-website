import { motion } from "framer-motion";

const paragraphs = [
  "What if we didn’t wait until young people became adults to train them in leadership, critical thinking, and innovation?",
  "What if we helped them develop the mindset, values, and practical skills to lead while they’re still forming their identity?",
  "That’s the heart of Project Think4Impact Africa: Building future generations of problem-solvers and innovative thinkers with a focus on making a positive impact in their communities, in their formative years.",
];

const WhatIfSection = () => {
  return (
    <section className="relative mt-10  mx-auto px-6 sm:px-10 py-12 max-w-4xl overflow-hidden space-y-8">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-primary mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        What If Leadership Didn’t Start in Adulthood?
      </motion.h2>

      <div className="space-y-8">
        {paragraphs.map((text, index) => (
          <motion.p
            key={index}
            className="text-base sm:text-lg lg:text-xl leading-relaxed text-justify"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default WhatIfSection;
