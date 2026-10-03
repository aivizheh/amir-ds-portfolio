import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { MonitorPlay } from 'lucide-react';

const Experience = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="py-20 px-4 relative z-10" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-glow-blue"
        >
          {t.experience.title}
        </motion.h2>

        <Tilt
          perspective={1500}
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          scale={1.01}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-glow p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-cyber-purple to-cyber-blue"></div>
            
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-red-600/20 flex items-center justify-center border-2 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                <MonitorPlay size={48} className="text-red-500" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                {t.experience.youtubeTitle}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.experience.youtubeDesc}
              </p>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </section>
  );
};

export default Experience;
