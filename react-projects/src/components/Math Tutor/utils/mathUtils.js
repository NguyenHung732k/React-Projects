export const generateSteps = (problemType) => {
    switch (problemType) {
        case 'Easy':
            return ['Start with the first number', 'Add the second number', 'Write the result']
        case 'Medium':
            return ['Write both numbers', 'Multiply them', 'Add the result to the first number']
        case 'Hard':
            return ['Start with the first equation', 'Solve for the variable', 'Graph the result']
        default:
            return ['Start solving the problem step-by-step']
    }
}