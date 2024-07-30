import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const LineChart = ({ data }) => {
    const genderSurvival = data.gender.reduce((accumulator, gender, index) => {
        if (!accumulator[gender]) {
            accumulator[gender] = { survived: 0, total: 0 }
        }
        accumulator[gender].total += 1
        if (data.survival[index] === '1') {
            accumulator[gender].survived += 1
        }
        return accumulator
    }, {});

    const labels = Object.keys(genderSurvival);
    const survivalRates = labels.map(gender => (genderSurvival[gender].survived / genderSurvival[gender].total) * 100);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Survival Rate by Gender',
                data: survivalRates,
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `Survival Rate: ${tooltipItem.raw.toFixed(2)}%`,
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Gender',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Survival Rate (%)',
                },
                ticks: {
                    callback: (value) => `${value}%`,
                },
            },
        },
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Survival Rate by Gender</h2>
            <Line data={chartData} options={options} />
        </div>
    )
};

export default LineChart