import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 px-6 bg-light dark:bg-dark text-dark dark:text-light transition-colors">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-8 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="w-full md:w-1/2 flex justify-center items-center md:h-auto"
          style={{ minHeight: "18rem" }}
        >
          <img
            src="/assets/Student.jpg"
            alt="About ACLiF"
            className="rounded-lg shadow-md object-contain w-full h-98 md:max-h-none"
            style={{ aspectRatio: "1/1" }}
          />
        </motion.div>
        <div className="w-full md:w-1/2 flex flex-col justify-center h-72 md:h-auto" style={{ minHeight: "18rem" }}>
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-3xl font-bold text-primary mb-4"
          >
            About The African Child Leadership Foundation (ACLiF)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-md leading-relaxed text-zinc-700 md:text-lg dark:text-zinc-300"
          >
            We Are Committed To Building A Foundation That Serves As A Springboard For Raising Revolutionary Leaders Equipped To Drive Positive Change In Africa And Beyond

            <br /><br />
            We are raising Agents of Change And an Ecosystem That Supports Their Holistic Development 
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
