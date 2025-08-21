// src/pages/Certifications.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../data/certifications';
import CertificationCard from '../components/CertificationCard';
import MainNavigation from '../components/MainNavigation';
import useUiStore from '../store/uiStore';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard'; 
const Certifications = () => {
  const { view } = useUiStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-4 sm:p-8"
    >
      <MainNavigation />

      <h1 className="text-4xl font-extrabold text-center mb-10 text-white drop-shadow-lg">
        {view === 'certifications' ? 'Mes certifications' : 'Mes projets'}
      </h1>

      {view === 'certifications' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Certifications;