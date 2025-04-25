import React, { useState } from "react"
import clsx from "clsx"

const FloatingInput = ({
    label,
    id,
    type = "text",
    value,
    onChange,
    onBlur,
    onFocus,
    required = false,
    hasError = false,
    errorMessage = "",
    success = false,
    darkMode = false,
    ...props
}) => {
    const [focused, setFocused] = useState(false);

    const isFloating = focused || value;

    return (
        <div className="relative w-full">
            <div
                className={clsx(
                    "relative transition-all duration-200 ease-in-out",
                    "border px-4 pt-6 pb-2 rounded-xl shadow-sm",
                    darkMode
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-white border-gray-300 text-gray-900",
                    focused && "ring-2 ring-blue-400/50",
                    hasError && "border-red-500 ring-2 ring-red-400/30",
                    success && !hasError && "border-green-500 ring-2 ring-green-400/30"
                )}
            >
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={(event) => {
                        setFocused(true)
                        onFocus?.(event)
                    }}
                    onBlur={(event) => {
                        setFocused(false)
                        onBlur?.(event)
                    }}
                    required={required}
                    aria-invalid={hasError}
                    aria-describedby={hasError ? `${id}-error` : undefined}
                    className={clsx(
                        "peer w-full bg-transparent border-none outline-none text-base tracking-tight font-medium placeholder-transparent",
                        darkMode ? "text-white" : "text-gray-900"
                    )}
                    placeholder={label}
                    {...props}
                />

                <label
                    htmlFor={id}
                    className={clsx(
                        "absolute left-4 transition-all duration-200 ease-out origin-[0]",
                        "pointer-events-none",
                        isFloating ? "top-2 text-xs scale-90" : "top-[1.45rem] text-base",
                        darkMode ? "text-gray-400" : "text-gray-500",
                        focused && !hasError && "text-blue-500",
                        hasError && "text-red-500",
                        success && !hasError && "text-green-500"
                    )}
                >
                    {label}
                </label>

                {/* Animated icons */}
                {hasError && (
                    <span className="absolute right-4 top-[1.4rem] text-red-500 transition-opacity duration-200">⚠️</span>
                )}
                {success && !hasError && (
                    <span className="absolute right-4 top-[1.4rem] text-green-500 transition-opacity duration-200">✔️</span>
                )}
            </div>

            {hasError && errorMessage && (
                <p
                    id={`${id}-error`}
                    className="mt-1 ml-1 text-sm text-red-500 animate-fadeIn"
                >
                    {errorMessage}
                </p>
            )}
        </div>
    )
}

export default FloatingInput