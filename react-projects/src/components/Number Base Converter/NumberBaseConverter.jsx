import React, { useState } from 'react'

const NumberBaseConverter = () => {

    const [format, setFormat] = useState("binary")
    const [input, setInput] = useState("")
    const [decimal, setDecimal] = useState('')
    const [binary, setBinary] = useState('')
    const [octal, setOctal] = useState('')
    const [hexadecimal, setHexadecimal] = useState('')
    const [integer, setInteger] = useState(' ')



    const handleConvert = () => {
        let decimalValue
        switch (format) {
            case 'binary':
                decimalValue = parseInt(input, 2)
                break
            case 'octal':
                decimalValue = parseInt(input, 8)
                break
            case 'hexadecimal':
                decimalValue = parseInt(input, 16)
                break
            default:
                decimalValue = parseInt(input, 10)
        }
        if (format !== 'decimal') setDecimal(decimalValue)

        setInteger(Math.floor(decimalValue))

        setBinary((Math.floor(decimalValue)).toString(2))

        setOctal((Math.floor(decimalValue)).toString(8))

        setHexadecimal((Math.floor(decimalValue)).toString(16).toUpperCase())

    }

    const handleChange = (event) => {
        if (format === 'decimal') {
            setDecimal(event.target.value)
            setInput(event.target.value)
        } else {
            setInput(event.target.value)
        }
    }



    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-8">
            <div className="w-2/6 flex gap-2">
                <form className="w-40 flex justify-center">
                    <select
                        value={format}
                        onChange={(event) => setFormat(event.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                        <option value="binary">Binary</option>
                        <option value="hexadecimal">Hexadecimal</option>
                        <option value="decimal">Decimal</option>
                        <option value="octal">Octal</option>
                    </select>
                </form>

                <div class="w-full flex gap-2">
                    <input
                        value={format === 'decimal' ? decimal : input}
                        onChange={(event) => handleChange(event)}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                        placeholder={`Input ${format} number`}
                    />

                    <button
                        onClick={handleConvert}
                        type="button"
                        className="w-20 flex justify-center items-center text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800"
                    >
                        Convert
                    </button>
                </div>
            </div>



            <div className="w-2/6 p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="flex justify-between items-center">
                    <p>Integer Number:</p>
                    <p>{integer}</p>
                </div>

                <div className="flex justify-between items-center">
                    <p>{format === 'binary' ? "Decimal" : "Binary"} Format base-{format === 'binary' ? "10" : "2"} of integer:</p>
                    <p>{format === 'binary' ? decimal : binary}</p>
                </div>

                <div className="flex justify-between items-center">
                    <p>{format === 'octal' ? "Decimal" : "Octal"} Format base-{format === 'octal' ? "10" : "8"} of integer:</p>
                    <p>{format === 'octal' ? decimal : octal}</p>
                </div>

                <div className="flex justify-between items-center">
                    <p>{format === 'hexadecimal' ? "Decimal" : "Hexadecimal"} Format base-{format === 'hexadecimal' ? "10" : "16"} of integer:</p>
                    <p>{format === 'hexadecimal' ? decimal : hexadecimal}</p>
                </div>

            </div>

        </div>
    )
}

export default NumberBaseConverter