import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
      <NavLink to="/members" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Members</NavLink>
      <NavLink to="/jerseys" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Jerseys</NavLink>
    </nav>
  )
}
