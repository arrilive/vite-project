import { useState, useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [peliculasOpen, setPeliculasOpen] = useState(false)
  const [mobilePeliculasOpen, setMobilePeliculasOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPeliculasOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/cartelera', label: 'Cartelera' },
    { to: '/alimentos', label: 'Alimentos' },
    { to: '/promos', label: 'Promos' },
  ]

  const peliculasSubItems = [
    { to: '/garantia', label: 'Garantía Cinépolis' },
    { to: '/que-cine', label: '+Que Cine' },
    { to: '/festivales', label: 'Festivales' },
  ]

  const getNavLinkClass = ({ isActive }) =>
    `navbar__nav-link${isActive ? ' active' : ''}`

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar__logo">
        <div className="navbar__logo-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <span className="navbar__logo-text">
          Cine<span>Max</span>
        </span>
      </Link>

      {/* Desktop Nav */}
      <ul className="navbar__nav">
        {navItems.map((item) => (
          <li key={item.to} className="navbar__nav-item">
            <NavLink
              to={item.to}
              end={item.end}
              className={getNavLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}

        {/* Películas dropdown - hover on desktop */}
        <li
          className="navbar__nav-item"
          ref={dropdownRef}
          onMouseEnter={() => setPeliculasOpen(true)}
          onMouseLeave={() => setPeliculasOpen(false)}
        >
          <button
            className={`navbar__nav-link navbar__dropdown-trigger${peliculasOpen ? ' active' : ''}`}
            onClick={() => setPeliculasOpen((p) => !p)}
            aria-expanded={peliculasOpen}
          >
            Películas
            <span className={`navbar__arrow${peliculasOpen ? ' open' : ''}`}>▾</span>
          </button>
          {peliculasOpen && (
            <div className="navbar__dropdown">
              {peliculasSubItems.map((sub) => (
                <NavLink
                  key={sub.to}
                  to={sub.to}
                  className={({ isActive }) =>
                    `navbar__dropdown-item${isActive ? ' active' : ''}`
                  }
                  onClick={() => setPeliculasOpen(false)}
                >
                  {sub.label}
                </NavLink>
              ))}
            </div>
          )}
        </li>
      </ul>

      {/* Desktop actions */}
      <div className="navbar__actions">
        <Link to="/promos" className="navbar__promo-badge">
          🎟️ Promos
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
        aria-label="Menú"
        onClick={() => setMenuOpen((p) => !p)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `navbar__mobile-link${isActive ? ' active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          {/* Mobile Películas accordion */}
          <button
            className={`navbar__mobile-link navbar__mobile-accordion${mobilePeliculasOpen ? ' active' : ''}`}
            onClick={() => setMobilePeliculasOpen((p) => !p)}
          >
            Películas <span className={`navbar__arrow${mobilePeliculasOpen ? ' open' : ''}`}>▾</span>
          </button>
          {mobilePeliculasOpen && (
            <div className="navbar__mobile-subitems">
              {peliculasSubItems.map((sub) => (
                <NavLink
                  key={sub.to}
                  to={sub.to}
                  className={({ isActive }) =>
                    `navbar__mobile-sublink${isActive ? ' active' : ''}`
                  }
                  onClick={() => { setMenuOpen(false); setMobilePeliculasOpen(false) }}
                >
                  {sub.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
