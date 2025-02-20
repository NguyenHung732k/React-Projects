import React, { useState } from "react"
import { motion } from "framer-motion"

const onboardingSteps = [
    { title: "Welcome!", content: "Let's start your journey with us." },
    { title: "Features Overview", content: "Discover the amazing features we offer." },
    { title: "Customization", content: "Personalize your experience." },
    { title: "Settings", content: "Configure the app to fit your needs." },
    { title: "Get Started", content: "You're all set. Let's dive in!" },
]

const Onboarding = () => {
    const [step, setStep] = useState(0)

    const handleNextStep = () => {
        if (step < onboardingSteps.length - 1) {
            setStep(step + 1)
        }
    }

    const handlePreviousStep = () => {
        if (step > 0) {
            setStep(step - 1)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 shadow-2xl relative flex flex-col">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <h2 className="text-3xl font-semibold text-black dark:text-white">
                        {onboardingSteps[step].title}
                    </h2>
                    <p className="text-black dark:text-white mt-4 text-lg">
                        {onboardingSteps[step].content}
                    </p>

                    <motion.div
                        className="w-full bg-gray-200 dark:bg-gray-700 rounded-full mt-6"
                        initial={{ width: 0 }}
                        animate={{ width: `${((step + 1) / onboardingSteps.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                    </motion.div>

                    <div className="mt-6 flex justify-between items-center">
                        <motion.button
                            className="text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:text-black dark:hover:text-white hover:bg-blue-50 dark:hover:bg-blue-700"
                            onClick={handlePreviousStep}
                            disabled={step === 0}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <i className="fas fa-arrow-left"></i> Previous
                        </motion.button>

                        <motion.button
                            className="text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:text-black dark:hover:text-white hover:bg-blue-50 dark:hover:bg-blue-700"
                            onClick={handleNextStep}
                            disabled={step === onboardingSteps.length - 1}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Next <i className="fas fa-arrow-right"></i>
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    className="self-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <button className="text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-md transition-all duration-300 ease-in-out transform hover:bg-blue-50 dark:hover:bg-blue-700">
                        More Info
                    </button>
                </motion.div>
            </div>
        </div>
    )
}

export default Onboarding