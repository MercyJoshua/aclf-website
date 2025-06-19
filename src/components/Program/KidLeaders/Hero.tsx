import { motion } from "framer-motion";
import { kidleadersContent } from "../../../data/kidleaders";

const Hero = () => {
    const { title, description } = kidleadersContent.intro;
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-6 py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/kidleaders/7.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center md:text-left max-w-4xl"
      >
         <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="text-md md:text-xl mb-10 text-light max-w-3xl text-justify mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {description}
      </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
