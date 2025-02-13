import { format } from 'date-fns'

const Forecast = ({ currentMonthBudget, growthRate }) => {
    const nextMonthForecast = currentMonthBudget + currentMonthBudget * growthRate
    const forecastDate = format(new Date(), 'MMMM yyyy')

    return (
        <div className="p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg">Forecast for {forecastDate}</h3>
            <p>Next month's forecasted budget: ${nextMonthForecast.toFixed(2)}</p>
        </div>
    )
}

export default Forecast