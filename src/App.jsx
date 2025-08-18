import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Bloggar from './pages/Bloggar.jsx'
import Film from './pages/Film-Sondag.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bloggar" element={<Bloggar />} />
      <Route path="/film-sondag" element={<Film />} />
    </Routes>
  )
}

export default App
