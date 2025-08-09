import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner'

const MorphSubmitButton = () => {
    const [status, setStatus] = useState('idle') // idle, loading, success, error
    const [message, setMessage] = useState('')

    // Handle the form submission
    const submitForm = async () => {
        setStatus('loading')
        setMessage('')

        try {
            await new Promise((resolve, reject) => setTimeout(resolve, 2000))
            setStatus('success')
            setMessage('Form submitted successfully!')
        } catch (error) {
            setStatus('error')
            setMessage('Something went wrong, please try again.')
        }
    }

    return (
        <div className="form-container">
            <div className="form-box">
                <h2 className="form-heading">Submit Your Form</h2>

                <div className="form-content">
                    {/* Submit Button */}
                    <button
                        onClick={submitForm}
                        disabled={status === 'loading'}
                        className={`submit-btn ${status === 'loading' ? 'disabled' : ''}`}
                    >
                        {status === 'loading' ? 'Submitting...' : 'Submit Form'}
                    </button>

                    {/* Loading Spinner */}
                    <LoadingSpinner status={status} />

                    {/* Status Message */}
                    <div className="status-message">
                        {message && (
                            <p className={`status-text ${status === 'success' ? 'success' : 'error'}`}>
                                {message}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MorphSubmitButton