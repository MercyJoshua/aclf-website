import { motion } from "framer-motion";
import { outreachHighlights } from "../../data/highlights";
import { Link } from "react-router-dom";

const Highlights = () => {
  return (
    <section className="py-20 px-6 bg-secondary/10 dark:bg-secondary/20 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
          Outreach Highlights
        </h2>

        <div className="space-y-10">
          {outreachHighlights.map((event, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-center bg-white dark:bg-zinc-900 shadow-md rounded-xl overflow-hidden border-l-4 border-secondary"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full md:w-1/3 h-56 object-cover"
              />

              <div className="flex-1 p-6">
                <h3 className="text-xl font-semibold text-primary">{event.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                  <span className="font-medium text-secondary">{event.date}</span> — {event.location}
                </p>
                <p className="text-zinc-700 dark:text-zinc-300">{event.description}</p>

                {event.blogLink && (
                  <Link
                    to={event.blogLink}
                    className="inline-block mt-4 text-sm text-secondary font-medium underline hover:text-primary transition"
                  >
                    Read more →
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Highlights;
