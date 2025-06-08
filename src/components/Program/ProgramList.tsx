import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaTools, FaUsers, FaComments } from "react-icons/fa";

const programs = [
  {
    title: "Leadership Conferences",
    icon: <FaChalkboardTeacher size={28} />,
    description:
      "Quarterly conferences that foster leadership, teamwork, problem-solving, and confidence in children aged 5–18.",
  },
  {
    title: "Skills Acquisition",
    icon: <FaTools size={28} />,
    description:
      "Hands-on workshops on arts, crafts, digital literacy, entrepreneurship, and technical skills to build self-reliance.",
  },
  {
    title: "Personal Growth Programs",
    icon: <FaUsers size={28} />,
    description:
      "One-on-one and group mentorship, emotional intelligence training, and self-awareness sessions to guide holistic growth.",
  },
  {
    title: "Parent & Expert Talk Shows",
    icon: <FaComments size={28} />,
    description:
      "Biweekly sessions with psychologists, educators, and parents that address cultural patterns, parenting challenges, and behavioral awareness.",
  },
];

const ProgramList = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-zinc-900 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
          Program Highlights
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="bg-light dark:bg-zinc-800 text-primary rounded-2xl p-6 shadow-[0_0_15px_#b6127e66] dark:shadow-[0_0_20px_#b6127e88] hover:shadow-[0_0_30px_#b6127eaa] transition-all duration-300 animate-pulse-glow"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 text-secondary">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProgramList;
