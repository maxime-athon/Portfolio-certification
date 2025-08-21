// src/components/AudioPlayer.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Commencer en mode silencieux

  
  const audioSrc = "/assets/sound.mp3";

  // Effet pour gérer la lecture/pause et le silence
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      if (isPlaying && !isMuted) {
        audioRef.current.play().catch(e => console.error("Erreur de lecture audio:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, isMuted]);

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
    if (!isPlaying) {
      setIsMuted(false); // Le son est activé si on lance la lecture
    }
  };

  const toggleMute = () => {
    setIsMuted(prev => !prev);
    if (!isMuted) { // Si on met en silence, on met en pause
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-4 right-4 z-50 flex space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-2 shadow-lg"
    >
      <audio ref={audioRef} src={audioSrc} loop />

      <button
        onClick={togglePlayPause}
        className="p-2 rounded-full hover:bg-white/30 transition-all text-white"
        aria-label={isPlaying ? "Mettre en pause" : "Jouer"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      <button
        onClick={toggleMute}
        className="p-2 rounded-full hover:bg-white/30 transition-all text-white"
        aria-label={isMuted ? "Activer le son" : "Désactiver le son"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </motion.div>
  );
};

export default AudioPlayer;