import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="relative w-full h-full">
        <ParticlesBackground />
        
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
