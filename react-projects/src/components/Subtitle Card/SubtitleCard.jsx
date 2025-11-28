import React from 'react'

const SubtitleCard = ({ image, title, subtitle }) => {
  return (
    <div className="group relative w-72 h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500">
      
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Darken Layer */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Glass Overlay */}
      <div className="
        absolute bottom-0 w-full p-5
        bg-white/10 backdrop-blur-md
        translate-y-6 opacity-0
        group-hover:translate-y-0 group-hover:opacity-100
        transition-all duration-700 ease-out
      ">
        {/* Title */}
        <h3 className="
          text-white text-xl font-semibold tracking-tight
          translate-y-1 opacity-90
          group-hover:translate-y-0 group-hover:opacity-100
          transition-all duration-500
        ">
          {title}
        </h3>

        {/* Subtitle Fade-Up */}
        <p className="
          text-white/80 text-sm mt-1
          opacity-0 translate-y-3
          transition-all duration-700 delay-100 ease-out
          group-hover:opacity-100 group-hover:translate-y-0
        ">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default SubtitleCard