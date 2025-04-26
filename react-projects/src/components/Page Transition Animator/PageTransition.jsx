import { motion } from "framer-motion"

const transitionStyles = {
    fade: {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3, ease: "easeIn" },
        },
    },
    slide: {
        initial: { x: 100, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
        exit: {
            x: -100,
            opacity: 0,
            transition: { duration: 0.3, ease: "easeIn" },
        },
    },
    scale: {
        initial: { scale: 0.9, opacity: 0 },
        animate: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeOut" },
        },
        exit: {
            scale: 0.95,
            opacity: 0,
            transition: { duration: 0.3, ease: "easeIn" },
        },
    },
    overlay: {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                easing: 'cubic-bezier(0.6, 0.01, -0.05, 0.95)'
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.4,
                easing: 'cubic-bezier(0.6, 0.01, -0.05, 0.95)'
            },
        },
    }
}

const PageTransition = ({ children, type = "fade" }) => {
    const animation = transitionStyles[type] || transitionStyles.fade;

    return (
        <motion.div
            className="p-10"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation}
        >
            {children}
        </motion.div>
    )
}

export default PageTransition