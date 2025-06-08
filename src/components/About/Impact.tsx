// src/components/About/Impact.tsx

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Metric = {
  label: string;
  target: number;
  suffix?: string;
};

const metrics: Metric[] = [
  { label: "Children Trained", target: 1200, suffix: "+" },
  { label: "Leadership Events", target: 35, suffix: "+" },
  { label: "Volunteers Engaged", target: 150, suffix: "+" },
  { label: "Parents Reached", target: 400, suffix: "+" },
];

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const update = () => {
      start += increment;
      if (start >= target) {
        setCount(target);
        return;
      }
      setCount(Math.floor(start));
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [target]);

  return <span>{count}{suffix}</span>;
};

const Impact = () => {
  return (
    <section className="w-full py-20 px-6 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-primary mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Our Impact
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
             className="p-6 rounded-2xl bg-light dark:bg-dark text-primary shadow-[0_0_15px_#b6127e] dark:shadow-[0_0_20px_#b6127e]/50 animate-pulse-glow transition-shadow"

              initial={{ opacity: 0, y: index % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <h3 className="text-3xl font-bold mb-2 text-primary drop-shadow-secondary dark:drop-shadow-secondary">
                <Counter target={metric.target} suffix={metric.suffix} />
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
