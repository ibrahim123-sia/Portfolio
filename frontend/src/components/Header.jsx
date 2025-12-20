import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import SocialLinks from './SocialLinks'

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' },
  ]

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <span className="logo-text">Syed Ibrahim</span>
              <span className="logo-subtitle">MERN & AI/ML Engineer</span>
            </Link>
          </div>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mobile-social">
              <SocialLinks />
            </div>
          </div>

          <div className="nav-actions">
            <SocialLinks />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            
            <button 
              className="menu-toggle" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
              <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
              <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
          z-index: 1000;
          backdrop-filter: blur(10px);
          background: rgba(var(--bg-primary-rgb), 0.95);
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
        }
        
        .logo a {
          text-decoration: none;
          display: flex;
          flex-direction: column;
        }
        
        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .logo-subtitle {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        
        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
          transition: var(--transition);
        }
        
        .nav-link:hover,
        .nav-link.active {
          color: var(--accent-primary);
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
          border-radius: 1px;
        }
        
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .menu-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
        }
        
        .bar {
          width: 25px;
          height: 2px;
          background: var(--text-primary);
          margin: 3px 0;
          transition: var(--transition);
          border-radius: 1px;
        }
        
        .bar.active:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .bar.active:nth-child(2) {
          opacity: 0;
        }
        
        .bar.active:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }
        
        .mobile-social {
          display: none;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            height: 100vh;
            background: var(--bg-primary);
            flex-direction: column;
            justify-content: center;
            gap: 2rem;
            transition: right 0.3s ease;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
            padding: 2rem;
          }
          
          .nav-links.active {
            right: 0;
          }
          
          .menu-toggle {
            display: flex;
          }
          
          .mobile-social {
            display: flex;
            margin-top: 2rem;
          }
          
          .nav-actions > :not(.menu-toggle) {
            display: none;
          }
        }
      `}</style>
    </header>
  )
}

export default Header