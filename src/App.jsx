import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Members from './pages/Members'
import Jerseys from './pages/Jerseys'
import Locations from './pages/Locations'
import { Routes, Route } from 'react-router-dom'

function App() {
  const logo = new URL('./assets/images/nomad_logo.png', import.meta.url).href

  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <img src={logo} alt="NoMad logo" className="site-logo" />
          <h1 className="title">NoMad Umpires</h1>
        </div>
        <Nav />
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/jerseys" element={<Jerseys />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>
      <footer className="footer">
        🐪 NoMad Umpires |
        Copyright &copy; 2026 |
        All Rights Reserved | S&I Web Design
      </footer>
    </div>
  )
}

export default App
