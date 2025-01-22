import { useEffect, useRef } from 'react'
import * as THREE from 'three'

import earthImage from '../assets/Earth.jpg'
import venusImage from '../assets/Venus.jpg'
import neptuneImage from '../assets/Neptune.jpg'

const StarMap = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current })
    renderer.setSize(window.innerWidth, window.innerHeight)

    const starsGeometry = new THREE.BufferGeometry()
    const starsMaterial = new THREE.PointsMaterial({
      color: 0x888888,
      size: 0.05,
    })
    const starPositions = []

    for (let i = 0; i < 5000; i++) {
      starPositions.push(
        Math.random() * 2000 - 1000, // x
        Math.random() * 2000 - 1000, // y
        Math.random() * 2000 - 1000  // z
      )
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3))
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    const sunGeometry = new THREE.SphereGeometry(2, 32, 32)
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
    const sun = new THREE.Mesh(sunGeometry, sunMaterial)
    scene.add(sun)

    const planetTextures = [
      earthImage,
      venusImage,
      neptuneImage
    ]

    const planets = []
    const planetDistances = [5, 8, 12]
    const planetSizes = [0.6, 0.8, 1.0]

    for (let i = 0; i < 3; i++) {
      const textureLoader = new THREE.TextureLoader()
      const texture = textureLoader.load(planetTextures[i])
      const geometry = new THREE.SphereGeometry(planetSizes[i], 32, 32)
      const material = new THREE.MeshBasicMaterial({ map: texture })
      const planet = new THREE.Mesh(geometry, material)
      planet.position.x = planetDistances[i]
      planets.push(planet)
      scene.add(planet)
    }

    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate planets and sun
      sun.rotation.y += 0.001
      planets.forEach((planet, index) => {
        planet.rotation.y += 0.01

        planet.position.x = planetDistances[index] * Math.cos(Date.now() * 0.001 * (index + 1));
        planet.position.z = planetDistances[index] * Math.sin(Date.now() * 0.001 * (index + 1));
      })

      renderer.render(scene, camera)
    }
    animate()

    camera.position.z = 20

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    })

    return () => {
      window.removeEventListener('resize', () => {})
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} />
}

export default StarMap