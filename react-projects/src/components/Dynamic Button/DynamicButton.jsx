import React, { useState } from "react";
import classNames from "classnames"

const DynamicButton = () => {
    const [state, setState] = useState("idle")
    const [loadingText, setLoadingText] = useState("Processing...")

    const handleClick = () => {
        setState("loading")
        setTimeout(() => {
            setState(Math.random() > 0.5 ? "success" : "fail")
        }, 2500)
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <button
                onClick={handleClick}
                className={classNames(
                    "relative flex items-center justify-center py-3 px-6 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out transform",
                    {
                        "bg-blue-500 hover:bg-blue-600 shadow-lg": state === "idle",
                        "bg-blue-600": state === "loading",
                        "bg-green-500": state === "success",
                        "bg-red-500": state === "fail",
                        "w-40": state === "idle" || state === "success" || state === "fail" || state === "loading",
                        "hover:scale-105": state === "idle",
                        "focus:outline-none focus:ring-4 focus:ring-blue-400": state !== "loading",
                    }
                )}
            >
                {state === "idle" && "Submit"}
                {state === "loading" && (
                    <>
                        {loadingText}
                    </>
                )}
                {state === "success" && (
                    <>
                        Success!
                    </>
                )}
                {state === "fail" && (
                    <>
                        Failed
                    </>
                )}

                <span
                    className={classNames(
                        "absolute top-0 left-0 w-full h-full bg-opacity-30 rounded-lg transition-all duration-300",
                        {
                            "bg-blue-400": state === "loading",
                            "bg-green-400": state === "success",
                            "bg-red-400": state === "fail",
                            "opacity-0": state === "idle",
                            "opacity-100": state !== "idle",
                        }
                    )}
                />
            </button>
        </div>
    )
}

export default DynamicButton