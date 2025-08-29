import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion"

const DotIndicator = () => {
    const labels = ["Intro", "Features", "Gallery", "Pricing", "FAQ", "Contact"]
    const refs = useRef(labels.map(() => null))
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const idx = refs.current.indexOf(entry.target)
                        setActiveIndex(idx)
                    }
                })
            },
            { threshold: 0.6 }
        )

        refs.current.forEach((el) => el && observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const scrollToRef = (i) => {
        refs.current[i].scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
            {/* Dot Navigation */}
            <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4">
                {labels.map((label, i) => {
                    const isActive = i === activeIndex;
                    return (
                        <button
                            key={label}
                            onClick={() => scrollToRef(i)}
                            className="group relative flex items-center"
                        >
                            <motion.span
                                animate={{
                                    scale: isActive ? 1.5 : 1,
                                    boxShadow: isActive
                                        ? "0 0 12px rgba(59,130,246,0.8)"
                                        : "0 0 0 rgba(0,0,0,0)",
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`block h-3 w-3 rounded-full ${isActive ? "bg-blue-500" : "bg-slate-400 hover:bg-slate-500"
                                    }`}
                            />
                            <span className="absolute right-6 top-1/2 -translate-y-1/2 rounded bg-slate-800/90 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100">
                                {label}
                            </span>
                        </button>
                    );
                })}
            </nav>

            {/* Header */}
            <header className="sticky top-0 bg-white/70 backdrop-blur px-4 py-3 shadow">
                <h1 className="text-xl font-bold text-blue-600">Scroll Depth Dots</h1>
            </header>

            {/* Sections */}
            <main className="mx-auto max-w-3xl px-4">
                {labels.map((label, i) => (
                    <section
                        key={label}
                        ref={(el) => (refs.current[i] = el)}
                        className="py-28 border-b border-slate-200"
                    >
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">{label}</h2>
                        <p className="text-slate-600">
                            This is the {label} section. Scroll to see the dots highlight. Click
                            a dot to jump here.
                        </p>
                    </section>
                ))}
            </main>

            {/* Footer */}
            <footer className="text-center py-6 text-sm text-slate-500">
                Built with ❤️ React, Tailwind & Framer Motion.
            </footer>
        </div>
    )
}

export default DotIndicator
