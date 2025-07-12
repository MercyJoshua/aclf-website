import { motion } from "framer-motion";

const leaders = [
  {
    name: "Desmond Esther",
    age: 12,
    image: "/dreamlead/esther.avif",
    story: `Desmond Esther noticed that students eat a lot of unhealthy food, affecting their health. To curb this issue, she created a project Vision Board to test different solutions to this problem including:`,
    bullets: [
      "Creating a nutrition club in her school",
      "Inviting a nutrition expert to give a talk at her school",
      "Drawing the school's authorities to the need for a school garden",
      "Introducing nutrition in the school's curriculum",
      "Teaching her schoolmates to limit junk food, and eat fruits and veggies regularly",
    ],
    conclusion: `Esther is enthusiastic about Sustainable Development Goal 3, Good Health and Wellbeing, and continues to explore this field.`,
  },
  {
    name: "Delight Shaw",
    age: 13,
    image: "/dreamlead/delight.avif",
    story: `Delight Shaw noticed a lot of young people in her community, Ada George, Rivers State, Nigeria lack interest in schooling. To solve this issue, she created a captivating Project vision board intending to organize training to educate them on the need for education and how it helps them acquire decent jobs.`,
    bullets: [],
    conclusion: `Delight aims to contribute to Sustainable Development Goals 4 and 8 while developing her Leadership abilities.`,
  },
  {
    name: "Anijiofor Tovia",
    age: 13,
    image: "/dreamlead/tovia.avif",
    story: `Anijiofor Tovia observed that a lot of young people in her school, Government Girls Secondary School, Ruimuokuta, suffer from depression and poor mental health, which in turn affects their ability to develop themselves as Leaders. To solve this issue, Tovia designed a project Vision Board aimed at Counselling For Empowerment And Emotional Healing. She aims to use her counseling strength to encourage young people to be resilient and invest in their personal development.`,
    bullets: [],
    conclusion: `Tovia designed a creative booklet for her classmates with the hope of inspiring them to heal and begin a path to greatness. She is interested in Sustainable Development Goal 4, Good health and wellbeing.`,
  },
  {
    name: "Judith Ozioma",
    age: 13,
    image: "/dreamlead/judith.avif",
    story: `Judith Ozioma noticed that people in her community, Mgbuoba despite falling sick often, are comfortable living in a polluted environment. To tackle this problem, she designed an interesting vision board aimed at carrying out an awareness campaign to educate her neighborhood on the dangers of living in polluted areas. She aims to promote good sanitation practices in her community by teaching people how to clean and keep their environment neat.`,
    bullets: [],
    conclusion: `Judith is enthusiastic about SDG 4 (Good health and well-being), 6 (Clean water and sanitation), and 11 (Sustainable Cities and Communities).`,
  },
  {
    name: "Delight Dagogo",
    age: 13,
    image: "/dreamlead/dagogo.avif",
    story: `Delight Dagogo noticed that a common problem in her community, Elikpokwodu, Ruokpuoku, is flooding resulting from people throwing refuse into the drainage systems, blocking them.  For a solution, Delight designed a Vision Board for her project highlighting ways she aims to tackle these issues including:`,
    bullets: [

    "Talking to people in her community about the dangers of blocking the drainage system",
    "Organizing community cleanup weekly",

    "Advocating for Environmental Sanitation Policies in her community." 
],
    conclusion: `Delight aims to provide a better and healthier environment for her community and change the narrative from a 'garbage city' to a 'garden city' as it is said in the slogan of her state, Rivers, Nigeria.
She tackles Sustainable Development Goal 11 (Sustainable Cities and Communities) and  SDG 4 (Good health and well-being).`,
  },
    {
        name: "Ilufoye O.",
        age: 13,
        image: "/dreamlead/illufoye.avif",
        story: `Ilufoye Oluwatimileyin wants to end child labor exploitation and lifelong poverty through education. She believes everyone should have an equal playing field in life. To support her theory, she designed a vision board with a plan to help underprivileged children assess education. Oluwatimileyin noticed that children from low-income families in her community are unable to attend school due to cost, and some of her classmates are unable to attend school for this reason. To help out, she developed a student-led initiative to support underprivileged children. She plans to partner with local organizations to sustain the lesson 3 times weekly.`,
        bullets: [],
        conclusion: `Oluwatimileyin is an education champion and strongly supports Sustainable Development Goals 4 (Quality Education) and 10 (Reduced Inequalities).`,
    },
    {
        name: "Zinabari Salvation",
        age: 13,
        image: "/dreamlead/zina.avif",
        story: `Zinabari, Salvation believes in the Zero Hunger Goal. For her contribution, she created a vision board with a plan to establish a sustainable community garden and educate others to do the same. Outside Zero Hunger Salvation wants to tackle other Sustainable Development goals like No Poverty (SDG 1), Good Health and Wellbeing (SDG 4), and Decent Work and Economic Growth (SDG 4).`,
        bullets: [],
        conclusion: `Salvation believes that when we invest in planting crops, we can eat nutritious meals, sell farm products in exchange for money, create employment opportunities, and feed other people.`,
    },
    {
        name: "Destiny Uche",
        age: 13,
        image: "/dreamlead/uche.avif",
        story: `Destiny Uche carried out a project in her community, Green Ville, Rivers State Nigeria. For her project, she collected old-school books and gave them out to children who had none. She also launched an after-school peer-to-peer Tutoring club for her schoolmates who do not understand what is taught during classes. `,
        bullets: [],
        conclusion: `Destiny also gives out weekly prizes to the best performers to encourage them to study effectively. Her club meets twice weekly to further learn. Destiny is interested in Sustainable Development Goal 4, Quality Education.`,
    },
];

const IdeasFromLeaders = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 space-y-20">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-primary text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        Ideas From Our Young Leaders
      </motion.h2>

      {leaders.map((leader, index) => (
        <motion.div
          key={index}
          className={`flex flex-col lg:flex-row ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          } items-center gap-8`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.7 }}
          viewport={{ once: false }}
        >
          <div className="w-full lg:w-1/2">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-50 rounded-xl object-cover shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-bold mb-2 text-primary">
              {leader.name} <span className="text-gray-600">({leader.age})</span>
            </h3>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              {leader.story}
            </p>
            {leader.bullets.length > 0 && (
              <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-slate-300 space-y-1">
                {leader.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
            <p className="text-gray-700 dark:text-slate-300">{leader.conclusion}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default IdeasFromLeaders;
