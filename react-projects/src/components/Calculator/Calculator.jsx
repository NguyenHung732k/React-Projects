import React, { useState } from 'react'

const Calculator = () => {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  const handleClick = (value) => {
    setInput(prevInput => prevInput + value)
  }

  const handleClear = () => {
    setInput("")
    setResult("")
  }

  const handleClearValue = () => {
    setInput(input.slice(0, -1))
  }

  const handleCalculate = () => {
    try {
      setResult(eval(input))
      setInput("")

    } catch (e) {
      setResult("Error")
    }
  }

  return (
    <div className="w-screen h-screen flex justify0center items-center">
      <div className="w-96 mx-auto p-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <input
            type="text"
            value={input}
            className="w-full bg-gray-800 text-white border-none outline-none text-right text-xl mb-2 p-2"
            readOnly
          />
          <div className="text-right text-gray-400 text-lg mb-2">{result}</div>
          <div className="grid grid-cols-4 gap-2">
            <button onClick={() => handleClick('7')} className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-500 transition-colors">7</button>
            <button onClick={() => handleClick('8')} className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-500 transition-colors">8</button>
            <button onClick={() => handleClick('9')} className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-500 transition-colors">9</button>
            <button onClick={() => handleClick('/')} className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-400 transition-colors">/</button>

            <button onClick={() => handleClick('4')} className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-500 transition-colors">4</button>
            <button onClick={() => handleClick('5')} className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-500 transition-colors">5</button>
            <button onClick={() => handleClick('6')} className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-500 transition-colors">6</button>
            <button onClick={() => handleClick('*')} className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-400 transition-colors">*</button>

            <button onClick={() => handleClick('1')} className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-500 transition-colors">1</button>
            <button onClick={() => handleClick('2')} className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-500 transition-colors">2</button>
            <button onClick={() => handleClick('3')} className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-500 transition-colors">3</button>
            <button onClick={() => handleClick('-')} className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-400 transition-colors">-</button>

            <button onClick={handleClear} className="bg-red-500 text-white p-3 rounded-lg col-span-1 hover:bg-red-400 transition-colors">C</button>
            <button onClick={handleClearValue} className="bg-red-500 text-white p-3 rounded-lg col-span-1 hover:bg-red-400 transition-colors">CE</button>
            <button onClick={() => handleClick('0')} className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-500 transition-colors">0</button>
            <button onClick={() => handleClick('+')} className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-400 transition-colors">+</button>
            <button onClick={handleCalculate} className="bg-green-500 text-white p-3 rounded-lg col-span-4 hover:bg-green-400 transition-colors">=</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Calculator