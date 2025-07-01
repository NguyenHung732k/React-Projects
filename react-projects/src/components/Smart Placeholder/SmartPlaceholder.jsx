import { useState } from 'react';
import LabelInput from './LabelInput'

const SmartPlaceholder = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = () => {
        if (!email.includes('@')) {
            setError('Please enter a valid email.')
        } else {
            setError('')
            alert('Form submitted!')
        }
    }

    return (
        <div className="max-w-md mx-auto mt-12 p-6 bg-white dark:bg-gray-900 rounded-lg shadow space-y-6">
            <LabelInput
                id="email"
                label="Email Address"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                error={error}
                required
            />

            <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
            >
                Submit
            </button>
        </div>
    )
}

export default SmartPlaceholder