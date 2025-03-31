import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine)
    }, [])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: "#0d1117",
                },
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: "#ffffff",
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 5,
                            size_min: 0.1,
                            sync: false,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                            push: {
                                particles_nb: 4,
                            },
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export default ParticleBackground
