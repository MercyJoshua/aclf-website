import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import './App.css';
import Footer from './components/layout/Footer';
import About from './pages/About';
import Programs from './pages/Program';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import KidLeaders from './pages/Kidleaders';
import ThinkForImpact from './pages/project-think4impact';

function App() {
  return (
    <BrowserRouter>
      <div className=" overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Program" element={<Programs />} />
            {/* Programs */}
        <Route path="/Kidleaders" element={<KidLeaders />} />
        {/* TODO: Add these when you create them */}
        <Route path="/project-think4impact" element={<ThinkForImpact />} />
        {/* <Route path="/programs/dream-lead-innovate" element={<DreamLeadInnovate />} /> */}

          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
