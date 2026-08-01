import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Landing from './pages/Landing.jsx'
import Affiche from './pages/Affiche.jsx'
import Ardoise from './pages/Ardoise.jsx'
import Comptoir from './pages/Comptoir.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/affiche" element={<Affiche />} />
        <Route path="/ardoise" element={<Ardoise />} />
        <Route path="/comptoir" element={<Comptoir />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
