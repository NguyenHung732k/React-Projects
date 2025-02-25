import React, { useState } from 'react'
import Button from './components/Button'
import Modal from './components/Modal'
import Card from './components/Card'
import ThemeToggle from './components/ThemeToggle'
import { useTheme } from './context/ThemeContext'

const UIComponentLibrary = () => {
    const { isDark } = useTheme()
    const [modalOpen, setModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleButtonClick = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000)
    }

    return (
        <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen transition-all duration-300`}>
            <div className="container mx-auto p-4">
                <ThemeToggle />

                <div className="my-6">
                    <h1 className="text-2xl font-bold">UI Component Library</h1>
                    <p className="mt-2">Testing various reusable components in this app.</p>
                </div>

                <div className="my-4">
                    <Button variant="primary" onClick={handleButtonClick} isLoading={loading}>
                        Click Me {loading ? 'Loading...' : ''}
                    </Button>
                </div>

                <div className="my-4">
                    <Button variant="secondary" onClick={() => setModalOpen(true)}>
                        Open Modal
                    </Button>
                </div>
                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                    <h2 className="text-lg font-semibold">Hello, this is a Modal!</h2>
                    <p className="mt-2">You can close me by clicking the button or outside the modal.</p>
                </Modal>

                <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card title="Card 1" content="This is the content of Card 1" />
                    <Card title="Card 2" content="This is the content of Card 2" />
                    <Card title="Card 3" content="This is the content of Card 3" />
                </div>
            </div>
        </div>
    )
}

export default UIComponentLibrary