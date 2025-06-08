import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 px-6 bg-primary text-light text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Partner with Us to Empower the African Child
        </h2>
        <p className="mb-6 text-light/90 text-md md:text-lg">
          Join hands with ACLF to nurture future leaders through impactful programs and community-building.
        </p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 text-lg font-semibold rounded-xl bg-light text-primary hover:bg-secondary hover:text-white transition-colors"
        >
          Get Involved
        </Link>
      </motion.div>
    </section>
  );
};

export default CTA;
