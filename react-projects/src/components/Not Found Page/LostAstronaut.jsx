import { motion } from 'framer-motion'

const LostAstronaut = () =>  {
    return (
        <motion.img
            src="/images/lost-astronaut.svg"
            alt="Lost astronaut floating"
            className="w-40 h-40 mx-auto my-4"
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
    )
}

export default LostAstronaut