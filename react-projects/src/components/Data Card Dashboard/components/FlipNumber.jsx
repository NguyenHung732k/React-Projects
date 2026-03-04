import { motion, AnimatePresence } from "framer-motion"

export default function FlipNumber({ value }) {
    return (
        <div className="text-3xl font-semibold tracking-tight overflow-hidden h-9">
            <AnimatePresence mode="wait">
                <motion.div
                    key={value}
                    initial={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.35 }}
                >
                    {value.toLocaleString()}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}