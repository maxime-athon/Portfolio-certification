// src/App.jsx
import { Outlet } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import AudioPlayer from './components/AudioPlayer';
import Modal from './components/Modal';
import useUiStore from './store/uiStore';
import { certificationsData } from './data/certifications';
import { projectsData } from './data/projects';

function App() {
  const {
    isDetailsModalOpen,
    selectedCertificationId,
    closeDetailsModal,
  } = useUiStore();

  const selectedCert = certificationsData.find(cert => cert.id === selectedCertificationId);
  const projectsForSelectedCert = selectedCert?.projects.map(id => projectsData.find(p => p.id === id));

  return (
    <div className="relative min-h-screen bg-gray-900 font-inter text-white flex items-center justify-center p-4 overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 lg:p-20 max-w-7xl w-full mx-auto my-8">
        <Outlet />
      </div>

      <AudioPlayer />

      {/* Modale unique avec tous les détails */}
      <Modal
        isOpen={isDetailsModalOpen}
        onClose={closeDetailsModal}
        title={selectedCert?.title}
      >
        {selectedCert ? (
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold mb-2">Informations principales</h4>
              <p><strong>Plateforme :</strong> {selectedCert.platform}</p>
              <p><strong>Date d'obtention :</strong> {selectedCert.date}</p>
              <p><strong>Durée :</strong> {selectedCert.details.duration}</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-2">Compétences acquises</h4>
              <ul className="flex flex-wrap gap-2">
                {selectedCert.details.skills.map((skill, index) => (
                  <li key={index} className="bg-gray-700 text-white text-sm px-3 py-1 rounded-full">{skill}</li>
                ))}
              </ul>
            </div>

            {selectedCert.projects && selectedCert.projects.length > 0 && (
              <div>
                <h4 className="text-xl font-bold mb-2">Projets liés</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectsForSelectedCert.map((project, index) => (
                    <div key={index} className="bg-white/10 border border-white/20 p-4 rounded-lg">
                      <h5 className="font-semibold text-white mb-2">{project.title}</h5>
                      <p className="text-sm text-gray-400">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        ) : null}
      </Modal>
    </div>
  );
}

export default App;