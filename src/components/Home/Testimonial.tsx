"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Dr. Vera Ake",
    role: "Coordinator Project Think4Impact,Africa 1.0",
    message: "I am so proud of the children we've worked with. They learn so fast and execute their social impact projects with a strong determination to tackle problems with locally-led solutions. We are indeed, raising Innovative Leaders.",
    image: "/testimonials/Vera.avif", 
  },
  {
    name: "Daniella Ebom",
    role: "1st Place Project Think4Impact,Africa 1.0",
    message: "Through Project Think4Impact, I learnt that I can dream and impact my society. I was excited to carry out a project in my community with the help of my Trainer ",
    image: "/testimonials/Daniella.avif", 
  },
  {
    name: "Destiny Uche",
    role: "Trainee",
    message: "After learning about the Sustainable Development Goals during our training, I decided to tackle SDG 4, Quality Education. With the help of my trainer, I carried out a project to donate my old textbooks to children in my community who were not in school. ",
    image: "/testimonials/Destiny.avif", 
  },
];

const MAX_LENGTH = 120;

const Testimonial = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleReadMore = (idx: number) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
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
          {testimonials.map((t, i) => {
            const isLong = t.message.length > MAX_LENGTH;
            const showFull = expanded === i;
            const displayMessage = isLong && !showFull
              ? t.message.slice(0, MAX_LENGTH) + "..."
              : t.message;

            return (
              <motion.div
                key={t.name}
                className="p-6 rounded-xl shadow bg-light dark:bg-dark text-left flex items-start gap-4"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: false }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      onError={e => {
                        (e.target as HTMLImageElement).src =
                          "https://ui-avatars.com/api/?name=" +
                          encodeURIComponent(t.name) +
                          "&background=random";
                      }}
                    />
                  </div>
                </div>
                <div>
                  <p className="italic text-zinc-700 dark:text-zinc-300">
                    “{displayMessage}”
                    {isLong && (
                      <button
                        className="ml-2 text-primary underline text-xs"
                        onClick={() => handleReadMore(i)}
                        type="button"
                      >
                        {showFull ? "Show less" : "Read more"}
                      </button>
                    )}
                  </p>
                  <div className="mt-4 text-sm text-secondary font-semibold">{t.name}</div>
                  <div className="text-xs text-zinc-500">{t.role}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;
