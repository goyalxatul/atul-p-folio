import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes and Route
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Skills from './Components/Skills'; // Import the Skills component
import Projects from './Components/Projects'; // Correct the component name

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} /> {/* Corrected component */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


// Component to handle conditional rendering based on path
/*function MainContent() {
  const location = useLocation();
  
  return (
    <>
      {location.pathname === '/' && <Hero />}
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about/vision-mission" element={<VisionMission />} />
        <Route path="/about/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}*/


