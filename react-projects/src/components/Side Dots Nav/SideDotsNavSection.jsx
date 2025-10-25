import { useEffect, useState } from "react";

const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
]

const SideDotsNavSection = () => {
    const [active, setActive] = useState(sections[0].id)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2

            for (let section of sections) {
                const el = document.getElementById(section.id)
                if (el) {
                    const top = el.offsetTop
                    const height = el.offsetHeight
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActive(section.id)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
            {sections.map(({ id, label }) => (
                <div key={id} className="relative group">
                    {/* Dots */}
                    <button
                        onClick={() => scrollToSection(id)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 
              ${active === id
                                ? "bg-blue-600 scale-125 shadow-[0_0_10px_rgba(37,99,235,0.6)] animate-pulse"
                                : "bg-gray-400 hover:bg-gray-500 hover:scale-110"
                            }`}
                        aria-label={`Scroll to ${label}`}
                    />

                    {/* Tooltip */}
                    <span
                        className="absolute left-6 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-700 bg-white shadow-md
                       rounded px-2 py-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 
                       transition-all duration-300 whitespace-nowrap"
                    >
                        {label}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default SideDotsNavSection