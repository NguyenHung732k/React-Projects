import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './TestimonialCarousel.css'

// Testimonial Data
const testimonials = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO, Example Corp.",
        text: "This is an amazing service. It helped us grow our business in just a few months!"
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Marketing Director, Startup Inc.",
        text: "The customer support is phenomenal. Highly recommend to anyone in the industry."
    },
    {
        id: 3,
        name: "Michael Brown",
        position: "Product Manager, Tech Solutions",
        text: "A great tool for streamlining our operations. Very intuitive interface."
    },
]

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const touchStart = useRef(0)

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
        )
    }

    const handleSwipeStart = (event) => {
        touchStart.current = event.touches[0].clientX
    }

    const handleSwipeEnd = (event) => {
        const touchEnd = event.changedTouches[0].clientX
        const swipeDistance = touchStart.current - touchEnd
        if (swipeDistance > 50) {
            nextTestimonial()
        } else if (swipeDistance < -50) {
            prevTestimonial()
        }
    }

    return (
        <div
            className="w-full max-w-3xl mx-auto py-16 px-6"
            onTouchStart={handleSwipeStart}
            onTouchEnd={handleSwipeEnd}
        >
            <div className="relative bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-lg p-6">
                <motion.div
                    key={testimonials[currentIndex].id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="text-center text-white"
                >
                    <p className="text-2xl font-semibold mb-4">{`"${testimonials[currentIndex].text}"`}</p>
                    <p className="text-xl font-bold">{testimonials[currentIndex].name}</p>
                    <p className="text-md">{testimonials[currentIndex].position}</p>
                </motion.div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4 py-6">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-200 ${currentIndex === index
                                    ? 'bg-white scale-125'
                                    : 'bg-gray-200 hover:bg-white'
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={prevTestimonial}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-30 rounded-full p-3 shadow-lg hover:bg-opacity-70 transition duration-200"
                >
                    <FaChevronLeft size={20} />
                </button>
                <button
                    onClick={nextTestimonial}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-30 rounded-full p-3 shadow-lg hover:bg-opacity-70 transition duration-200"
                >
                    <FaChevronRight size={20} />
                </button>
            </div>
        </div>
    )
}

export default TestimonialCarousel