import { motion } from "framer-motion";

// Helper to split a paragraph into words for word-by-word animation
const fadeInWords = (text: string) => {
  return text.split("''").map((word, i) => (
    <motion.span
      key={i}
      className="inline-block"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: i * 0.05,
      }}
    >
      {word}{" "}
    </motion.span>
  ));
};

const impactPoints = [
  "🌱 Early Impact: We start with children because that’s when identity, confidence, and mindset are formed.",
  "👐 Hands-on Learning: Children become the owners, feelers, and thinkers of each lesson.",
  "🏘 Community-based: Projects are tied directly to local needs, not foreign models. Each activity is low-cost and ecosystem-friendly.",
  "🌍 Global Relevance: Participants learn about the UN Sustainable Development Goals (SDGs) and connect their projects to the goals.",
  "🧩 Build Essential Skills: Children build teamwork, critical thinking, and problem-solving skills often left out in traditional settings.",
  "🚀 Scalable Design: Our curriculum is simple, replicable, and ready to roll out across Africa.",
];

const ImpactfulSection = () => (
  <section className=" max-w-4xl mt-10  mx-auto px-6 sm:px-10 py-12 rounded-md shadow-sm space-y-8">
    <motion.h3
      className="text-2xl sm:text-3xl font-bold text-primary text-center"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      What Makes This Program Impactful?
    </motion.h3>

    <ul className="space-y-4">
      {impactPoints.map((point, index) => {
        const direction = index % 2 === 0 ? -50 : 50;
        return (
          <motion.li
            key={index}
            className="text-base sm:text-lg leading-relaxed text-justify flex"
            initial={{ opacity: 0, x: direction }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2 + 0.3,
            }}
          >
            {point}
          </motion.li>
        );
      })}
    </ul>

    <p className="text-base sm:text-lg text-justify text-secondary/60">
      {fadeInWords(
        "Through  this program, we are actively preparing young Africans for a life of civic responsibility, entrepreneurship, and community transformation."
      )}
    </p>
  </section>
);

export default ImpactfulSection;
