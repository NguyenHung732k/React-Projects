import React, { useEffect, useRef } from 'react';
import './Flip.css'

const FlipUnit = ({ digit, previousDigit, label }) => {
    const flipRef = useRef(null)

    useEffect(() => {
        if (digit !== previousDigit) {
            flipRef.current?.classList.add('flip')
            const timeout = setTimeout(() => {
                flipRef.current?.classList.remove('flip')
            }, 700)
            return () => clearTimeout(timeout)
        }
    }, [digit, previousDigit])

    return (
        <div className="w-[4.5rem] h-[6rem] mx-1 perspective relative">
            <div ref={flipRef} className="flip-card">
                <div className="flip-inner">
                    <div className="flip-front">{previousDigit}</div>
                    <div className="flip-back">{digit}</div>
                </div>
            </div>
            <div className="absolute -bottom-6 w-full text-center text-xs text-slate-300 uppercase tracking-widest">
                {label}
            </div>
        </div>
    )
}

export default FlipUnit