import { Home } from 'lucide-react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';

import Navbar from './Components/Navbar';
import Card from './Components/Projects';
import Projects from './Components/Projects';
import Technologies from './Components/Technologies';

function App() {
  return (
    <>
    <div className='h-full w-full'>
    <Navbar />
      <div id="home">
        
      </div>
      <div id="about">
        <About />
      </div>
      <div id="technologies">
        <Technologies />
      </div>
      {/* <div id="experience">
        <Experience /> */}
      </div>
      <div id="projects">
        <Card/>
      </div>
      <div id="contact">
        <Contact />
      </div>
    
      
    </>
  );
}

export default App;