import { useState, useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NAV_ITEMS, PELICULAS_SUB_ITEMS } from '../constants/navigation'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [peliculasOpen, setPeliculasOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Cierra el dropdown al hacer clic fuera (desktop)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPeliculasOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar__logo">
        <div className="navbar__logo-icon">C</div>
        <span className="navbar__logo-text">
          Cine<span>Max</span>
        </span>
      </Link>

      {/* Navegación Desktop */}
      <ul className="navbar__nav">
        {NAV_ITEMS.map((item) => (
          <li key={item.to} className="navbar__nav-item">
            <NavLink
              to={item.to}
              end={item.end}
              className="navbar__nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}

        {/* Dropdown Películas */}
        <li
          className="navbar__nav-item"
          ref={dropdownRef}
          onMouseEnter={() => setPeliculasOpen(true)}
          onMouseLeave={() => setPeliculasOpen(false)}
        >
          <button
            className={`navbar__nav-link navbar__dropdown-trigger ${peliculasOpen ? 'active' : ''}`}
            onClick={() => setPeliculasOpen(!peliculasOpen)}
          >
            Películas ▾
          </button>

          {peliculasOpen && (
            <div className="navbar__dropdown">
              {PELICULAS_SUB_ITEMS.map((sub) => (
                <NavLink
                  key={sub.to}
                  to={sub.to}
                  className="navbar__dropdown-item"
                  onClick={() => setPeliculasOpen(false)}
                >
                  {sub.label}
                </NavLink>
              ))}
            </div>
          )}
        </li>
      </ul>

      <div className="navbar__actions">
        <Link to="/login" className="btn btn--outline" style={{ padding: '7px 16px', fontSize: '0.8rem' }}>
          Login
        </Link>
      </div>

      {/* Hamburguesa Mobile */}
      <button
        className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
        aria-label="Menú"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Menú Mobile */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <div className="navbar__mobile-divider">Películas</div>
          {PELICULAS_SUB_ITEMS.map((sub) => (
            <NavLink
              key={sub.to}
              to={sub.to}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {sub.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
