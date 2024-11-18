import React, { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { motion } from 'framer-motion'

const ThreeDViewer = ({ modelPath, productDetails }) => {
    const canvasRef = useRef(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current })
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.dampingFactor = 0.25
        controls.screenSpacePanning = false

        const loader = new GLTFLoader()
        loader.load(modelPath, (gltf) => {
            scene.add(gltf.scene)
            setIsLoaded(true)
            setLoading(false)
            camera.position.z = 5
        })

        const ambientLight = new THREE.AmbientLight(0x404040)
        scene.add(ambientLight)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
        directionalLight.position.set(1, 1, 1).normalize()
        scene.add(directionalLight)

        const animate = () => {
            requestAnimationFrame(animate)
            controls.update()
            renderer.render(scene, camera)
        }
        animate()

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight)
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
        })

        return () => {
            window.removeEventListener('resize', () => { })
        }
    }, [modelPath])

    const LoadingSpinner = () => (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
            <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
        </div>
    )

    const ProductInfo = () => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 right-0 p-6 bg-white bg-opacity-90 rounded-lg max-w-xs w-full"
        >
            <h2 className="text-2xl font-semibold text-gray-900">{productDetails.name}</h2>
            <p className="text-sm text-gray-700 mt-2">{productDetails.description}</p>
            <p className="text-xl font-bold text-gray-900 mt-4">${productDetails.price}</p>
            <div className="mt-4">
                <button className="bg-blue-500 text-white p-2 rounded-full w-full">
                    Add to Cart
                </button>
            </div>
        </motion.div>
    )

    return (
        <div className="relative w-full h-screen">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-32 h-32" />

            {loading && <LoadingSpinner />}

            {isLoaded && <ProductInfo />}

            <div className="absolute bottom-8 left-8 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
                <h3 className="font-semibold text-lg text-gray-900">Controls</h3>
                <div className="space-y-2 mt-4">
                    <button className="bg-gray-800 text-white py-2 px-4 rounded-md w-full">Rotate</button>
                    <button className="bg-gray-800 text-white py-2 px-4 rounded-md w-full">Zoom In</button>
                    <button className="bg-gray-800 text-white py-2 px-4 rounded-md w-full">Zoom Out</button>
                </div>
            </div>
        </div>
    )
}

export default ThreeDViewer