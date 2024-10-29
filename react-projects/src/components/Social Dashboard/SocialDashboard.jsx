import React from 'react'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SocialDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <ToastContainer />
            <Dashboard />
        </div>
    )
}

export default SocialDashboard