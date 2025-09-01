import { useRef, useState } from "react";
import { motion } from "framer-motion"

const TapAndHoldButton = () => {
  const holdDuration = 1000
  const [progress, setProgress] = useState(0)
  const [isHolding, setIsHolding] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const timeoutRef = useRef(null)
  const intervalRef = useRef(null)

  const startHold = () => {
    setIsHolding(true)
    setShowTooltip(true)
    const start = Date.now()

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start
      const percentage = Math.min((elapsed / holdDuration) * 100, 100)
      setProgress(percentage)
    }, 16)

    timeoutRef.current = setTimeout(() => {
      console.log("✅ Secondary action triggered")
      // Secondary action code here
      stopHold(true)
    }, holdDuration)
  }

  const stopHold = (completed = false) => {
    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);
    setIsHolding(false);
    setShowTooltip(false);
    setProgress(0);

    if (!completed) {
      console.log("➡️ Primary action triggered");
      // Primary action code here
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div
        className="relative w-24 h-24"
        onMouseDown={startHold}
        onMouseUp={() => stopHold()}
        onMouseLeave={() => isHolding && stopHold()}
        onTouchStart={startHold}
        onTouchEnd={() => stopHold()}
      >
        {/* Icon Button */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md shadow-xl flex items-center justify-center text-3xl text-white ring-2 ring-white/20 hover:scale-105 active:scale-95 transition-all"
          animate={{
            boxShadow: isHolding
              ? "0 0 20px #3b82f6, 0 0 40px #3b82f6"
              : "0 0 10px rgba(255,255,255,0.2)",
          }}
        >
          ⚙️
        </motion.div>

        {/* Circular Progress */}
        <svg
          className="absolute inset-0 w-full h-full rotate-[-90deg]"
          viewBox="0 0 36 36"
        >
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="3"
          />
          <motion.circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeDasharray="100, 100"
            strokeDashoffset={100 - progress}
            strokeLinecap="round"
            initial={false}
            animate={{ strokeDashoffset: 100 - progress }}
            transition={{ duration: 0.1 }}
          />
        </svg>

        {/* Tooltip Text */}
        {showTooltip && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-3 py-1 text-sm bg-blue-600 text-white rounded shadow-md whitespace-nowrap">
            Hold to open settings
          </div>
        )}
      </div>
    </div>
  )
}

export default TapAndHoldButton