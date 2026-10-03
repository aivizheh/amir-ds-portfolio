import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Globe, Send, Camera, MonitorPlay } from 'lucide-react';

const SocialButton = ({ href, icon: Icon, label, colorClass, shadowClass }) => (
  <Tilt perspective={1000} scale={1.1}>
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 px-6 py-4 rounded-2xl glass ${shadowClass} hover:bg-white/10 transition-all group`}
    >
      <Icon className={`${colorClass} group-hover:scale-110 transition-transform`} size={24} />
      <span className="font-semibold text-white/90">{label}</span>
    </a>
  </Tilt>
);

const Contact = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="py-20 px-4 relative z-10" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-glow-purple"
        >
          {t.contact.title}
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          <SocialButton 
            href="https://aivizheh.ir"
            icon={Globe}
            label={t.contact.website}
            colorClass="text-cyber-blue"
            shadowClass="hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          />
          <SocialButton 
            href="https://t.me/AiVizheh"
            icon={Send}
            label={t.contact.telegram}
            colorClass="text-blue-400"
            shadowClass="hover:shadow-[0_0_20px_rgba(96,165,250,0.4)]"
          />
          <SocialButton 
            href="https://instagram.com/amir_avizhe"
            icon={Camera}
            label={t.contact.instagram}
            colorClass="text-pink-500"
            shadowClass="hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
          />
          <SocialButton 
            href="https://youtube.com/@AiVizheh"
            icon={MonitorPlay}
            label={t.contact.youtube}
            colorClass="text-red-500"
            shadowClass="hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
          />
        </motion.div>
      </div>
      
      <div className="mt-20 text-center text-white/40 text-sm pb-8">
        &copy; {new Date().getFullYear()} Amir (Aivizheh). All rights reserved.
      </div>
    </section>
  );
};

export default Contact;
