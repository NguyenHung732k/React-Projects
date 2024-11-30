import React, { useState, useEffect } from 'react'

const Timer = ({ sale, onSaleStart }) => {

  const getTimeLeft = (date) => {
    const total = Date.parse(date) - Date.now()
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const days = Math.floor(total / (1000 * 60 * 60 * 24))

    return { total, days, hours, minutes, seconds }
  }

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(sale.date))

  useEffect(() => {
    const interval = setInterval(() => {
      const time = getTimeLeft(sale.date)
      setTimeLeft(time)

      if (time.total <= 0) {
        clearInterval(interval)
        onSaleStart(sale.url)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [sale.date, sale.url, onSaleStart])

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-8 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 rounded-xl shadow-lg text-white max-w-lg mx-auto">
      <h2 className="text-3xl font-semibold">{sale.name}</h2>
      <p className="text-lg text-center">{sale.description}</p>

      <div className="grid grid-cols-4 gap-6 text-xl sm:text-2xl md:text-3xl">
        <div className="bg-blue-800 p-5 rounded-lg shadow-xl flex flex-col items-center">
          <span className="font-bold text-3xl">{timeLeft.days}</span>
          <span>Days</span>
        </div>
        <div className="bg-blue-800 p-5 rounded-lg shadow-xl flex flex-col items-center">
          <span className="font-bold text-3xl">{timeLeft.hours}</span>
          <span>Hours</span>
        </div>
        <div className="bg-blue-800 p-5 rounded-lg shadow-xl flex flex-col items-center">
          <span className="font-bold text-3xl">{timeLeft.minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="bg-blue-800 p-5 rounded-lg shadow-xl flex flex-col items-center">
          <span className="font-bold text-3xl">{timeLeft.seconds}</span>
          <span>Seconds</span>
        </div>
      </div>

      <div className={`mt-6 transition-opacity ${timeLeft.total <= 0 ? 'opacity-0' : 'opacity-100'}`}>
        <span className="font-bold text-lg">Hurry! Time is ticking down...</span>
      </div>
    </div>
  )
}

export default Timer