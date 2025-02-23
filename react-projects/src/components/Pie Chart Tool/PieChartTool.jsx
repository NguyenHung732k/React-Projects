import React, { useState } from "react"
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import Draggable from "react-draggable"

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChartTool = () => {
    const [data, setData] = useState([
        { label: "A", value: 20 },
        { label: "B", value: 30 },
        { label: "C", value: 50 },
    ])

    const minValue = 0
    const maxValue = 100

    const handleDrag = (index, deltaY) => {
        const newData = [...data]
        let newValue = newData[index].value - deltaY
        newValue = Math.max(minValue, Math.min(newValue, maxValue))
        newData[index].value = newValue
        setData(newData)
    }

    const chartData = {
        labels: data.map((item) => item.label),
        datasets: [
            {
                data: data.map((item) => item.value),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                borderWidth: 1,
                hoverOffset: 4,
            },
        ],
    }

    // Chart options with animation and tooltips
    const chartOptions = {
        responsive: true,
        animation: {
            duration: 700,
            easing: "easeOutBounce",
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (context) => `${context.label}: ${context.raw}%`,
                },
            },
        },
    };

    // Export chart as an image
    const exportChartAsImage = () => {
        const canvas = document.getElementById("pie-chart-canvas")
        const imgUrl = canvas.toDataURL("image/png")
        const link = document.createElement("a")
        link.href = imgUrl
        link.download = "pie-chart.png"
        link.click()
    }

    const exportChartAsJSON = () => {
        const json = JSON.stringify(data)
        const blob = new Blob([json], { type: "application/json" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "chart-data.json"
        a.click()
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Customizable Pie Chart Tool</h1>

            <div className="relative w-80 h-80 mb-6">
                <Pie data={chartData} options={chartOptions} id="pie-chart-canvas" />
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="text-white text-xl font-bold">Adjust Values</div>
                </div>
            </div>

            <div className="flex space-x-4 my-20 py-2">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center justify-center gap-4 space-y-2">
                        <div className="text-lg font-medium text-gray-800">{item.label}</div>
                        <Draggable
                            axis="y"
                            bounds={{ top: -(item.value - minValue), bottom: maxValue - item.value }}
                            onDrag={(e, data) => handleDrag(index, data.deltaY)}
                            onStop={(e, data) => handleDrag(index, data.deltaY)}
                        >
                            <div
                                className="w-20 h-20 bg-gray-200 rounded-full flex justify-center items-center cursor-pointer transition-transform"
                                style={{
                                    transform: `translateY(${item.value - 50}px)`,
                                }}
                            >
                                <span className="text-xl">{item.value}%</span>
                            </div>
                        </Draggable>
                    </div>
                ))}
            </div>
            
            <div className="text-gray-600 text-sm mt-4">
                <span className="italic">Drag the values to adjust the pie slices. Hold to update.</span>
            </div>

            <div className="flex justify-center space-x-6 my-6">
                <button
                    onClick={exportChartAsImage}
                    className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
                >
                    <svg className="mr-2 w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                    </svg>
                    Export as Image
                </button>
                <button
                    onClick={exportChartAsJSON}
                    className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-300"
                >
                    <svg className="mr-2 w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                    </svg>
                    Export as JSON
                </button>
            </div>

        </div>
    )
}

export default PieChartTool