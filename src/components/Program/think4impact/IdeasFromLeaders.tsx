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
    <section className="max-w-4xl mt-10 mx-auto px-6 sm:px-10 py-12 rounded-md shadow-sm space-y-8">
      {/* Header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-primary mb-4">
          Ideas from Our Young Leaders
        </h2>
        <p className="text-lg  max-w-2xl mx-auto">
          Visionary projects by children passionate about change.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="space-y-20">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            className="grid md:grid-cols-2 gap-8 items-start rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Text Side */}
            <div>
              <h3 className="text-2xl font-semibold  mb-1">
                {leader.name}
                <span className="ml-2 text-base ">({leader.age})</span>
              </h3>
              <p className="text-sm text-secondary font-medium mb-4">
                Sustainable Development Advocate
              </p>

              <p className=" leading-relaxed mb-4 text-justify">
                {leader.story}
              </p>

              {leader.bullets.length > 0 && (
                <div className="rounded-lg p-4 border text-justify">
                  <h4 className="font-semibold mb-2 text-primary">Key Initiatives:</h4>
                  <ul className="list-disc list-inside text-sm  space-y-2">
                    {leader.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Section: Conclusion */}
            <div className="bg-primary/5 border-l-4 text-justify border-primary p-6 rounded-xl shadow-inner h-fit">
              <p className="italic  leading-relaxed">
                {leader.conclusion}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IdeasFromLeaders;
