import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const events = [
  {
    title: "June Leadership Bootcamp",
    date: "June 22, 2025",
    location: "Lagos, Nigeria",
    description: "An intensive one-day training focused on communication and decision-making for children aged 10-15.",
  },
  {
    title: "Parents & Experts Talk Show",
    date: "July 7, 2025",
    location: "Online",
    description: "Topic: 'Is School Education Enough?' Exploring gaps in traditional learning.",
  },
];

const UpcomingEvent = () => (
  <section className="py-16 px-6 bg-white dark:bg-zinc-900 transition-colors">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Upcoming Events</h2>

      <div className="space-y-6 text-left">
        {events.map((event, i) => (
          <motion.div
            key={event.title}
            className="p-6 rounded-xl shadow bg-light dark:bg-dark"
            initial={{ opacity: 0, y: i % 2 === 0 ? 40 : -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center gap-3 text-secondary mb-2">
              <FaCalendarAlt />
              <span className="font-semibold">{event.date}</span>
            </div>
            <h3 className="text-xl font-semibold text-primary">{event.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-300">{event.description}</p>
            <p className="mt-1 text-sm italic text-zinc-500">{event.location}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default UpcomingEvent;
