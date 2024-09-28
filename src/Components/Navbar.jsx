import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar">
        <div class="logo">Strejodv</div>

        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
        </ul>
    </nav>
  )
}

export default Navbar