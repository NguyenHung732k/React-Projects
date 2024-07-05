import React, { useEffect, useState } from 'react'

import './ColorPaletteStyles.css'

const ColorPalette = () => {

    const [color, setColor] = useState('')
    const [input, setInput] = useState('')
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${color}&count=5`)
                if (!response.ok) throw new Error(response.statusText)

                const result = await response.json()

                setData(result)
                setError(null)

            } catch (error) {
                setError(`${error}`)
            }
        }
        fetchData()
    }, [color])


    const handleInput = () => {

        let hexRegex = new RegExp(/([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
        // let RGBRegex = new RegExp(/^rgb\((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\)$/)

        if (hexRegex.test(input) === true) {
            setColor(input)
        }
        else {
            alert("Input HEX color code")
        }

    }



    return (
        <div className="color-palette-container">
            <div className="palette-search">
                <div className="palette-search-inner">
                    <div className="palette-search-container">
                        <div className="palette-input-container">
                            <input onChange={(event) => setInput(event.target.value)} value={input} placeholder="Input HEX Color Code" />
                        </div>
                        <button className="palette-search-icon" onClick={handleInput}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {error ? <h3>{error}</h3> : null}

            <div className="palette-card-container">
                {data && data.colors && data.colors.length && data.colors.map((color, index) => (
                    <div className="palette-card" key={index}>
                        <div className="palette-card-color" style={{ backgroundColor: color.hex.value }}></div>

                        <div className="palette-card-info">{color.hex.value}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ColorPalette