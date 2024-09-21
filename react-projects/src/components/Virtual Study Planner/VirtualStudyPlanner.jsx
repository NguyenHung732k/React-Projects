import React from 'react'
import { StudyProvider } from './context/StudyContext'
import Dashboard from './components/Dashboard'
import StudyCalendar from './components/StudyCalendar'
import Notes from './components/Notes'
import Resources from './components/Resources'
import Goals from './components/Goals'
import Reminders from './components/Reminders'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const VirtualStudyPlanner = () => (
    <StudyProvider>
        <div>
            <Dashboard />
            <StudyCalendar />
            <Notes />
            <Resources />
            <Goals />
            <Reminders />
        </div>
        <ToastContainer />
    </StudyProvider>
)

export default VirtualStudyPlanner