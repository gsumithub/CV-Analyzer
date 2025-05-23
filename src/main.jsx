import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext'

// Import page components
import Home from './Home.jsx'
import Upload from './components/pages/Upload.jsx'
import Dashboard from './components/pages/Dashboard.jsx'
import Analysis from './components/pages/Analysis.jsx'
import Admin from './components/pages/Admin.jsx'
import Sort from './components/pages/Sort.jsx'
import Analytics from './components/pages/Analytics.jsx'
import RolesPage from './components/pages/RolesPage.jsx'
import Dataset from './components/pages/Dataset.jsx'
import Settings from './components/pages/Settings.jsx'
import Desk from './components/pages/Desk.jsx'

// Import layout
import Layout from './components/layout/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="upload" element={<Upload />} />
            <Route path="dataset" element={<Dataset />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="analysis" element={<Analysis />} />
            <Route path="sort" element={<Sort />} />
            <Route path="desk" element={<Desk />} />
            <Route path="settings" element={<Settings />} />
            <Route path="admin" element={<Admin />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="roles" element={<RolesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
) 