// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../data/certifications';
import { LucideMoveRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const relatedCertification = certificationsData.find(
    (cert) => cert.id === project.certificationId
  );

  return (
    <motion.div
      className="relative overflow-hidden group rounded-xl shadow-lg cursor-pointer transition-all duration-300 transform-gpu"
      whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.5)" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      
      <motion.img
        src={project.captures[0]}
        alt={`Aperçu du projet ${project.title}`}
        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
      />

     
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 
                   backdrop-blur-sm transition-opacity duration-300"
      />

     
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white z-10">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 drop-shadow-md">
          {project.title}
        </h3>

        {relatedCertification && (
          <p className="text-xs sm:text-sm text-gray-300 mb-2">
            Certifié par {relatedCertification.platform}
          </p>
        )}

        <a
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-turquoise-400 px-3 py-1.5 sm:px-4 sm:py-2 
                     rounded-full w-fit hover:bg-turquoise-500 transition-colors duration-200 text-xs sm:text-sm"
        >
          <LucideMoveRight size={16} />
          <span>Découvrir</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
