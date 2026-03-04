import { motion } from "framer-motion"
import FlipNumber from "./FlipNumber"
import LiveIndicator from "./LiveIndicator"
import { useLiveData } from "../hooks/useLiveData"
import { useEffect, useState } from "react"

export default function DataCard({ title, initial }) {
    const value = useLiveData(initial)
    const [pulse, setPulse] = useState(false)

    useEffect(() => {
        setPulse(true)
        const t = setTimeout(() => setPulse(false), 600)
        return () => clearTimeout(t)
    }, [value])

    const delta = ((Math.random() * 4) - 2).toFixed(2)

    return (
        <motion.div
            layout
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`relative rounded-2xl p-6 glass shadow-xl 
      ${pulse ? "ring-1 ring-emerald-400/40" : ""}`}
        >
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-400">
                        {title}
                    </p>
                    <FlipNumber value={value} />
                </div>
                <LiveIndicator />
            </div>

            <div className="mt-4 flex justify-between items-end">
                <span className={`text-sm ${delta >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                    {delta}%
                </span>

                <div className="opacity-0 group-hover:opacity-100 transition text-xs text-zinc-500">
                    Updated just now
                </div>
            </div>
        </motion.div>
    )
}