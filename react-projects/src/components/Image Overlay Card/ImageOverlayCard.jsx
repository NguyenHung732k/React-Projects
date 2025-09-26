import React from 'react';
import ImageOverlay from './ImageOverlay'

const ImageOverlayCard = () => {
    const projects = [
        {
            src: 'https://source.unsplash.com/800x600/?design',
            title: 'UI/UX Design',
        },
        {
            src: 'https://source.unsplash.com/800x600/?technology',
            title: 'Tech Stack',
        },
        {
            src: 'https://source.unsplash.com/800x600/?branding',
            title: 'Brand Identity',
        },
        {
            src: 'https://source.unsplash.com/800x600/?app',
            title: 'Mobile App',
        },
        {
            src: 'https://source.unsplash.com/800x600/?code',
            title: 'Dev Project',
        },
        {
            src: 'https://source.unsplash.com/800x600/?creative',
            title: 'Creative Work',
        },
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <ImageOverlay
                    key={index}
                    imageSrc={project.src}
                    title={project.title}
                />
            ))}
        </div>
    )
}

export default ImageOverlayCard