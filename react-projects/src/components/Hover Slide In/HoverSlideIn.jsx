import React from 'react';
import TextImage from './TextImage'

const HoverSlideIn = () => {
    const images = [
        {
            id: 1,
            image: 'https://source.unsplash.com/random/1',
            title: 'Beautiful Landscape',
            description: 'A beautiful view of the mountains during sunset.',
        },
        {
            id: 2,
            image: 'https://source.unsplash.com/random/2',
            title: 'City Skyline',
            description: 'A city skyline at night, lit up beautifully.',
        },
        {
            id: 3,
            image: 'https://source.unsplash.com/random/3',
            title: 'Ocean Waves',
            description: 'Clear blue ocean waves crashing onto the shore.',
        },
        {
            id: 4,
            image: 'https://source.unsplash.com/random/4',
            title: 'Desert Sunrise',
            description: 'A breathtaking sunrise over the vast desert.',
        },
    ]

    return (
        <div className="w-screen h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {images.map((img) => (
                <TextImage
                    key={img.id}
                    image={img.image}
                    title={img.title}
                    description={img.description}
                />
            ))}
        </div>
    )
}

export default HoverSlideIn