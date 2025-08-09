import React, { useState, useEffect } from 'react';
import './LoadingSpinner.css'; // Import CSS file

const LoadingSpinner = ({ status }) => {
    const [animationState, setAnimationState] = useState('loading') // loading, success, error

    // Update the animation state when the status changes
    useEffect(() => {
        if (status === 'success') {
            setAnimationState('success');
        } else if (status === 'error') {
            setAnimationState('error');
        } else {
            setAnimationState('loading');
        }
    }, [status])

    // Render the loading animation with bouncing dots
    const renderLoading = () => (
        <div className="loading-dots">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
        </div>
    )

    // Render the success checkmark
    const renderSuccess = () => (
        <div className="success-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                <path d="M20 6L9 17l-5-5"></path>
            </svg>
        </div>
    );

    // Render the error X mark
    const renderError = () => (
        <div className="error-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                <path d="M18 6L6 18"></path>
                <path d="M6 6l12 12"></path>
            </svg>
        </div>
    )

    return (
        <div className="spinner-container">
            {animationState === 'loading' && renderLoading()}
            {animationState === 'success' && renderSuccess()}
            {animationState === 'error' && renderError()}
        </div>
    )
}

export default LoadingSpinner