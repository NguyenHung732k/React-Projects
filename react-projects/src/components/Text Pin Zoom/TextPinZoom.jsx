import { useEffect, useRef, useState } from "react";

const TextPinZoom = ({
    text = "Scroll to Zoom",
    minScale = 1,
    maxScale = 2.5,
    fade = true,
    progressBar = true,
}) => {
    const containerRef = useRef(null)
    const [progress, setProgress] = useState(0)

    // Scroll handler to calculate progress based on scroll position
    useEffect(() => {
        const el = containerRef.current

        const handleScroll = () => {
            if (!el) return
            const rect = el.getBoundingClientRect()
            const viewportHeight = window.innerHeight

            // Define scroll progress: 0 -> 1 as the user scrolls
            const start = viewportHeight * 0.1
            const end = viewportHeight * 0.9
            const raw = 1 - (rect.top - start) / (end - start)
            const clamped = Math.min(1, Math.max(0, raw))
            setProgress(clamped)
        }

        const onScroll = () => requestAnimationFrame(handleScroll)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const scale = minScale + (maxScale - minScale) * progress
    const opacity = fade ? 1 - progress : 1

    return (
        <>
            <section className="relative w-full h-[250vh] bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
                {progressBar && (
                    <div
                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-600"
                        style={{
                            transform: `scaleX(${progress})`,
                            transformOrigin: "left",
                            transition: "transform 0.1s ease-out",
                        }}
                    />
                )}
                <div
                    ref={containerRef}
                    className="sticky top-0 flex items-center justify-center h-screen transition-all"
                >
                    <h1
                        className="text-white font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-shadow-lg transition-all"
                        style={{
                            transform: `scale(${scale})`,
                            opacity,
                        }}
                    >
                        {text}
                    </h1>
                </div>
            </section>
            <section className="p-20 text-white bg-black">
                <p>Scroll down to see more content...</p>
            </section>
        </>
    )
}

export default TextPinZoom