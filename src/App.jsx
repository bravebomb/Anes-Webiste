import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Buy from './pages/Bloggar.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bloggar" element={<Buy />} />
    </Routes>
  )
}

export default App
