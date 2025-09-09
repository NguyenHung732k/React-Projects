import React, { useEffect, useRef, useState } from "react";

const StickyImage = () => {
    const sectionsRef = useRef([])
    const [visibleSections, setVisibleSections] = useState([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute("data-index"))
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) =>
                            prev.includes(index) ? prev : [...prev, index]
                        )
                    }
                })
            },
            {
                threshold: 0.2,
            }
        )

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section)
        })

        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) observer.unobserve(section)
            })
        }
    }, [])

    return (
        <div className="w-screen h-screen">
            <div className="flex flex-col md:flex-row min-h-screen dark:bg-gray-900 bg-gray-50 transition-colors duration-300">

                {/* Sticky Image Section */}
                <div className="md:w-1/2 sticky top-0 h-screen overflow-hidden">
                    <div className="relative h-full w-full">
                        <img
                            src="https://source.unsplash.com/800x1000/?mountain,landscape"
                            alt="Sticky Visual"
                            className="w-full h-full object-cover rounded-none md:rounded-r-3xl shadow-2xl"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <h1 className="absolute bottom-8 left-8 text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg z-10">
                            Immersive Story
                        </h1>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="md:w-1/2 p-6 md:p-12 space-y-28">
                    {[...Array(4)].map((_, index) => (
                        <section
                            key={index}
                            data-index={index}
                            ref={(el) => (sectionsRef.current[index] = el)}
                            className={`bg-white dark:bg-gray-800/80 backdrop-blur-md shadow-lg rounded-2xl p-8 transform transition-all duration-700 ease-out
              ${visibleSections.includes(index)
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-12"
                                }`}
                        >
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                                Section {index + 1}
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                sit amet accumsan tortor. Pellentesque consequat, velit eu
                                sagittis dictum, arcu felis laoreet nisi, in pulvinar arcu orci
                                non leo. Suspendisse potenti.
                            </p>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StickyImage