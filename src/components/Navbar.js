import React from 'react'
import Home from '../pages/Home.js'
import { Link, Route, Routes } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Routes>
        <Route to="/" element={<Home/>}/>
      </Routes>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Navbar
