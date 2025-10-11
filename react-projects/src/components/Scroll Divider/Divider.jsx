import { useEffect, useRef, useState } from "react";

const Divider = ({ delay = 0 }) => {
    const [visible, setVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className="relative w-full flex justify-center py-12 overflow-hidden"
        >
            {/* Main animated line */}
            <div
                className={`
          absolute top-1/2 h-[2px]
          bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400
          rounded-full opacity-70
          transition-all duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)]
          ${visible ? "max-w-[80%] scale-x-100 opacity-100" : "max-w-0 scale-x-0 opacity-0"}
        `}
                style={{
                    transformOrigin: "center",
                    transitionDelay: `${delay}ms`,
                }}
            />

            {/* Secondary faint line for depth */}
            <div
                className={`
          absolute top-1/2 h-[1px]
          bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300
          rounded-full opacity-40 blur-[1px]
          transition-all duration-[1500ms] ease-[cubic-bezier(0.65,0,0.35,1)]
          ${visible ? "max-w-[85%] scale-x-100 opacity-60" : "max-w-0 scale-x-0 opacity-0"}
        `}
                style={{
                    transformOrigin: "center",
                    transitionDelay: `${delay + 200}ms`,
                }}
            />
        </div>
    )
}

export default Divider