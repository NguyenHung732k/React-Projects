import React from 'react';

const Card = ({ image, title, description }) => {
    return (
        <div className="relative group w-full sm:w-80 h-60 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />

            {/* Shine Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
                <div className="shine-effect" />
            </div>

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    )
}

export default Card