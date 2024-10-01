import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar">
        <div class="logo">Strejodv</div>

        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="https://www.linkedin.com/in/stefanotrejo/">About</a></li>
            <li><a href="https://github.com/strejodv">Github</a></li>
        </ul>
    </nav>
  )
}

export default Navbar

