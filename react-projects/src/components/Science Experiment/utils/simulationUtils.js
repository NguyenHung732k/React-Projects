// Function to simulate time evolution in an experiment (e.g., physics experiments)
export const simulateExperiment = (duration, interval, initialConditions, calculateNextStep) => {
    const steps = []
    let currentCondition = { ...initialConditions }

    for (let t = 0; t <= duration; t += interval) {
        steps.push(currentCondition)
        currentCondition = calculateNextStep(currentCondition, interval)
    }

    return steps
}

// Example helper for calculating next step for projectile motion
export const calculateNextProjectileStep = (currentCondition, interval) => {
    const { velocity, angle, gravity } = currentCondition
    const newPosition = {
        x: velocity * Math.cos(angle) * interval,
        y: velocity * Math.sin(angle) * interval - 0.5 * gravity * Math.pow(interval, 2),
    }
    return { ...currentCondition, position: newPosition }
}