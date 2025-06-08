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
        className="text-3xl  font-bold text-primary mb-4">About ACLF</motion.h2>
        <motion.p 
         initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-md leading-relaxed text-zinc-700 md:text-lg">
          The African Child Leadership Foundation is dedicated to shaping the next generation of African leaders.
          We work with children aged 5 to 18 to build confidence, teach life skills, foster leadership, and provide
          safe platforms for expression and creativity. We also engage parents through expert-led biweekly sessions
          on child development and behavior.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
