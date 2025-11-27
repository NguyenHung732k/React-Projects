import React, { useState } from 'react'
import { motion, useMotionValue, useSpring } from "framer-motion"

const ElasticSnapDrag = () => {
  // Motion values for x and y axis (tracking the drag position)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring configuration for smooth elastic movement
  const springX = useSpring(x, {
    stiffness: 350, // stiffer = snappier
    damping: 20,    // lower = more oscillation
    mass: 0.4,      // controls the weightiness of the drag
  })

  const springY = useSpring(y, {
    stiffness: 350,
    damping: 20,
    mass: 0.4,
  })

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center justify-center text-white">
      
      <motion.div
        drag
        dragElastic={0.55}  // Elastic behavior (0–1, more stretch as value increases)
        dragMomentum={false} // Prevents momentum-based movement after drag
        style={{ x: springX, y: springY }} // Applying spring-driven drag values
        onDragStart={() => { 
          document.body.style.cursor = "grabbing"; // Change cursor to grabbing on drag start
        }}
        onDragEnd={() => { 
          x.set(0) // Reset to initial position
          y.set(0)
          document.body.style.cursor = "default" // Reset cursor on drag end
        }}
        whileHover={{ scale: 1.05 }}  // Slightly scale up on hover
        whileTap={{ scale: 0.95 }}   // Scale down when pressed
        animate={{ rotate: x.get() / 25 }} // Apply subtle rotation based on drag
        className="
          w-32 h-32 rounded-3xl
          bg-gradient-to-br from-blue-500 to-blue-700
          shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] 
          backdrop-blur-xl
          cursor-grab active:cursor-grabbing
          flex items-center justify-center
          select-none font-semibold text-lg
          transition-all duration-200
        "
      >
        Drag Me
      </motion.div>
    </div>
  )
}


export default ElasticSnapDrag