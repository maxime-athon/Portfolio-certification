// src/store/uiStore.js
import { create } from 'zustand';

const useUiStore = create((set) => ({
  isDetailsModalOpen: false,
  selectedCertificationId: null,
  view: 'certifications', // 'certifications' ou 'projects'

  openDetailsModal: (id) => set({ isDetailsModalOpen: true, selectedCertificationId: id }),
  closeDetailsModal: () => set({ isDetailsModalOpen: false, selectedCertificationId: null }),

  // Nouvelle action pour changer de vue
  setView: (newView) => set({ view: newView }),
}));

export default useUiStore;