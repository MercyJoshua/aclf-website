import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const gallery = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  
];

const GalleryPreview = () => {
  return (
    <section className="py-16 px-6 bg-light dark:bg-dark transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet some of our happy faces</h2>
        <p className="text-zinc-600 dark:text-zinc-300 mb-10">
          Moments from our programs and events.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {gallery.map((img, i) => (
            <motion.div
              key={img}
              className="overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: i % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/Gallery"
            className="inline-block text-white bg-secondary px-6 py-2 rounded-full font-medium hover:bg-primary transition"
          >
            View Full Gallery
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default GalleryPreview;
