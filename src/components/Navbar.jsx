import { useState, useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

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

  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/cartelera', label: 'Cartelera' },
    { to: '/alimentos', label: 'Alimentos' },
    { to: '/promos', label: 'Promos' },
    { to: '/otros', label: 'Otros' },
  ]

  const peliculasSubItems = [
    { to: '/garantia', label: 'Garantía Cinépolis' },
    { to: '/que-cine', label: '+Que Cine' },
    { to: '/festivales', label: 'Festivales' },
  ]

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
        {navItems.map((item) => (
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
              {peliculasSubItems.map((sub) => (
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
          {navItems.map((item) => (
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
          {peliculasSubItems.map((sub) => (
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
