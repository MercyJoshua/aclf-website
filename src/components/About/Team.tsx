import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Grace U.",
    role: "Executive Director",
    image: "/team/7.png", 
  },
  {
    name: "David O.",
    role: "Media/Publicity Lead",
    image: "/team/10.png", 
  },
  {
    name: "Amaka T.",
    role: "Advocacy Team Coordinator",
    image: "/team/9.png", 
  },
  {
    name: "Chinedu A.",
    role: "Programs Manager",
    image: "/team/12.png",
  },
];

const Team = () => {
  return (
    <section className="py-20 px-6 bg-light dark:bg-dark transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Meet the Team
        </h2>
        <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto mb-12">
          A dedicated team passionate about shaping Africa’s next generation of leaders.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-800 text-primary p-6 rounded-2xl shadow-[0_0_15px_#b6127e] dark:shadow-[0_0_20px_#b6127e]/50 hover:shadow-[0_0_25px_#b6127e] dark:hover:shadow-[0_0_30px_#b6127e]/80 transition-all duration-300 animate-pulse-glow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-secondary"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
