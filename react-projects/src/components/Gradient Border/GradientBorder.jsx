import React from "react";
import GradientCard from "./GradientCard"
import GradientButton from "./GradientButton"
import './GradientBorder.css'

const GradientBorder = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-lg">
                <GradientCard />
            </div>
            <div className="w-full max-w-xs">
                <GradientButton />
            </div>
        </div>
    )
}

export default GradientBorder