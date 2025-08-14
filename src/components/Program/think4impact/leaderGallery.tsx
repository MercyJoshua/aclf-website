import { motion } from "framer-motion";
import { useState } from "react";

const leaders = [
  {
    name: "Desmond Esther",
    image: "/dreamlead/esther.png",
    project: "Desmond Esther noticed that students eat a lot of unhealthy food, affecting their health. To curb this issue, she created a project Vision Board to test different solutions to this problem",
  },
   
  {
    name: "Delight Shaw",
    image: "/dreamlead/delight1.png",
     project: "Delight Shaw noticed a lot of young people in her community, Ada George, Rivers State, Nigeria lack interest in schooling. To solve this issue, she created a captivating Project vision board intending to organize training to educate them on the need for education and how it helps them acquire decent jobs.",
   
  },
  {
    name: "Judith Ozioma",
    image: "/dreamlead/judith.png",
     project: "Judith Ozioma noticed that people in her community, Mgbuoba despite falling sick often, are comfortable living in a polluted environment. To tackle this problem, she designed an interesting vision board aimed at carrying out an awareness campaign to educate her neighborhood on the dangers of living in polluted areas.",
  },
   {
    name: "Anijiofor Tovia",
    image: "/dreamlead/tovia.png",
     project: "Anijiofor Tovia observed that a lot of young people in her school, Government Girls Secondary School, Ruimuokuta, suffer from depression and poor mental health, which in turn affects their ability to develop themselves as Leaders. To solve this issue, Tovia designed a project Vision Board aimed at Counselling For Empowerment And Emotional Healing.",
  },
  {
    name: "Delight Dagogo",
    image: "/dreamlead/delight.png",
     project: "Delight Dagogo noticed that a common problem in her community, Elikpokwodu, Ruokpuoku, is flooding resulting from people throwing refuse into the drainage systems, blocking them.  For a solution, Delight designed a Vision Board for her project highlighting ways she aims to tackle these issues",
    
  },
    {
        name: "Ilufoye O.",
        image: "/dreamlead/illufoye.png",
         project: "Ilufoye Oluwatimileyin wants to end child labor exploitation and lifelong poverty through education. She believes everyone should have an equal playing field in life. To support her theory, she designed a vision board with a plan to help underprivileged children assess education.",
       
    },
    {
        name: "Zinabari Salvation",
        image: "/dreamlead/zina.png",
         project: "Zinabari, Salvation believes in the Zero Hunger Goal. For her contribution, she created a vision board with a plan to establish a sustainable community garden and educate others to do the same.",
       
    },
    {
        name: "Destiny Uche",
        image: "/dreamlead/destiny.png",
         project: "Destiny Uche carried out a project in her community, Green Ville, Rivers State Nigeria. For her project, she collected old-school books and gave them out to children who had none.",
       
    },
];
 const TRUNCATE_LENGTH = 50;

const LeaderGallery = () => {
  
    const [expanded, setExpanded] = useState<number | null>(null);
    const handleToggle = (index: number) => {
      setExpanded(expanded === index ? null : index);
    };
    
  return (
    <section className="max-w-4xl mt-10 mx-auto px-6 sm:px-10 py-12 rounded-md shadow-sm space-y-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-10">
        Meet Our Young Leaders
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{leaders.map((l, i) => {
            const isExpanded = expanded === i;
            const shouldTruncate = l.project.length > TRUNCATE_LENGTH;
            const displayText = isExpanded || !shouldTruncate
              ? l.project
              : l.project.slice(0, TRUNCATE_LENGTH) + "...";

            return (
          <motion.div
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <img
              src={l.image}
              alt={l.name}
              className="w-full h-full object-cover aspect-3/2 hover:scale-105 transition-transform"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {l.name}
              </h3>
              <p className="text-gray-700 dark:text-slate-300 text-justify text-sm mb-4 flex-grow">
                {displayText}
    {shouldTruncate && (
      <span
        className="ml-2 text-primary cursor-pointer underline"
        onClick={() => handleToggle(i)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </span>
    )}
              </p>
            </div>
          </motion.div>
        );
          })}
      </div>
    </section>
  );
};

export default LeaderGallery;


