import { motion } from "framer-motion";

const leaders = [
  {
    name: "Desmond Esther",
    age: 12,
    image: "/dreamlead/esther.avif",
   
  },
  {
    name: "Delight Shaw",
    age: 13,
    image: "/dreamlead/delight.avif",
   
  },
  {
    name: "Anijiofor Tovia",
    age: 13,
    image: "/dreamlead/tovia.avif",
  },
  {
    name: "Judith Ozioma",
    age: 13,
    image: "/dreamlead/judith.avif",
  },
  {
    name: "Delight Dagogo",
    age: 13,
    image: "/dreamlead/dagogo.avif",
    
  },
    {
        name: "Ilufoye O.",
        age: 13,
        image: "/dreamlead/illufoye.avif",
       
    },
    {
        name: "Zinabari Salvation",
        age: 13,
        image: "/dreamlead/zina.avif",
       
    },
    {
        name: "Destiny Uche",
        age: 13,
        image: "/dreamlead/uche.avif",
       
    },
];

const LeaderGallery = () => {
  return (
    <section className="max-w-4xl mt-10 mx-auto px-6 sm:px-10 py-12 rounded-md shadow-sm space-y-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-10">
        Meet Our Young Leaders
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {leaders.map((leader, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={leader.image}
                alt={`Portrait of ${leader.name}`}
                className="w-full h-full object-cover aspect-3/2 hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800">
                {leader.name}
              </h3>
              <p className="text-gray-600">{leader.age} years</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LeaderGallery;

