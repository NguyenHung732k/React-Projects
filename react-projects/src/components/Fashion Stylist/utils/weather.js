export function getWeather(location) {
    switch (location.toLowerCase()) {
        case 'new york':
            return "Clear"
        case 'los angeles':
            return "Clear"
        case 'chicago':
            return "Snow"
        case 'seattle':
            return "Rain"
        default:
            return "Clear"
    }
}