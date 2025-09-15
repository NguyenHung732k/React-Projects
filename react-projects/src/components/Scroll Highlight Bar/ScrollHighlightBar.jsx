import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames'

const sections = [
    { id: 'section1', label: 'Overview' },
    { id: 'section2', label: 'Features' },
    { id: 'section3', label: 'Pricing' },
    { id: 'section4', label: 'FAQ' },
]

const ScrollHighlightBar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const navRefs = useRef([])
    const highlightRef = useRef(null)

    // Scroll Spy using Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const index = sections.findIndex(sec => sec.id === entry.target.id)
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                        setActiveIndex(index)
                    }
                })
            },
            { threshold: [0.6] }
        )

        sections.forEach(section => {
            const el = document.getElementById(section.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    // Animate highlight bar position and width
    useEffect(() => {
        const currentTab = navRefs.current[activeIndex]
        const highlight = highlightRef.current

        if (currentTab && highlight) {
            highlight.style.width = `${currentTab.offsetWidth}px`
            highlight.style.left = `${currentTab.offsetLeft}px`
        }
    }, [activeIndex])

    return (
        <>
            {/* Sticky Nav */}
            <div className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm">
                <nav
                    className="relative flex overflow-x-auto gap-4 no-scrollbar px-4 md:px-8"
                    role="tablist"
                >
                    {sections.map((section, idx) => (
                        <button
                            key={section.id}
                            ref={el => (navRefs.current[idx] = el)}
                            onClick={() =>
                                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
                            }
                            role="tab"
                            aria-selected={idx === activeIndex}
                            tabIndex={0}
                            className={classNames(
                                'relative whitespace-nowrap px-4 py-3 font-medium text-gray-500 hover:text-black focus:outline-none transition-colors duration-300',
                                {
                                    'text-black': idx === activeIndex,
                                }
                            )}
                        >
                            {section.label}
                        </button>
                    ))}

                    {/* Highlight Bar */}
                    <span
                        ref={highlightRef}
                        className="absolute bottom-0 h-[3px] bg-black rounded-full shadow-md transition-all duration-300 ease-in-out"
                    />
                </nav>
            </div>

            {/* Page Sections */}
            <main className="space-y-40 px-4 md:px-8 py-20">
                {sections.map(section => (
                    <section
                        key={section.id}
                        id={section.id}
                        className="min-h-screen scroll-mt-24"
                        aria-labelledby={`heading-${section.id}`}
                    >
                        <h2
                            id={`heading-${section.id}`}
                            className="text-4xl font-bold text-gray-800 mb-4"
                        >
                            {section.label}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Content for <strong>{section.label}</strong>. Add detailed descriptions,
                            images, or interactive components here.
                        </p>
                    </section>
                ))}
            </main>
        </>
    )
}

export default ScrollHighlightBar