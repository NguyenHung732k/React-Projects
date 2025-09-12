import React from 'react';
import StorySection from './StorySection'

const ScrollBlur = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-700 text-white px-8 py-20">
      {/* Scroll Indicator */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
        <p className="text-lg">Scroll down</p>
        <div className="w-8 h-8 border-4 border-white rounded-full animate-bounce"></div>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-6 text-white">
          Scroll Through Our Story
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Experience a dynamic, scroll-triggered storytelling experience with smooth transitions and blurred visuals.
        </p>
      </div>

      {/* Section 1 */}
      <StorySection>
        <div className="max-w-3xl mx-auto text-center bg-white text-gray-900 rounded-lg p-10 shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Chapter 1: The Beginning</h2>
          <p className="text-xl">
            A new chapter unfolds as we dive into the world of storytelling. Watch as the page transitions.
          </p>
        </div>
      </StorySection>

      {/* Section 2 */}
      <StorySection>
        <div className="max-w-3xl mx-auto text-center bg-white text-gray-900 rounded-lg p-10 shadow-lg mt-20">
          <h2 className="text-4xl font-bold mb-6">Chapter 2: The Journey</h2>
          <p className="text-xl">
            As the journey progresses, each moment gets more surreal, fading and blurring into the distance.
          </p>
        </div>
      </StorySection>

      {/* Section 3 */}
      <StorySection>
        <div className="max-w-3xl mx-auto text-center bg-white text-gray-900 rounded-lg p-10 shadow-lg mt-20">
          <h2 className="text-4xl font-bold mb-6">Chapter 3: The Finale</h2>
          <p className="text-xl">
            The story comes to a close with a dramatic fade-out, leaving behind a memory of moments lived.
          </p>
        </div>
      </StorySection>
    </div>
  )
}

export default ScrollBlur