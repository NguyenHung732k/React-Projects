import React from 'react';
import { useInView } from 'react-intersection-observer'

const icons = [
  '🍎', '🍌', '🍇', '🍓', '🍉'
]

const IconChain = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-8">
      {icons.map((icon, index) => (
        <FloatingIcon key={index} icon={icon} delay={index * 300} />
      ))}
    </div>
  )
}

const FloatingIcon = ({ icon, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the icon is in view
  })

  return (
    <div
      ref={ref}
      className={`text-7xl ${inView ? 'opacity-100 translate-y-0 scale-105' : 'opacity-0 translate-y-10 scale-90'} transition-all duration-1000 delay-${delay} ease-out transform`}
      style={{
        animation: inView ? `bounceUp 1s ease-out ${delay}ms, popIn 0.5s ease-out ${delay}ms` : 'none',
      }}
    >
      {icon}
    </div>
  )
}

export default IconChain