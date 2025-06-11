"use client";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaUsers, FaTools, FaComments } from "react-icons/fa";
import { useState } from "react";

const programs = [
  {
    title: "KidLeaders Fun Lab (Ages 12 below)",
    icon: <FaChalkboardTeacher size={28} />,
    description:
      "This Program track Helps kids develop leadership qualities through play, storytelling, and Creativity-based Methods. Through play, Children learn vital leadership skills like teamwork, critical thinking, cooperation, problem-solving, etc influencing their lives and community members and future Leaders",
  },
  {
    title: "Project Think4Impact, Africa (Ages 13-15)",
    icon: <FaTools size={28} />,
    description:
      "Project Think4Impact, Africa This flagship initiative introduces children aged 13–15 to design-thinking and problem-solving techniques. Over 5 weeks, participants gain hands-on experience in creating solutions to real-life community challenges, connecting their projects to the Sustainable Development Goals (SDGs)—developing vital leadership skills and experience. ",
  },
  {
    title: "Dream. Lead. Innovate.(Ages 15-19)",
    icon: <FaUsers size={28} />,
    description:
      "This program track teaches children how to build a life of vision, focus, resilience, and impact as Leaders. It maximizes creativity, imagination, habit-building, and Personal Leadership, to create a Leader's blueprint for a life of sustained impact.",
  },
  {
    title: "Advocacy Campaigns",
    icon: <FaComments size={28} />,
    description:
      "Through events, workshops, and online campaigns, we address key issues like child abuse, maltreatment, and poor parenting that hinder a children from developing into confident Leaders.",
  },
];

const TRUNCATE_LENGTH = 120;

const Program = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

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
            const isExpanded = expanded === index;
            const shouldTruncate = program.description.length > TRUNCATE_LENGTH;
            const displayText = isExpanded || !shouldTruncate
              ? program.description
              : program.description.slice(0, TRUNCATE_LENGTH) + "...";

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
                <p className="text-sm text-zinc-600 dark:text-zinc-300 justify-center text-justify">
                  {displayText}
                  {shouldTruncate && (
                    <span
                      className="ml-2 text-primary cursor-pointer underline"
                      onClick={() => handleToggle(index)}
                    >
                      {isExpanded ? "See less" : "See more"}
                    </span>
                  )}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Program;
