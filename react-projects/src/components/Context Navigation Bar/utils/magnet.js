export function magneticEffect(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    e.currentTarget.style.transform =
        `translate(${x * 0.15}px, ${y * 0.15}px)`;
}

export function resetMagnet(e) {
    e.currentTarget.style.transform = "translate(0,0)";
}