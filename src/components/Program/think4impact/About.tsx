import { motion } from "framer-motion";


const aboutText = `Project Think4Impact, Africa is an intermediate leadership program designed to help children ages 12–15 develop essential skills by guiding them to identify and solve problems in their communities using a design-thinking approach.`;

const AboutSection = () => {
  const words = aboutText.split(" ");

  return (
    <section className="relative rounded-md shadow-sm max-w-4xl mx-auto mt-10 px-6 sm:px-10 py-12 flex flex-col md:flex-row items-stretch gap-8 overflow-hidden">

      {/* Image Container */}
      <div className="w-full md:w-1/2 flex justify-center items-stretch">
      <div className="relative w-full md:h-96 rounded-xl overflow-hidden shadow-md flex flex-col h-full">
        <img
        src="/gallery/9.jpg" 
        alt="Project Think4Impact"
        className="w-full h-full object-cover"
        />
      </div>
      </div>

      {/* Text Container */}
      <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-center">
      <motion.h3
        className="text-2xl sm:text-3xl font-bold text-primary"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        ABOUT
      </motion.h3>

      <p className="text-xl sm:text-lg leading-relaxed text-center flex flex-wrap">
        {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-1 inline-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
          duration: 0.3,
          delay: index * 0.05,
          }}
        >
          {word}
        </motion.span>
        ))}
      </p>
      </div>
    </section>
  );
};

export default AboutSection;
