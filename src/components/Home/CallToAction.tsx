import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToAction = () => (
  <section className="py-16 px-6 bg-primary text-white text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Join Us in Building Future Leaders</h2>
      <p className="mb-6 text-md md:text-lg">
        Become a part of our mission — whether you’re a parent, volunteer, or educator, there’s a place for you.
      </p>
      <Link
        to="/Contact"
        className="bg-secondary hover:bg-white hover:text-primary text-white font-medium px-6 py-3 rounded-full transition"
      >
        Get Involved
      </Link>
    </motion.div>
  </section>
);

export default CallToAction;
