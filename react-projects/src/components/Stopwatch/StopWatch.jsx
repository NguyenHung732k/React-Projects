import React, { useEffect, useState } from 'react'

import './StopWatchStyles.css'

const StopWatch = () => {

    const [active, setActive] = useState(false)
    const [stop, setStop] = useState(true)
    const [time, setTime] = useState(0)

    useEffect(() => {
        let interval = null

        if (active && stop === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => {
            clearInterval(interval)
        }

    }, [active, stop])


    const minutes = Math.floor(time / 60000).toString().padStart(2, "0");
    const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, "0");
    const milliseconds = (time % 1000).toString().padStart(3, "0");

    const handleStart = () => {
        setActive(true);
        setStop(false);
    };

    const handlePauseResume = () => {
        setStop(!stop);
    };

    const handleReset = () => {
        setActive(false);
        setTime(0);
    };


    return (
        <div className="stopwatch-container">
            <div className="stopwatch">
                <div className="stopwatch-timer">
                    <span className="digits">{minutes}: </span>
                    <span className="digits">{seconds}: </span>
                    <span className="digits">{milliseconds}</span>
                </div>
                <div className="stopwatch-button-container">
                    {active ?
                        <div className="button-wrapper">
                            <div className="stopwatch-button"
                                onClick={handleReset}>
                                Reset
                            </div>
                            <div className="stopwatch-button"
                                onClick={handlePauseResume}>
                                {stop ? "Resume" : "Pause"}
                            </div>
                        </div>
                        :
                        <div className="stopwatch-button"
                            onClick={handleStart}>
                            Start
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default StopWatch