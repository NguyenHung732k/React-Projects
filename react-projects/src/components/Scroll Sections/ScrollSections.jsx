import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx'

const sections = [
  {
    id: 1,
    title: 'Case Study 1',
    description: 'Innovative design and strategy for client success.',
    bg: 'https://source.unsplash.com/random/1600x900?sig=1',
  },
  {
    id: 2,
    title: 'Case Study 2',
    description: 'Seamless integration of modern UX principles.',
    bg: 'https://source.unsplash.com/random/1600x900?sig=2',
  },
  {
    id: 3,
    title: 'Case Study 3',
    description: 'Performance-focused development approach.',
    bg: 'https://source.unsplash.com/random/1600x900?sig=3',
  },
]

const ScrollSections = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const offsetTop = ref.offsetTop
          const offsetHeight = ref.offsetHeight

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveIndex(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative w-full h-[300vh] font-sans">
      {/* Background Layer */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden">
        {sections.map((section, index) => (
          <img
            key={section.id}
            src={section.bg}
            alt=""
            className={clsx(
              'absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out transform transition-transform scale-105',
              {
                'opacity-100 z-10 scale-100': activeIndex === index,
                'opacity-0 z-0': activeIndex !== index,
              }
            )}
          />
        ))}
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 z-20" />
      </div>

      {/* Scroll Indicator (Dots) */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 flex flex-col gap-3">
        {sections.map((_, index) => (
          <span
            key={index}
            className={clsx(
              'w-3 h-3 rounded-full transition-all duration-300',
              {
                'bg-white scale-110 shadow-lg': activeIndex === index,
                'bg-white/40': activeIndex !== index,
              }
            )}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-30">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="h-screen flex items-center justify-center sticky top-0 px-6"
          >
            <div className="bg-white/70 backdrop-blur-md p-10 rounded-xl shadow-xl max-w-2xl w-full text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">{section.title}</h2>
              <p className="text-lg text-gray-700">{section.description}</p>
              <button className="mt-4 px-6 py-2 rounded bg-gray-900 text-white hover:bg-gray-700 transition">
                View Case Study
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrollSections