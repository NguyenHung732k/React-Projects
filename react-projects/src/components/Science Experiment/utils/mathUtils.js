// Function for general calculations that can be used across experiments
export const roundToDecimal = (value, decimals = 2) => {
    return parseFloat(value).toFixed(decimals)
}