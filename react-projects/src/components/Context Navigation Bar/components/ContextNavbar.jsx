import { motion } from "framer-motion";
import clsx from "clsx";
import { navItems } from "../data/navItems";
import useScrollState from "../hooks/useScrollState";
import useUsageTracker from "../hooks/useUsageTracker";
import { magneticEffect, resetMagnet } from "../utils/magnet";
import { useState } from "react";

export default function ContextNavbar() {

    const scrolled = useScrollState();

    const { sortedItems, track } = useUsageTracker(navItems);

    const [active, setActive] = useState("home");

    const visibleItems = sortedItems.slice(0, 4);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

            <nav
                className={clsx(
                    "flex items-center gap-2 px-3 rounded-2xl border backdrop-blur-xl transition-all duration-300",
                    scrolled
                        ? "py-2 bg-white/70 shadow-lg"
                        : "py-3 bg-white/60 shadow-xl"
                )}
            >

                {visibleItems.map((item) => {

                    const Icon = item.icon;

                    const isActive = active === item.id;

                    return (

                        <button
                            key={item.id}
                            onClick={() => {
                                setActive(item.id);
                                track(item.id);
                            }}

                            onMouseMove={magneticEffect}
                            onMouseLeave={resetMagnet}

                            className="relative group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                        >

                            {isActive && (
                                <motion.span
                                    layoutId="active-pill"
                                    className="absolute inset-0 rounded-xl bg-indigo-500/10 border border-indigo-400/20"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}

                            <Icon className="text-lg relative z-10" />

                            <span className="relative z-10 max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 text-sm whitespace-nowrap">
                                {item.label}
                            </span>

                        </button>

                    )

                })}

            </nav>

        </div>
    );
}