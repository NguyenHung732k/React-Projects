import React, { useState } from 'react'
import { useEffect } from 'react'
import './ScrollIndicator.css'

const ScrollIndicator = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [scrollPercentage, setScrollPercentage] = useState(0)


    useEffect(() => {

        const fetchData = async () => {

            try {
                setLoading(true)

                const response = await fetch("https://jsonplaceholder.typicode.com/posts")
                const data = await response.json()

                if (data) {
                    setData(data)
                    setLoading(false)
                }
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])

    const handleScroll = () => {

        const scrollValue = document.body.scrollTop || document.documentElement.scrollTop

        const heigth =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        setScrollPercentage((scrollValue / heigth) * 100)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", () => { })
        }
    }, [])


    if (loading) {
        return <div>Loading data ! Pleaae wait</div>
    }



    return (
        <div>
            <div className="top-container">
                <div className="scroll-progress-tracking-container">
                    <div
                        className="current-progress-bar"
                        style={{ width: `${scrollPercentage}%` }}
                    ></div>
                </div>
                <h1>Scroll Indicator</h1>
            </div>
            <div className="data-container">
                {data && data.length > 0
                    ? data.map((dataItem) => <p>{dataItem.title}</p>)
                    : null}
            </div>
        </div>

    )
}

export default ScrollIndicator