import React from 'react';

const PixelImage = ({
    src,
    alt,
    grayscale = false,
    width = 'w-72',
    height = 'h-72',
    transitionDuration = 300,
    rounded = true,
    className = '',
}) => {
    const durationClass = `duration-[${transitionDuration}ms]`;

    return (
        <div
            className={`
        group relative overflow-hidden
        ${width} ${height}
        ${rounded ? 'rounded-lg' : ''}
        ${className}
        shadow-md hover:shadow-xl transition-shadow
        cursor-pointer
      `}
            role="img"
            aria-label={alt}
        >
            {/* Pixelated Layer */}
            <img
                src={src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className={`
          absolute inset-0 w-full h-full object-cover
          scale-150 group-hover:scale-100
          image-render-pixelated
          ${grayscale ? 'grayscale group-hover:grayscale-0' : ''}
          opacity-100 group-hover:opacity-0
          transition-all ease-in-out ${durationClass}
          blur-sm group-hover:blur-0
        `}
            />

            {/* Clear Image Layer */}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className={`
          absolute inset-0 w-full h-full object-cover
          opacity-0 group-hover:opacity-100
          transition-opacity ease-in-out ${durationClass}
        `}
            />

            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
        </div>
    )
}


export default PixelImage