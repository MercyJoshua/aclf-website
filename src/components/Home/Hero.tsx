import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-6 py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/hero-alt.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark bg-opacity-60 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center md:text-left max-w-4xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-light mb-6 leading-tight drop-shadow-lg">
          African Child Leadership Foundation (ACLiF)
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-secondary font-medium mb-8 drop-shadow-md">
          Building A Sustainable Future, One Child At A Time
        </p>

        <Link
          to="/Program"
          className="inline-block px-8 py-4 rounded-full bg-primary text-light font-semibold text-lg hover:bg-secondary hover:text-light transition-colors"
        >
          Explore Our Work
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
