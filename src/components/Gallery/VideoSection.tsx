import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const videos = [
  {
    id: 1,
    title: "Training at Ukanafun rural area, Nigeria",
    url: "https://youtu.be/un3jP4aC-Ko?si=zOuGlTrAhY5raOnN",
  },
  {
    id: 2,
    title: " Moment highlights from Project Think4Impact, Africa",
    url: "https://youtu.be/xRERfNYrygY?si=R3A82gVF2v5Bdeib",
  },
];

const VideoSection = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3
          className="text-3xl font-bold text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Videos
        </motion.h3>

        <div className="grid gap-10 md:grid-cols-2">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >

<ReactPlayer
  url={video.url}
   title={video.title}
  controls
   allowFullScreen
    className="w-full h-64 sm:h-80"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
/>

              <p className="mt-3 text-lg font-medium text-primary">{video.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
