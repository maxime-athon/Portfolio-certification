// src/components/Modal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-sm bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white/10 border border-white/30 rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-lg sm:max-w-2xl w-full text-white shadow-2xl"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton de fermeture toujours visible */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 transition-colors z-50"
              aria-label="Fermer la modale"
            >
              <X size={24} />
            </button>

            {/* Titre et contenu */}
            <h3 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">{title}</h3>
            <div className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base max-h-[70vh] overflow-y-auto pr-2">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
