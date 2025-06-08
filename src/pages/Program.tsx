import CTA from "../components/Program/CTA";
import Highlights from "../components/Program/Highlight";
import Intro from "../components/Program/Intro";
import ProgramList from "../components/Program/ProgramList";


const Programs = () => {
  return (
    <div>
      <Intro />
      <ProgramList />
      <Highlights />
      <CTA />
    </div>
  );
};

export default Programs;
