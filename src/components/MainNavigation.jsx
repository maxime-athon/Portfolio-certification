// src/components/MainNavigation.jsx
import React from 'react';
import { motion } from 'framer-motion';
import useUiStore from '../store/uiStore';
import { LucideLayers, LucideAward } from 'lucide-react';

const MainNavigation = () => {
  const { view, setView } = useUiStore();

  const buttonClass = (buttonView) =>
    `flex items-center justify-center gap-1 sm:gap-2 
     px-3 sm:px-5 py-2 sm:py-3 rounded-full font-medium 
     transition-colors duration-300 text-xs sm:text-sm md:text-base
     ${view === buttonView
        ? 'bg-white/20 text-turquoise-400'
        : 'bg-white/10 text-gray-300 hover:bg-white/20'}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="relative z-20 flex flex-wrap justify-center items-center 
                 backdrop-blur-md bg-white/10 border border-white/30 
                 rounded-full shadow-lg p-2 w-full max-w-md mx-auto mb-6 sm:mb-10"
    >
      <button 
        onClick={() => setView('certifications')} 
        className={`${buttonClass('certifications')} flex-1 sm:flex-none`}
      >
        <LucideAward size={18} className="sm:w-5 sm:h-5" />
        <span>Certifications</span>
      </button>
      <button 
        onClick={() => setView('projects')} 
        className={`${buttonClass('projects')} flex-1 sm:flex-none`}
      >
        <LucideLayers size={18} className="sm:w-5 sm:h-5" />
        <span>Projets</span>
      </button>
    </motion.div>
  );
};

export default MainNavigation;
