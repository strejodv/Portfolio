import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar">
        <div class="logo">Strejodv</div>

        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="https://www.linkedin.com/in/stefanotrejo/" target="_blank" aria-label="Twitter">
            <i class='bx bxl-linkedin-square'></i> 
            </a></li>
            <li><a href="https://github.com/strejodv" target="_blank" aria-label="Facebook"> 
            <i className="bx bxl-github"></i>
            </a></li>
        </ul>
    </nav>
  )
}

export default Navbar

