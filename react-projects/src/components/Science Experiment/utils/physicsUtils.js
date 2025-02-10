// Calculate kinetic energy (1/2 * m * v^2)
export const calculateKineticEnergy = (mass, velocity) => {
    return 0.5 * mass * Math.pow(velocity, 2)  // KE = 0.5 * m * v^2
}

// Calculate projectile motion (range, max height, time of flight)
export const calculateProjectile = (angle, speed, gravity = 9.8) => {
    const radianAngle = (Math.PI / 180) * angle
    const range = (Math.pow(speed, 2) * Math.sin(2 * radianAngle)) / gravity
    const maxHeight = (Math.pow(speed, 2) * Math.pow(Math.sin(radianAngle), 2)) / (2 * gravity)
    const timeOfFlight = (2 * speed * Math.sin(radianAngle)) / gravity
    return { range, maxHeight, timeOfFlight }
}