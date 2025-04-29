import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const HomeButton = () => {
    const navigate = useNavigate()

    return (
        <motion.button
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-5 py-2 bg-indigo-600 hover:bg-indigo-500 transition-colors text-white rounded-full shadow-md"
            aria-label="Go back to homepage"
        >
            🏠 Back to Earth
        </motion.button>
    )
}

export default HomeButton