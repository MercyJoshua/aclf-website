import { motion } from "framer-motion";
import AboutSection from "../components/Program/KidLeaders/Intro";
import ResearchSection from "../components/Program/KidLeaders/ResearchSection";
import WhyLeadershipMatters from "../components/Program/KidLeaders/WhyLeadershipMatters";
import { kidleadersContent } from "../data/kidleaders";
import Gallery from "../components/Program/KidLeaders/Gallery";


const KidLeaders = () => {
  const { title, description } = kidleadersContent.intro;

  return (
    <section className="px-6 py-12 max-w-6xl mx-auto text-primary dark:text-light">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-secondary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="text-md md:text-xl mb-10 text-center text-light max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {description}
      </motion.p>

      <AboutSection />
      <ResearchSection />
      <WhyLeadershipMatters />
      <Gallery />
    </section>
  );
};

export default KidLeaders;
