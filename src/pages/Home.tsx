
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Programs from "../components/Home/Program";
import GalleryPreview from "../components/Home/GalleryPreview";
import UpcomingEvent from "../components/Home/UpcomingEvent";
import Testimonial from "../components/Home/Testimonial";
import CallToAction from "../components/Home/CallToAction";
import Partners from "../components/Home/Partners";

// import CTA from "../components/Home/CTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Programs /> 
      <GalleryPreview />
      <UpcomingEvent />
      <Testimonial />
      <Partners />
       <CallToAction /> 
    </div>
  );
};

export default Home;
