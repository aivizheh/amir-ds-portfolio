import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';

const Navbar = () => {
  const { lang, toggleLanguage } = useContext(LanguageContext);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 top-0 left-0 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex-shrink-0 font-bold text-2xl text-glow-purple cursor-pointer">
          Aivizheh<span className="text-cyber-blue">.ir</span>
        </div>
        
        <div>
          <button
            onClick={toggleLanguage}
            className="glass-glow flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105"
          >
            <Languages size={18} className="text-cyber-blue" />
            {lang === 'en' ? 'FA (فارسی)' : 'EN (English)'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
