export const analyzeImage = async (imageFile) => {
    // Simulate API processing with a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            // Randomly select one of the popular art styles
            const styles = ['Surrealism', 'Cubism', 'Impressionism', 'Pop Art', 'Abstract']
            const randomStyle = styles[Math.floor(Math.random() * styles.length)]

            resolve(randomStyle) // Return the selected art style as if it were analyzed
        }, 1500) // Simulate an artificial delay (1.5 seconds)
    })
}