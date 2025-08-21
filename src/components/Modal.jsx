// src/components/Modal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  // AnimatePresence gère l'affichage en douceur
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Ferme la modale en cliquant en dehors
        >
          <motion.div
            className="relative bg-white/10 border border-white/30 rounded-3xl p-8 max-w-2xl w-full text-white shadow-2xl"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture quand on clique sur la modale
          >
            {/* Bouton de fermeture */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              aria-label="Fermer la modale"
            >
              <X size={24} />
            </button>
            
            {/* Titre et contenu */}
            <h3 className="text-3xl font-bold mb-4">{title}</h3>
            <div className="mt-6 text-gray-300">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;