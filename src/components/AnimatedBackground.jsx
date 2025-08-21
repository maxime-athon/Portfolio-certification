import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  // Génère les formes une seule fois pour optimiser les performances
  const shapes = useMemo(() => {
    const shapeCount = 50;
    const allShapes = [];
    const shapeTypes = ['circle', 'zero', 'bubble'];

    for (let i = 0; i < shapeCount; i++) {
      const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      const size = Math.floor(Math.random() * 30) + 20; // 20px à 50px
      const startX = Math.random() * 100; // 0% à 100%
      const startY = Math.random() * 100; // 0% à 100%
      const duration = Math.random() * 10 + 15; // 15s à 25s
      const delay = Math.random() * 5; // 0s à 5s
      const colors = {
        circle: 'bg-indigo-600',
        zero: 'text-violet-500',
        bubble: 'bg-turquoise-400',
      };

      allShapes.push({
        id: i,
        type,
        size,
        color: colors[type],
        startX,
        startY,
        duration,
        delay,
      });
    }
    return allShapes;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full opacity-30 ${shape.color}`}
          initial={{
            x: `${shape.startX}vw`,
            y: `${shape.startY}vh`,
            opacity: 0,
          }}
          animate={{
            x: [`${shape.startX}vw`, `${shape.startX + 20}vw`],
            y: [`${shape.startY}vh`, `${shape.startY + 20}vh`],
            opacity: [0, 0.4, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: shape.delay,
          }}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            // Styles spécifiques au type de forme
            ...(shape.type === 'bubble' && {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(5px)'
            }),
            ...(shape.type === 'zero' && {
              borderRadius: '0px'
            }),
          }}
        >
          {shape.type === 'zero' && (
            <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-7xl`}>
              0
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedBackground;