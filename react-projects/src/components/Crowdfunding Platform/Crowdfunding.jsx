import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CampaignProvider } from './context/CampaignContext'
import NavBar from './components/NavBar'
import CampaignForm from './components/CampaignForm'
import CampaignList from './components/CampaignList'
import CampaignDetail from './components/CampaignDetail'

const Crowdfunding = () => {
  return (
    <CampaignProvider>
      <Router>
        <div className="container mx-auto p-4">
          <NavBar />
          <h1 className="text-2xl font-bold mb-4">Crowdfunding Platform</h1>
          <CampaignForm />
          <CampaignList />
          <Routes>
            <Route path="/campaign/:id" element={<CampaignDetail />} />
          </Routes>
        </div>
      </Router>
    </CampaignProvider>
  )
}

export default Crowdfunding