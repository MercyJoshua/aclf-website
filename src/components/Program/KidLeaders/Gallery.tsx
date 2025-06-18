import { kidleadersContent } from "../../../data/kidleaders";


const Gallery = () => (
  <section className="mt-16">
    <h2 className="text-2xl md:text-3xl font-semibold text-center text-secondary  mb-6">
      See Moments From our KidLeaders Fun Lab
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {kidleadersContent.gallery.map((src, i) => (
        <img key={i} src={src} alt={`KidLeader ${i + 1}`} className="rounded-lg object-cover w-full h-64" />
      ))}
    </div>
  </section>
);

export default Gallery;
