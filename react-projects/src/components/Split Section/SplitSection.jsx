import React, { useEffect, useRef, useState } from 'react';

const SplitSection = () => {
    const sectionRef = useRef(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting)
            },
            { threshold: 0.5 }
        )

        const section = sectionRef.current
        if (section) observer.observe(section)

        return () => {
            if (section) observer.unobserve(section)
        }
    }, [])

    return (
        <div className="space-y-32">
            <div className="h-screen bg-gray-100 flex items-center justify-center">
                <h1 className="text-5xl font-bold">Scroll Down to See the Reveal</h1>
            </div>
            <section
                ref={sectionRef}
                className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-black"
            >
                {/* Background Overlay */}
                <div
                    className={`absolute inset-0 bg-gradient-to-r from-purple-700/70 to-indigo-700/70 backdrop-blur-xl transition-all duration-700 ease-out ${inView ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                        }`}
                />

                {/* Panels Container */}
                <div className="relative z-10 flex flex-col md:flex-row w-11/12 max-w-6xl h-[500px] md:h-96">
                    {/* Left Panel */}
                    <div
                        className={`w-full md:w-1/2 bg-white/90 rounded-lg p-8 m-2 shadow-2xl backdrop-blur-md transform transition-transform duration-700 ease-in-out ${inView ? 'md:-translate-x-1/2' : 'translate-x-0'
                            }`}
                    >
                        <h2
                            className={`text-3xl font-extrabold text-gray-800 mb-4 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                        >
                            Left Panel
                        </h2>
                        <p
                            className={`text-gray-600 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                        >
                            This is the left content. It appears with a fade and slide effect.
                        </p>
                    </div>

                    {/* Right Panel */}
                    <div
                        className={`w-full md:w-1/2 bg-white/90 rounded-lg p-8 m-2 shadow-2xl backdrop-blur-md transform transition-transform duration-700 ease-in-out ${inView ? 'md:translate-x-1/2' : 'translate-x-0'
                            }`}
                    >
                        <h2
                            className={`text-3xl font-extrabold text-gray-800 mb-4 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                        >
                            Right Panel
                        </h2>
                        <p
                            className={`text-gray-600 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                        >
                            This is the right content. It fades in after the split animation.
                        </p>
                    </div>
                </div>
            </section>

            <div className="h-screen bg-gray-900 text-white flex items-center justify-center">
                <h1 className="text-4xl font-bold">Scroll Back Up</h1>
            </div>
        </div>
    )
}

export default SplitSection