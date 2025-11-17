import { useEffect, useRef, useState } from "react";
import HighlightedText from "./HighlightedText"
import './ScrollHighlight.css'

const ScrollHighlight = () => {
    const containerRef = useRef(null)
    const [progress, setProgress] = useState(0)

    // Listen for scroll events and update progress
    useEffect(() => {
        const onScroll = () => {
            const el = containerRef.current
            if (!el) return

            const rect = el.getBoundingClientRect()
            const total = rect.height - window.innerHeight
            const scrolled = Math.min(Math.max(-rect.top, 0), total)

            setProgress(scrolled / total)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // Text content for the demo
    const paragraphs = [
        "React enables interactive UIs with ease. This scroll tracker highlights words as you move, giving a visual reading cue.",
        "Smooth transitions make the highlight flow naturally, guiding the reader through paragraphs without distraction.",
        "Use this effect for storytelling, reading progress indicators, or guided product tours."
    ]

    const totalWords = paragraphs.join(" ").split(" ").length

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white min-h-[200vh] w-full text-gray-900">
            {/* Sticky header with progress bar */}

            <div className="max-w-3xl mx-auto pt-28 pb-20 px-6 space-y-12" ref={containerRef}>
                {paragraphs.map((p, idx) => {
                    const start =
                        paragraphs.slice(0, idx).join(" ").split(" ").length / totalWords;
                    const end =
                        paragraphs.slice(0, idx + 1).join(" ").split(" ").length / totalWords;

                    const localProgress =
                        progress < start
                            ? 0
                            : progress > end
                                ? 1
                                : (progress - start) / (end - start);

                    return (
                        <div
                            key={idx}
                            className={`fade-in-paragraph ${progress > start - 0.05 ? 'visible' : ''}`}
                        >
                            <HighlightedText text={p} progress={localProgress} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ScrollHighlight