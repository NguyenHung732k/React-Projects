export const randomBubbleEffect = () => {
    const effects = [
        "sparkles",
        "dancingAliens",
        "glitterExplosion",
        "colorShift",
    ]
    const effect = effects[Math.floor(Math.random() * effects.length)]
    executeEffect(effect)
}

const executeEffect = (effect) => {
    switch (effect) {
        case "sparkles":
            // Trigger sparkles animation
            break;
        case "dancingAliens":
            // Trigger dancing aliens animation
            break;
        case "glitterExplosion":
            // Trigger glitter explosion animation
            break;
        case "colorShift":
            // Trigger color shift effect
            break;
        default:
            break;
    }
};