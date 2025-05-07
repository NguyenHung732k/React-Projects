import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const fields = [
    { name: "name", label: "Full Name", placeholder: "John Doe" },
    { name: "email", label: "Email Address", placeholder: "john@example.com" },
    { name: "password", label: "Password", placeholder: "••••••••" },
]

const Form = () => {
    const [step, setStep] = useState(0)
    const [typedText, setTypedText] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [formData, setFormData] = useState({ name: "", email: "", password: "" })

    useEffect(() => {
        const target = fields[step].placeholder
        let i = 0
        setTypedText("")
        setIsTyping(true)

        const interval = setInterval(() => {
            setTypedText((prev) => prev + target[i - 1])
            i++
            if (i === target.length) {
                clearInterval(interval)
                setIsTyping(false)
            }
        }, 70)

        return () => clearInterval(interval)
    }, [step])

    const handleNext = () => {
        if (step < fields.length - 1) setStep((s) => s + 1)
    }

    const handleBack = () => {
        if (step > 0) setStep((s) => s - 1)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Form submitted!\n" + JSON.stringify(formData, null, 2))
    }

    return (
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-6">
            <div className="flex items-center gap-2">
                {fields.map((_, i) => (
                    <div
                        key={i}
                        className={`flex-1 h-2 rounded-full transition-all duration-300 ${i <= step ? "bg-blue-500" : "bg-gray-200"
                            }`}
                    ></div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                    key={fields[step].name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <label className="block text-sm text-gray-600 mb-1">
                        {fields[step].label}
                    </label>
                    <div className="relative">
                        <input
                            type={fields[step].name === "password" ? "password" : "text"}
                            name={fields[step].name}
                            value={formData[fields[step].name]}
                            onChange={handleChange}
                            placeholder={typedText}
                            className="w-full p-3 rounded-xl border border-gray-300 shadow-sm outline-none focus:ring-2 ring-blue-400 transition-all"
                        />
                        {isTyping && (
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 animate-pulse"></span>
                        )}
                    </div>
                </motion.div>

                <div className="flex justify-between items-center">
                    <button
                        type="button"
                        onClick={handleBack}
                        disabled={step === 0}
                        className="text-sm text-gray-500 hover:text-blue-600 disabled:opacity-30"
                    >
                        Back
                    </button>

                    {step < fields.length - 1 ? (
                        <button
                            type="button"
                            onClick={handleNext}
                            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Form