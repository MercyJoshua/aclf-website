import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 px-6 bg-light dark:bg-dark text-dark dark:text-light transition-colors">
      <div
       
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2 
         initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="text-3xl  font-bold text-primary mb-4">About The African Child Leadership Foundation (ACLiF)</motion.h2>
        <motion.p 
         initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-md leading-relaxed text-zinc-700 md:text-lg">
          We Are Committed To Building A Foundation That Serves As A Springboard For Raising Revolutionary Leaders Equipped To Drive Positive Change In Africa And Beyond

We are raising Agents of Change And an Ecosystem That Supports Their Holistic Development 
        </motion.p>
      </div>
    </section>
  );
};

export default About;
