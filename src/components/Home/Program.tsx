import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaUsers, FaTools, FaComments } from "react-icons/fa";

const programs = [
  {
    title: "Leadership Conferences",
    icon: <FaChalkboardTeacher size={28} />,
    description:
      "Interactive sessions to build leadership confidence, decision-making, and emotional intelligence.",
  },
  {
    title: "Skills Acquisition",
    icon: <FaTools size={28} />,
    description:
      "Workshops that teach practical skills including creativity, problem solving, and teamwork.",
  },
  {
    title: "Personal Growth",
    icon: <FaUsers size={28} />,
    description:
      "Mentorship, self-awareness training, and emotional development for young minds.",
  },
  {
    title: "Parent & Expert Talk Shows",
    icon: <FaComments size={28} />,
    description:
      "Biweekly conversations with parents and professionals to guide children’s growth and behavior.",
  },
];

const Program = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-zinc-900 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">Our Programs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const direction = index % 2 === 0 ? -40 : 40; 
            return (
              <motion.div
                key={program.title}
                className="p-6 rounded-2xl shadow-md bg-light dark:bg-dark text-primary"
                initial={{ opacity: 0, y: direction }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.4 }} 
              >
                <div className="flex justify-center mb-4 text-secondary">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">{program.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Program;
