import { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

const useCountUp = (end, duration = 2000, easing = easeOutCubic) => {
    const [count, setCount] = useState(0)
    const startRef = useRef(null)

    useEffect(() => {
        let animationFrame

        const update = (timestamp) => {
            if (!startRef.current) startRef.current = timestamp
            const progress = Math.min((timestamp - startRef.current) / duration, 1)
            const eased = easing(progress)
            setCount(Math.floor(eased * end))
            if (progress < 1) {
                animationFrame = requestAnimationFrame(update)
            }
        }

        animationFrame = requestAnimationFrame(update)
        return () => cancelAnimationFrame(animationFrame)
    }, [end, duration])

    return count
}

const CountUpOnScroll = ({ end, duration = 2000, label }) => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)
    const controls = useAnimation()
    const count = useCountUp(visible ? end : 0, duration)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true)
            },
            { threshold: 0.6 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (visible) controls.start({ opacity: 1, y: 0 })
    }, [visible])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow"
        >
            <span className="text-5xl font-extrabold text-blue-600">{count}</span>
            <span className="mt-2 text-base text-gray-600 font-medium">{label}</span>
        </motion.div>
    )
}

export default CountUpOnScroll