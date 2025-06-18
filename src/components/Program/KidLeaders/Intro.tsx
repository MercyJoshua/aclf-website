import { motion } from "framer-motion";
import { kidleadersContent } from "../../../data/kidleaders";

const orbitColors = [
  "#6c2c8d", // primary
  "#db2487", // secondary
  "#fbb040", // yellow/orange
  "#8dc63f", // green
  "#00a79d", // teal
  "#ffd700", // gold
  "#ff69b4", // hot pink
  "#40e0d0", // turquoise
];

const AboutSection = () => {
  const { title, body, skills, closing } = kidleadersContent.about;

  return (
    <section className="relative mt-8 sm:mt-12 py-12 sm:py-16 lg:py-20 bg-light dark:bg-dark text-primary dark:text-light overflow-hidden">
      <motion.div
        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-5xl mx-auto text-justify">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-secondary text-center">{title}</h2>
          {body.map((para, i) => (
            <p className="text-sm sm:text-base  lg:text-lg xl:text-xl mt-8 sm:mt-12 leading-relaxed" key={i}>
              {para}
            </p>
          ))}
        </div>

     {/* Skills Grid Section */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-4xl mx-auto my-12 px-2">
  {skills.map((skill, index) => (
    <motion.div
      key={skill}
      className="w-full aspect-square rounded-xl border-2 dark:text-white light:text-dark font-semibold flex items-center justify-center text-center text-sm sm:text-base lg:text-sm shadow-md"
      style={{
        borderColor: orbitColors[index % orbitColors.length],
        boxShadow: `0 0 12px ${orbitColors[index % orbitColors.length]}`,
      }}
      animate={{
        y: [0, -8, 0], 
        boxShadow: [
          `0 0 8px ${orbitColors[index % orbitColors.length]}`,
          `0 0 18px ${orbitColors[index % orbitColors.length]}`,
          `0 0 8px ${orbitColors[index % orbitColors.length]}`,
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
        delay: (index % 2 === 0 ? 0 : 1), 
      }}
    >
      {skill}
    </motion.div>
  ))}
</div>


        <div className="max-w-5xl mx-auto ">
          <p className="text-sm sm:text-base text-justify lg:text-lg xl:text-xl mt-8 sm:mt-12 leading-relaxed">{closing}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
