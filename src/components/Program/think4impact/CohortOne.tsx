import { motion } from "framer-motion";

const participants = [
  {
    name: "Daniella Ebom",
    image: "/dreamlead/daniella.avif",
    position: "1st Place, Project Think4Impact 1.0",
    project: "Daniella carried out a project in her community, Ruomigbo, Rivers, Nigeria.",
  },
  {
    name: "David Hanniel",
    image: "/dreamlead/david.avif",
    position: "2nd Place, Project Think4Impact 1.0",
    project: "David led a project to solve crises and disputes in her school.",
  },
  {
    name: "Emmanuel Favour",
    image: "/dreamlead/favour.avif",
    position: "3rd Place, Project Think4Impact 1.0",
    project: "Emmanuel focused on addressing illiteracy in underserved areas.",
  },
];

const CohortOne = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-primary mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        Cohort 1 – Project Think4Impact 1.0
      </motion.h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {participants.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {p.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-2">
                {p.position}
              </p>
              <p className="text-gray-700 dark:text-slate-300 text-sm mb-4 flex-grow">
                {p.project}
              </p>
              <a
                href="#"
                className="text-sm font-semibold text-primary hover:underline mt-auto"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CohortOne;
