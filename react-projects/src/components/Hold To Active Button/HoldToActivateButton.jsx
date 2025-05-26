import React, { useState, useRef, useEffect } from "react"
import "./HoldToActivateButton.css"

const HoldToActivateButton = () => {
  const [isHolding, setIsHolding] = useState(false)
  const [progress, setProgress] = useState(0)
  const [shake, setShake] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const requestRef = useRef(null)
  const startTimeRef = useRef(null)
  const circleRef = useRef(null)

  const radius = 28
  const circumference = 2 * Math.PI * radius
  const holdDuration = 1500
  const label = "Hold"
  const doneLabel = "Done"


  const resetProgress = () => {
    setProgress(0)
    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset = circumference
    }
  }

  const startHold = () => {
    if (isHolding || confirmed) return
    setIsHolding(true)
    startTimeRef.current = performance.now()

    const animate = (now) => {
      const elapsed = now - startTimeRef.current
      const pct = Math.min((elapsed / holdDuration) * 100, 100)
      setProgress(pct)

      const offset = circumference - (pct / 100) * circumference
      if (circleRef.current) {
        circleRef.current.style.strokeDashoffset = offset
      }

      if (pct < 100) {
        requestRef.current = requestAnimationFrame(animate)
      } else {
        setIsHolding(false)
        setConfirmed(true)
        resetProgress()

        // Optional: Reset button after a few seconds
        setTimeout(() => setConfirmed(false), 2000)
      }
    }

    requestRef.current = requestAnimationFrame(animate)
  }

  const cancelHold = () => {
    if (!isHolding) return
    setIsHolding(false)
    cancelAnimationFrame(requestRef.current)
    resetProgress()
    setShake(true)
    setTimeout(() => setShake(false), 300)
  }

  useEffect(() => {
    return () => cancelAnimationFrame(requestRef.current)
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault()
      startHold()
    }
  }

  const handleKeyUp = (event) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault()
      cancelHold()
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-20 h-20 select-none group">
        {/* SVG Circular Progress */}
        {!confirmed && (
          <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r={radius}
              strokeWidth="4"
              className="text-gray-300"
              stroke="currentColor"
              fill="none"
            />
            <circle
              ref={circleRef}
              cx="32"
              cy="32"
              r={radius}
              strokeWidth="4"
              className="text-blue-500 transition-all"
              stroke="currentColor"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
            />
          </svg>
        )}

        {/* Button */}
        <button
          onMouseDown={startHold}
          onMouseUp={cancelHold}
          onMouseLeave={cancelHold}
          onTouchStart={startHold}
          onTouchEnd={cancelHold}
          onTouchCancel={cancelHold}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          className={`w-full h-full font-semibold rounded-full shadow-lg 
          focus:outline-none relative overflow-hidden transition-transform duration-150 
          flex items-center justify-center active:scale-95 
          ${shake ? "shake" : ""} 
          ${confirmed ? "bg-green-600 scale-110 text-white animate-success-pop" : "bg-blue-600 text-white"}`}
          aria-label={confirmed ? doneLabel : label}
        >
          <div className="flex flex-col items-center space-y-1 pointer-events-none">
            {confirmed ? (
              <>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
                <span className="text-sm">{doneLabel}</span>
              </>
            ) : (
              <>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                <span className="text-sm">{label}</span>
              </>
            )}
          </div>
          <span className="absolute inset-0 bg-black opacity-0 group-active:opacity-10 rounded-full transition duration-300" />
        </button>
      </div>
    </div>
  )
}

export default HoldToActivateButton