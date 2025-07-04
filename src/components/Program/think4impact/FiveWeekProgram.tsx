import { motion } from "framer-motion";

const steps = [
  { icon: "🔍", text: "See the Problem – What needs to change in my community? What SDG can I contribute to?" },
  { icon: "💚", text: "Understand People – Who is affected? What do they feel and need?" },
  { icon: "🧪", text: "Think of Ideas – What can we do with what we have?" },
  { icon: "🧩", text: "Test It Out – Let’s execute a community project with our solution." },
  { icon: "📣", text: "Share – What difference did we make? What did I learn?" },
];

const FiveWeekProgramSection = () => {
  return (
    <section className="relative rounded-md shadow-sm max-w-4xl mx-auto mt-10 px-6 sm:px-10 py-12 space-y-8">
      <motion.h3
        className="text-2xl sm:text-3xl font-bold text-primary text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our 5-week Program guides children to:
      </motion.h3>

      <ul className="space-y-4">
        {steps.map((step, index) => {
          const direction = index % 2 === 0 ? -50 : 50;

          return (
            <motion.li
              key={index}
              className="flex items-start text-base sm:text-lg leading-relaxed text-justify"
              initial={{ opacity: 0, x: direction }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2 + 0.3,
              }}
            >
              <span className="mr-3 text-2xl">{step.icon}</span>
              <span>{step.text}</span>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default FiveWeekProgramSection;
