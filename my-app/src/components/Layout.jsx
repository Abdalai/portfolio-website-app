"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Layout.css"

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ]

  const handleNavClick = () => {
    setIsMenuOpen(false)
    // Scroll to top when clicking navigation links
    window.scrollTo(0, 0)
  }

  return (
    <div className="layout">
      <header className="header">
        <nav className="nav">
          <div className="container">
            <div className="nav-content">
              <Link to="/" className="logo" onClick={handleNavClick}>
                <img src="/images/logo.png" alt="Code Crafter Quest" className="logo-image" />
                <span className="logo-text">Abdalai Khamel</span>
              </Link>

              <div className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}>
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? "nav-link-active" : ""}`}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/contact" className="nav-link mobile-cta" onClick={handleNavClick}>
                  Get in Touch
                </Link>
              </div>

              <Link to="/contact" className="cta-button" onClick={handleNavClick}>
                Get in Touch
              </Link>

              <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Abdalai Khamel</h3>
              <p>Frontend Developer & Graphic Designer</p>
              <p>Creating beautiful digital experiences</p>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <p>codecraftersquest@gmail.com</p>
              <p>+46763410087</p>
              <p>Borlänge, Sweden</p>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <p>Frontend Development</p>
              <p>Graphic Design</p>
              <p>UI/UX Design</p>
              <p>Web Maintenance</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Abdalai Khamel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
