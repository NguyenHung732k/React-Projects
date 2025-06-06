import React, { useState, useRef } from 'react'

const Tooltip = ({ children, text, direction = 'top' }) => {
  const [visible, setVisible] = useState(false)
  const timeoutRef = useRef(null)
  const tooltipId = `tooltip-${Math.random().toString(36).substr(2, 9)}`

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => setVisible(true), 300)
  }

  const hideTooltip = () => {
    clearTimeout(timeoutRef.current)
    setVisible(false)
  }

  const directionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-3 animate-slide-up',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-3 animate-slide-down',
    left: 'right-full top-1/2 -translate-y-1/2 mr-3 animate-slide-left',
    right: 'left-full top-1/2 -translate-y-1/2 ml-3 animate-slide-right',
  }

  const arrowDirection = {
    top: 'bottom-[-4px] left-1/2 -translate-x-1/2 border-t-gray-800',
    bottom: 'top-[-4px] left-1/2 -translate-x-1/2 border-b-gray-800',
    left: 'right-[-4px] top-1/2 -translate-y-1/2 border-l-gray-800',
    right: 'left-[-4px] top-1/2 -translate-y-1/2 border-r-gray-800',
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      onClick={hideTooltip}
    >
      <div tabIndex={0} aria-describedby={tooltipId}>
        {children}
      </div>

      <div
        id={tooltipId}
        role="tooltip"
        className={`absolute z-50 px-3 py-2 text-sm text-white bg-gray-800 rounded-md shadow-md whitespace-nowrap
        pointer-events-none transition-opacity duration-300 ease-out
        ${directionClasses[direction]} 
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
      >
        {text}
        {/* Tooltip arrow */}
        <div
          className={`absolute w-0 h-0 border-8 border-transparent ${arrowDirection[direction]}`}
        />
      </div>
    </div>
  )
}

export default Tooltip