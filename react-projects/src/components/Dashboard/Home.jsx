import React, { useEffect, useState } from 'react'
import Papa from 'papaparse'

// Import Dataset
import csvFile from './csv/train.csv'

import LineChart from './LineChart'
import BarChart from './BarChart'
import PieChart from './PieChart'

const Home = () => {

    const [data, setData] = useState({
        ages: [],
        fares: [],
        survival: [],
        class: [],
        gender: []
    })


    useEffect(() => {
        Papa.parse(csvFile, {
            download: true,
            header: true,
            complete: (results) => {
                const ages = results.data.map(item => item.Age ? parseFloat(item.Age) : NaN)
                const fares = results.data.map(item => parseFloat(item.Fare) || 0)
                const survival = results.data.map(item => item.Survived || '0')
                const classInfo = results.data.map(item => item.Pclass)
                const gender = results.data.map(item => item.Sex || 'unknown')

                setData({
                    ages,
                    fares,
                    survival,
                    class: classInfo,
                    gender
                })
            },
            error: (error) => {
                console.error('Error parsing CSV:', error)
            }
        })
    }, [])


    return (
        <div class="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border rounded-lg dark:border-gray-700 mt-14">
                <h1 className="text-2xl font-bold mx-4 mb-4">Titanic Dataset Dashboard</h1>
                <div className="p-4 text-center">
                    <h4 className="text-2xl font-bold mb-4">Statistical Rate of some Fields in Titanic Dataset using ChartJS</h4>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <BarChart data={data} />
                        <PieChart data={data} />
                        <LineChart data={data} />
                        <h2>Bar Chart</h2>
                        <h2>Pie Chart</h2>
                        <h2>Line Chart</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home