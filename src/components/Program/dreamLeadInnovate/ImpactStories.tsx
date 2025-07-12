import { motion } from "framer-motion";

const ImpactStories = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
            Impact Stories
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-justify mb-4">
            Through Project Think4Impact, Africa we have seen children transform from struggling learners to confident problem-solvers. They’ve built solutions for their communities and discovered their unique abilities to lead change.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-justify ">
            Meet some of our young leaders who are already making a difference through our program. From solving sanitation issues in their communities to spearheading educational campaigns, these children are proof that leadership starts young.
          </p>
        </motion.div>

        {/* Image Card */}
        <motion.div
          className="w-full overflow-hidden rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/dreamlead/2.avif"
            alt="Young leaders making a difference"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStories;
