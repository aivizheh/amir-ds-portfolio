import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import profilePhoto from '../assets/photo.jpg';

const Hero = () => {
  const { t, lang } = useContext(LanguageContext);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-start"
        >
          <h2 className="text-xl md:text-3xl text-cyber-blue mb-4 font-light">
            {t.hero.greeting}
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-glow-purple">
            {t.hero.name}
          </h1>
          <div className="text-2xl md:text-4xl font-semibold text-gray-300 min-h-[80px]">
            <Typewriter
              words={t.hero.titles}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <Tilt 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full p-2 glass-glow"
            perspective={1000}
            scale={1.05}
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-cyber-purple/50">
              <img 
                src={profilePhoto} 
                alt={t.hero.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </Tilt>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
