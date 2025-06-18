import { motion } from "framer-motion";
import { galleryItems } from "../../data/gallery";
import Lightbox from "./Lightbox";
import { useState } from "react";

const ImageGrid = () => {
    const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="px-6 py-16 bg-light dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          className="text-3xl font-semibold text-center text-primary mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Gallery Highlights
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 bg-white dark:bg-zinc-800"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
             <img
  src={item.src}
  alt={item.alt}
  className="w-full h-64 object-cover cursor-pointer"
  onClick={() => setSelected({ src: item.src, alt: item.alt })}
/>

<Lightbox
  isOpen={!!selected}
  src={selected?.src || ""}
  alt={selected?.alt || ""}
  onClose={() => setSelected(null)}
/>

              <div className="p-4">
                <h4 className="text-lg font-semibold text-primary mb-1">{item.title}</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-300">{new Date(item.date).toLocaleDateString()}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
