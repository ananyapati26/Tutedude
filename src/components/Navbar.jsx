import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-container">
        <div className="name">
          <a href="#">Logo</a>
        </div>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
    <div className="secondary-navbar">
      <ul className="nav-links">
        <li><a href="#">Overview</a></li>
        <li><a href="#">Curriculum</a></li>
        <li><a href="#">Refund</a></li>
        <li><a href="#">Testimonials</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar
