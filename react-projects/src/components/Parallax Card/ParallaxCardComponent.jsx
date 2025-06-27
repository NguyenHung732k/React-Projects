import React, { useRef } from 'react'
import { useSpring, animated as a } from '@react-spring/web'

const ParallaxCardComponent = ({
  image,
  layer1,
  layer2,
  title,
  subtitle,
  tag,
}) => {
  const ref = useRef(null)

  const [style, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    config: { mass: 5, tension: 400, friction: 60 },
  }))

  const calcTilt = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 15,
    (x - rect.left - rect.width / 2) / 15,
    1.06,
  ]

  const handleMouseMove = (event) => {
    const rect = ref.current.getBoundingClientRect()
    const [x, y, s] = calcTilt(event.clientX, event.clientY, rect)
    api.start({ rotateX: x, rotateY: y, scale: s })
  }

  const handleMouseLeave = () => {
    api.start({ rotateX: 0, rotateY: 0, scale: 1 })
  }

  return (
    <a.div
      ref={ref}
      className="w-80 h-96 rounded-3xl overflow-hidden relative cursor-pointer select-none"
      style={{ perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <a.div
        style={style}
        className="w-full h-full bg-gray-800 rounded-3xl shadow-xl relative transform-style-preserve-3d transition-all duration-300"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            transform: 'translateZ(0px)',
          }}
        />

        {/* Layer 1 */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 pointer-events-none"
          style={{
            backgroundImage: `url(${layer1})`,
            transform: 'translateZ(20px)',
          }}
        />

        {/* Layer 2 */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none"
          style={{
            backgroundImage: `url(${layer2})`,
            transform: 'translateZ(40px)',
          }}
        />

        {/* Content */}
        <div className="absolute bottom-6 left-6 right-6 z-30 text-white space-y-2">
          {tag && (
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs backdrop-blur-md">
              {tag}
            </span>
          )}
          <h3 className="text-xl font-semibold drop-shadow-md">{title}</h3>
          {subtitle && <p className="text-sm text-white/80">{subtitle}</p>}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none rounded-3xl" />
      </a.div>
    </a.div>
  )
}

export default ParallaxCardComponent