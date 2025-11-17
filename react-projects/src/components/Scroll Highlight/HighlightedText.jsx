import { useMemo } from "react";

const HighlightedText = ({ text, progress }) => {
    const words = useMemo(() => text.split(" "), [text])
    const activeIndex = progress * (words.length - 1)

    return (
        <p className="leading-relaxed text-[1.18rem] tracking-wide text-gray-800 font-serif">
            {words.map((word, i) => {
                // Soft interpolation between active + neighbors
                const distance = Math.abs(i - activeIndex)
                const intensity = Math.max(0, 1 - distance)

                return (
                    <span
                        key={i}
                        className={`px-0.5 rounded transition-all duration-300 ease-out ${intensity > 0 ? 'highlighted-word' : ''}`}
                    >
                        {word}{" "}
                    </span>
                );
            })}
        </p>
    )
}

export default HighlightedText