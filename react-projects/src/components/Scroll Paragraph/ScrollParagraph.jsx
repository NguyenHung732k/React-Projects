import React, { useEffect, useRef, useState } from "react";

const ScrollParagraph = ({
    text = `
  The wind whispered across the dunes.
  Shadows stretched long over the horizon.
  The first light touched the sand, painting it gold.
  Each grain shimmered with memory and promise.
  A new dawn rose, and so did hope.
  `,
    delayStep = 180,
    threshold = 0.4,
    direction = "up",
    className = "",
}) => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold }
        )

        const el = containerRef.current
        if (el) observer.observe(el)
        return () => observer.disconnect()
    }, [threshold])

    const lines = text.trim().split("\n").filter(Boolean)

    const translateMap = {
        up: "translate-y-6",
        down: "-translate-y-6",
        left: "translate-x-6",
        right: "-translate-x-6",
    }

    return (
        <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col justify-center items-center px-8 py-24">
            <div className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12 text-center leading-tight">
                The Desert Story
            </h2>


            <div
                ref={containerRef}
                className={`relative overflow-hidden mx-auto max-w-3xl ${className}`}
            >
                {lines.map((line, i) => (
                    <p
                        key={i}
                        className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] 
            text-lg md:text-xl leading-relaxed mb-4 tracking-wide
            ${isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${translateMap[direction]}`}
          `}
                        style={{
                            transitionDelay: `${i * delayStep}ms`,
                        }}
                    >
                        {line}
                    </p>
                ))}
            </div>

            <div className="absolute bottom-8 text-sm text-gray-400 tracking-widest uppercase">
                Scroll to Continue ↓
            </div>
        </section>
    )
}

export default ScrollParagraph