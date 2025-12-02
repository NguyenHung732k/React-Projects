import React from "react";
import LineChart from "./LineChart"

const ScrollLineChart = () => {
    return (
        <div className="space-y-40">
            <section className="h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-center">
                    Scroll Down To See the Chart Animate
                </h1>
            </section>

            <LineChart />

            <section className="h-screen flex items-center justify-center">
                <p className="text-lg opacity-70">End of Demo</p>
            </section>
        </div>
    )
}

export default ScrollLineChart