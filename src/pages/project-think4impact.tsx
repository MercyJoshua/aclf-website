
import AboutSection from "../components/Program/think4impact/About";
import CohortOne from "../components/Program/think4impact/CohortOne";
import FiveWeekProgramSection from "../components/Program/think4impact/FiveWeekProgram";
import Hero from "../components/Program/think4impact/Hero";
import HowWeDoItSection from "../components/Program/think4impact/HowWeDoIt";
//import IdeasFromLeaders from "../components/Program/think4impact/IdeasFromLeaders";
import ImpactfulSection from "../components/Program/think4impact/Impactful";
import LeaderGallery from "../components/Program/think4impact/leaderGallery";
import MissionSection from "../components/Program/think4impact/Mission";
import WhatIfSection from "../components/Program/think4impact/WhatIf";


const ThinkForImpact = () => {
  

  return (
    <section className="">
    
       <Hero />
       <WhatIfSection />
      <AboutSection />
      <MissionSection />
      <HowWeDoItSection />
      <FiveWeekProgramSection />
      <ImpactfulSection />
      <CohortOne />
      <LeaderGallery />
   {/*    <IdeasFromLeaders /> */}
    </section>
  );
};

export default ThinkForImpact
