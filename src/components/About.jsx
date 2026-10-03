import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const About = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="py-20 px-4 relative z-10" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Tilt 
            className="glass-glow rounded-3xl p-8 md:p-12 relative overflow-hidden"
            perspective={1500}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1.02}
          >
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyber-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyber-blue/20 rounded-full blur-3xl"></div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow-blue relative z-10">
              {t.about.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 relative z-10">
              {t.about.description}
            </p>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
