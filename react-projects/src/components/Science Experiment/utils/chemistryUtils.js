// Calculate pH from H+ ion concentration (pH = -log[H+])
export const calculatePH = (hydrogenIonConcentration) => {
    return -Math.log10(hydrogenIonConcentration)  // pH = -log[H+]
}

// Calculate molarity (moles / volume)
export const calculateMolarity = (moles, volume) => {
    return moles / volume  // M = moles / volume (in liters)
}
