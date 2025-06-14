import { motion } from "framer-motion";

const partners = [
  {
    name: "Super Woman",
    logo: "/partners/super-woman.avif",
    website: "https://superwomanorg.online",
  },
  {
    name: "Universal Basic Education",
    logo: "/partners/ube.png",
    website: "https://ubec.gov.ng",
  },
  {
    name: "Boxit Africa",
    logo: "/partners/boxit-africa.avif",
    website: "",
  },
  {
    name: "Elegant Print",
    logo: "/partners/elegant-print.png",
    website: "https://elegantprinttech.blogspot.com",
  },
];

const Partners = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-zinc-900 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">Our Partners</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              key={partner.name}
              className="flex justify-center items-center p-4 rounded-xl bg-light dark:bg-dark shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: false }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain transition duration-300"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Partners;
