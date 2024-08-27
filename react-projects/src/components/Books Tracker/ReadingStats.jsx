import React, { useContext } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { BookContext } from './contexts/BookContext'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const ReadingStats = () => {
    const { books } = useContext(BookContext)
    const dates = books.map(book => book.startDate.toDateString())
    const pages = books.map(book => book.pages)

    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Pages Read',
                data: pages,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    }

    return (
        <div className="w-5/6 p-4 border border-gray-300 rounded">
            <h2 className="text-lg font-semibold">Reading Statistics</h2>
            <Bar data={data} />
        </div>
    )
}

export default ReadingStats
