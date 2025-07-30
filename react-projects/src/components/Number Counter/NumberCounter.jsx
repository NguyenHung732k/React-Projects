import React from "react";
import Counter from "./Counter"

const NumberCounter = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Counter
                targetValue={1200000}
                format={true}
                decimalPlaces={2}
                label="Total Revenue"
                bgColor="bg-teal-500"
                textColor="text-white"
                triggerOnScroll={true}  // Change to `false` to trigger on mount
            />
        </div>
    )
}

export default NumberCounter