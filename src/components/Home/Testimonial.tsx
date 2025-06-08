import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mrs. Femi Ajayi",
    role: "Parent",
    message: "The programs opened my son's mind. He now talks about leadership and teamwork confidently!",
  },
  {
    name: "Chidera O.",
    role: "Participant, 13yrs",
    message: "I loved the bootcamp! It made me feel like I can lead and help my friends too.",
  },
];

const Testimonial = () => (
  <section className="py-16 px-6 bg-zinc-100 dark:bg-zinc-800 transition-colors">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">Testimonials</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="p-6 rounded-xl shadow bg-light dark:bg-dark text-left"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: false }}
          >
            <p className="italic text-zinc-700 dark:text-zinc-300">“{t.message}”</p>
            <div className="mt-4 text-sm text-secondary font-semibold">{t.name}</div>
            <div className="text-xs text-zinc-500">{t.role}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Testimonial;
