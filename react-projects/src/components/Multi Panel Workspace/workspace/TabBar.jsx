import { motion } from "framer-motion"

export default function TabBar({ panel }) {
    return (
        <div className="flex bg-neutral-950 border-b border-neutral-800">

            {panel.tabs.map((tab) => (
                <motion.button
                    layout
                    key={tab.id}
                    className={`px-3 py-1 text-sm
          ${panel.activeTab === tab.id
                            ? "bg-neutral-800 text-white"
                            : "text-neutral-400 hover:text-white"
                        }`}
                >
                    {tab.title}
                </motion.button>
            ))}

        </div>
    )
}