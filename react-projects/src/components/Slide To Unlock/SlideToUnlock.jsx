import React from 'react'
import Slide from './Slide'

const SlideToUnlock = () => {
    const handleConfirm = () => {
        console.log('✅ Unlocked!')
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <Slide
                onConfirm={handleConfirm}
                label="Slide to unlock"
                confirmedLabel="Unlocked!"
                resetAfter={3}
                icon="➡️"
                confirmedIcon="🔓"
            />
        </div>
    )
}

export default SlideToUnlock