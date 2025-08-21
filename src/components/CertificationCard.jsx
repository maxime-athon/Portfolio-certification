// src/components/CertificationCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { LucideFileText, LucideMoveRight } from 'lucide-react';
import useUiStore from '../store/uiStore';

const CertificationCard = ({ certification }) => {
  const openDetailsModal = useUiStore((state) => state.openDetailsModal);

  const cardVariants = {
    hover: { scale: 1.05, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.5)" },
  };

  return (
    <motion.div
      className="relative overflow-hidden group rounded-xl shadow-lg cursor-pointer transition-all duration-300 transform-gpu flex flex-col"
      variants={cardVariants}
      whileHover="hover"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: certification.id * 0.1 }}
      aria-label={`Carte de certification pour ${certification.title}`}
    >
      {/* Image de couverture en haut de la carte */}
      <div className="w-full h-48 sm:h-56 overflow-hidden bg-gray-900 border-4 border-white/20 rounded-xl flex items-center justify-center relative">
  <motion.img
    src={certification.imageUrl}
    alt={`Aperçu de la certification ${certification.title}`}
    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
  />
</div>


    
      <motion.div
        className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Contenu et boutons en bas de la carte */}
      <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 text-white flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg sm:text-xl font-bold group-hover:text-turquoise-400">
            {certification.title}
          </h3>
        </div>
        <p className="text-sm text-gray-300 mb-4">{certification.platform}</p>
        
        <div className="flex space-x-2 transition-all duration-300 mt-auto">
          <button
            onClick={() => openDetailsModal(certification.id)}
            className="flex-1 flex items-center justify-center space-x-2 bg-indigo-600 px-3 py-2 rounded-full hover:bg-violet-700 transition-colors duration-200 text-xs sm:text-sm"
            aria-label="Voir les détails et projets liés"
          >
            <LucideFileText size={16} />
            <span>Détails</span>
          </button>
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 bg-turquoise-400 px-3 py-2 rounded-full hover:bg-turquoise-500 transition-colors duration-200 text-xs sm:text-sm"
            aria-label="Accéder à la certification officielle"
          >
            <LucideMoveRight size={16} />
            <span>Lien</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;