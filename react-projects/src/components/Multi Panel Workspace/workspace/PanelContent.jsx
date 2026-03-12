import { motion, AnimatePresence } from "framer-motion"

export default function PanelContent({ panel }) {

    const active = panel.tabs.find(
        (t) => t.id === panel.activeTab
    )

    return (
        <div className="flex-1 relative overflow-hidden">

            <AnimatePresence mode="wait">
                <motion.div
                    key={active.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0"
                >
                    {active.component}
                </motion.div>
            </AnimatePresence>

        </div>
    )
}