import Divider from "./Divider";

const ScrollDivider = () => {
    return (
        <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-700">
            {/* Section 1 */}
            <section className="h-screen flex items-center justify-center">
                <h1 className="text-5xl font-semibold tracking-tight">
                    Scroll to Reveal Dividers
                </h1>
            </section>

            {/* First Divider */}
            <Divider delay={0} />

            {/* Section 2 */}
            <section className="h-screen flex items-center justify-center">
                <p className="text-lg max-w-md leading-relaxed text-center">
                    As you scroll, dividers animate smoothly from center outward, guiding
                    your eyes and clarifying section boundaries.
                </p>
            </section>

            {/* Second Divider */}
            <Divider delay={200} />

            {/* Section 3 */}
            <section className="h-screen flex flex-col items-center justify-center space-y-4">
                <p className="text-lg max-w-md text-center">
                    Each divider expands gently with staggered timing and layered motion.
                </p>
                <button className="mt-4 px-6 py-2 w-60 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                    Learn More
                </button>
            </section>

            {/* Final Divider */}
            <Divider delay={400} />

            {/* Section 4 */}
            <section className="h-screen flex items-center justify-center">
                <p className="text-lg max-w-md text-center">
                    Dive deeper with this amazing feature. The divider comes full circle!
                </p>
            </section>
        </main>
    )
}

export default ScrollDivider