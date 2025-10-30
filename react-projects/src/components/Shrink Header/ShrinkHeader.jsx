import { useEffect, useState } from "react";

const ShrinkingHeader = () => {
    const [scale, setScale] = useState(1)
    const [opacity, setOpacity] = useState(1)
    const [translateY, setTranslateY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const shrinkEnd = 300
            const progress = Math.min(scrollY / shrinkEnd, 1)

            setScale(1 - progress * 0.3)
            setOpacity(1 - progress * 0.4)
            setTranslateY(progress * 40)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-white text-gray-800">

            <header className="relative h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
                {/* Parallax Background */}
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center transition-transform duration-200 ease-out"
                    style={{
                        transform: `scale(${1 + (1 - scale) * 0.3}) translateY(${translateY * 0.5}px)`,
                        opacity: opacity,
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 backdrop-blur-sm" />

                <h1
                    className="relative z-10 text-6xl md:text-7xl font-extrabold text-gray-800 text-center tracking-tight transition-transform duration-200 ease-out"
                    style={{
                        transform: `scale(${scale}) translateY(-${translateY}px)`,
                        opacity: opacity,
                    }}
                >
                    The Art of Slowing Down
                </h1>

                <p
                    className="relative z-10 mt-4 text-gray-600 text-lg md:text-xl transition-opacity duration-300 ease-out"
                    style={{ opacity }}
                >
                    Finding clarity in a fast-paced world
                </p>

                <div
                    className="absolute bottom-10 animate-bounce flex items-center justify-center text-gray-700"
                    style={{ opacity: opacity }}
                >
                    <span className="text-xl">↓</span>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 py-20 text-lg leading-relaxed space-y-8">
                <p>
                    Life moves fast. We scroll, swipe, and refresh — but rarely pause. In this
                    article, we'll explore the value of slowing down and rediscovering the present.
                </p>

                <p>
                    Slowness is not laziness. It's a conscious choice to experience things
                    deeply — to allow thought, emotion, and creativity the time they deserve.
                </p>

                <p>
                    As you move through this article, take a deep breath. Let the words
                    settle. You're already slowing down.
                </p>

                <p>
                    It's easy to get caught up in the rush, but every moment offers a chance to
                    be present, to breathe, to feel.
                </p>

                <p>
                    Embrace the power of stillness — a powerful antidote to the noise.
                </p>
            </main>
        </div>
    )
}

export default ShrinkingHeader