import React, { useEffect, useRef, useState } from "react";
import "./ScrollMaskTitle.css"

const ScrollMaskTitle = ({
    title = "Scroll Title",
    direction = "left-to-right",
    gradientStart = "#3b82f6",
    gradientEnd = "#ec4899",
}) => {
    const ref = useRef()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return
            const { top, bottom } = ref.current.getBoundingClientRect()
            const inView = top <= window.innerHeight && bottom >= 0
            if (inView) setVisible(true)
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-gray-50 font-sans scroll-smooth">
            <div className="flex flex-col items-center space-y-32 py-32">
                <div ref={ref} className="relative overflow-hidden px-4">
                    <h1
                        className={`
          text-4xl md:text-6xl font-extrabold tracking-tight leading-tight
          transition-opacity duration-700 ease-out text-transparent bg-clip-text text-center
          ${visible ? (direction === "left-to-right" ? "mask-left-to-right" : "mask-right-to-left") : "opacity-0"}
        `}
                        style={{
                            backgroundImage: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
                            WebkitMaskImage: `linear-gradient(to right, black 50%, transparent 50%)`,
                            maskImage: `linear-gradient(to right, black 50%, transparent 50%)`,
                            WebkitMaskSize: "200% 100%",
                            maskSize: "200% 100%",
                        }}
                    >
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default ScrollMaskTitle