import { useEffect, useState } from "react";

const ScrollHeader = () => {
    const [visible, setVisible] = useState(true)
    const [shadow, setShadow] = useState(false)

    useEffect(() => {
        let lastY = window.scrollY

        const handleScroll = () => {
            const currentY = window.scrollY
            const delta = currentY - lastY

            setShadow(currentY > 10)

            if (Math.abs(delta) > 6) {
                if (delta > 0 && currentY > 90) {
                    setVisible(false)
                } else {
                    setVisible(true)
                }
            }

            lastY = currentY
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl bg-white/70 dark:bg-gray-900/70
        transition-[transform,opacity] duration-300 ease-in-out
        motion-reduce:transition-none
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        ${shadow ? "shadow-lg" : "shadow-none"}
      `}
        >
            <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
                <a
                    href="/"
                    className="text-xl text-decoration-none font-semibold tracking-tight hover:opacity-80 transition"
                >
                    Brand
                </a>

                {/* Desktop Nav */}
                <nav className="hidden sm:flex gap-8 text-sm font-medium">
                    <a
                        href="#home"
                        className="transition-colors text-decoration-none hover:text-blue-600"
                    >
                        Home
                    </a>
                    <a
                        href="#services"
                        className="transition-colors text-decoration-none hover:text-blue-600"
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="transition-colors text-decoration-none hover:text-blue-600"
                    >
                        Contact
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    aria-label="Open Menu"
                    className="sm:hidden p-2 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default ScrollHeader