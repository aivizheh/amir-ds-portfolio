import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const SkillBadge = ({ skill, index, colorClass = "text-cyber-blue shadow-[0_0_15px_rgba(0,240,255,0.2)] border-cyber-blue/30" }) => (
  <Tilt 
    perspective={1000} 
    scale={1.05} 
    className="inline-block m-1.5"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`glass px-4 py-2 rounded-lg border text-sm md:text-base font-medium hover:bg-white/5 transition-all cursor-default ${colorClass}`}
    >
      {skill}
    </motion.div>
  </Tilt>
);

const Skills = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="py-20 px-4 relative z-10" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-glow-purple"
        >
          {t.skills.title}
        </motion.h2>

        <div className="flex flex-col gap-8">
          {/* Technical Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-glow p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-white/90 border-b border-white/10 pb-4">
              {t.skills.technicalTitle}
            </h3>
            <div className="flex flex-wrap">
              {t.skills.techSkills.map((skill, index) => (
                <SkillBadge 
                  key={index} 
                  skill={skill} 
                  index={index} 
                  colorClass="text-cyber-blue shadow-[0_0_15px_rgba(0,240,255,0.2)] border-cyber-blue/30 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                />
              ))}
            </div>
          </motion.div>

          {/* General Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-glow p-8 rounded-3xl border-cyber-purple/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-white/90 border-b border-white/10 pb-4">
              {t.skills.generalTitle}
            </h3>
            <div className="flex flex-wrap">
              {t.skills.generalSkills.map((skill, index) => (
                <SkillBadge 
                  key={index} 
                  skill={skill} 
                  index={index} 
                  colorClass="text-cyber-purple shadow-[0_0_15px_rgba(176,38,255,0.2)] border-cyber-purple/30 hover:shadow-[0_0_20px_rgba(176,38,255,0.5)]"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
