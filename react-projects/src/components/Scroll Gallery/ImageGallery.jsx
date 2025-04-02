import React from 'react'
import { useInView } from 'react-intersection-observer'

const images = [
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
  'https://placehold.co/600x400',
]

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {images.map((image, index) => (
        <ImageItem key={index} image={image} />
      ))}
    </div>
  )
}

const ImageItem = ({ image }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <div
      ref={ref}
      className={`transition-all transform rounded-lg shadow-lg ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} duration-700 ease-in-out overflow-hidden`}
    >
      <img
        src={image}
        alt="Gallery image"
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
      />
    </div>
  )
}

export default ImageGallery