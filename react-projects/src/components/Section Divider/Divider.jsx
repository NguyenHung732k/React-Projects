import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const Divider = ({ icon, label, className = '' }) => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div ref={ref} className={`relative w-full my-20 ${className}`}>
            {/* Animated Line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: inView ? 1 : 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="origin-left h-[2px] w-full bg-gradient-to-r from-transparent via-gray-400/60 to-transparent dark:via-gray-500/50"
            />

            {/* Optional Center Content */}
            {(icon || label) && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full backdrop-blur-md bg-white/70 dark:bg-black/30 text-gray-800 dark:text-gray-100 shadow-md border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform cursor-default"
                >
                    {icon || <span className="text-sm font-medium">{label}</span>}
                </motion.div>
            )}
        </div>
    )
}

export default Divider