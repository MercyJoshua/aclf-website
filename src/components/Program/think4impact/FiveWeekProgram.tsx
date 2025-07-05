import { motion } from "framer-motion";

// Steps with emojis and clear titles
const steps = [
  {
    icon: "🔍",
    title: "See the Problem",
    description: "What needs to change in my community? What SDG can I contribute to?",
  },
  {
    icon: "💚",
    title: "Understand People",
    description: "Who is affected? What do they feel and need?",
  },
  {
    icon: "🧪",
    title: "Think of Ideas",
    description: "What can we do with what we have?",
  },
  {
    icon: "🧩",
    title: "Test It Out",
    description: "Let’s execute a community project with our solution.",
  },
  {
    icon: "📣",
    title: "Share",
    description: "What difference did we make? What did I learn?",
  },
];

const FiveWeekProgramSection = () => {
  return (
    <section className="w-full rounded-lg py-16 md:py-24 lg:py-32 max-w-4xl mx-auto mt-12 px-6 sm:px-10 bg-white dark:bg-secondary/70">
      {/* relative rounded-lg shadow-lg max-w-4xl mx-auto mt-12 px-6 sm:px-10 py-16 flex flex-col items-center overflow-hidden bg-white */}
      <div className="container mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center space-y-4 text-center mb-16"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xl font-semibold ">
            Our 5-Week Program
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary dark:text-white">
            How It Works
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed dark:text-slate-300">
            Step-by-step, we guide children from problem spotting to sharing real solutions.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-5xl">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="absolute left-6 lg:left-1/2 w-3 h-full bg-secondary/70 -translate-x-1/2"
            style={{ transformOrigin: "top" }}
          />

          <div className="relative flex flex-col gap-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.4 }}
                  className="grid grid-cols-[auto_1fr] lg:grid-cols-[1fr_auto_1fr] items-start gap-x-6 lg:gap-x-12"
                >
                  {/* Content Card */}
                  <div
                    className={`p-6 rounded-xl bg-slate-50 border border-gray-200 shadow-md dark:bg-slate-800/50 dark:border-slate-700
                                ${isEven ? 'lg:col-start-1 lg:row-start-1 lg:text-right' : 'lg:col-start-3 lg:text-left lg:row-start-1'}`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-slate-300">{step.description}</p>
                  </div>

                  {/* Icon Marker */}
                  <div className="flex items-center justify-center row-start-1 lg:col-start-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white ring-8 ring-white dark:ring-slate-900 z-10 text-2xl">
                      {step.icon}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiveWeekProgramSection;
