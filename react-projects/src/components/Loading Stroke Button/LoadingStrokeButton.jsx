import { useState } from "react";
import StrokeButton from "./StrokeButton"

const LoadingStrokeButton = () => {
    const [loading, setLoading] = useState(false)

    const runAsync = async () => {
        setLoading(true)
        await new Promise((res) => setTimeout(res, 2500))
        setLoading(false)
    }

    return (
        <div className="h-screen flex justify-center items-center bg-gray-900">
            <div className="space-y-6 text-center">

                <StrokeButton
                    loading={loading}
                    onClick={runAsync}
                    shape="rect"
                >
                    Continue
                </StrokeButton>

                <StrokeButton
                    loading={loading}
                    onClick={runAsync}
                    shape="circle"
                >
                    Pay Now
                </StrokeButton>

            </div>
        </div>
    )
}

export default LoadingStrokeButton