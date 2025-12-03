import { useState } from "react";
import './ValidatedInput.css'

const ValidatedInput = ({
    label,
    type = "text",
    validate = () => true,
    errorMessage = "Invalid input",
    customClass = ""
}) => {
    const [value, setValue] = useState("")
    const isValid = validate(value)
    const isInvalid = !isValid && value.length > 0

    return (
        <div className="relative w-full pt-5">
            {/* Floating Label */}
            <label
                className={`
          absolute left-3 text-gray-500 pointer-events-none
          transition-all duration-200
          ${value ? "-top-1 text-xs" : "top-6 text-sm"}
        `}
            >
                {label}
            </label>

            {/* Input */}
            <input
                type={type}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                className={`
          peer w-80 rounded-xl bg-white px-3 pb-2 pt-4
          shadow-sm transition-all duration-300 outline-none
          ${customClass}
          ${isValid ? "border border-green-500 shadow-[0_0_8px_rgba(34,197,94,0.3)]" : ""}
          ${isInvalid ? "border border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.3)]" : "border-gray-300"}
        `}
            />

            {/* Success Badge */}
            {isValid && value && (
                <span
                    className="
            absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center
            rounded-full
            bg-green-500 text-white shadow-lg
            backdrop-blur-md ring-2 ring-white ring-offset-0
            animate-bounceInSoft
          "
                >
                    Check
                </span>
            )}

            {/* Error Badge */}
            {isInvalid && (
                <span
                    className="
            absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center
            rounded-full
            bg-red-500 text-white shadow-lg
            animate-pulse
          "
                >
                    Exclamations
                </span>
            )}

            {/* Error Message */}
            {isInvalid && (
                <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
            )}
        </div>
    )
}

export default ValidatedInput