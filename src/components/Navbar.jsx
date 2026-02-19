import { useState } from 'react'

const Navbar = ({ currentPage, onNavigate, onLogout }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = [
        { id: 'cartelera', label: 'Cartelera' },
        { id: 'alimentos', label: 'Alimentos' },
        { id: 'otros', label: 'Más' },
    ]

    const handleNav = (id) => {
        onNavigate(id)
        setMenuOpen(false)
    }

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <div className="navbar__logo-icon">C</div>
                <span className="navbar__logo-text">
                    Cine<span>Max</span>
                </span>
            </div>

            {/* Desktop nav */}
            <ul className="navbar__nav">
                {navItems.map((item) => (
                    <li key={item.id} className="navbar__nav-item">
                        <button
                            className={`navbar__nav-link ${currentPage === item.id ? 'active' : ''}`}
                            onClick={() => handleNav(item.id)}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="navbar__actions">
                <button className="navbar__user-btn" title="Mi cuenta">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </button>
                <button
                    className="btn btn--outline"
                    style={{ padding: '7px 16px', fontSize: '0.8rem' }}
                    onClick={onLogout}
                >
                    Salir
                </button>
            </div>

            {/* Hamburger toggle */}
            <button
                className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
                aria-label="Menú"
                onClick={() => setMenuOpen((prev) => !prev)}
            >
                <span />
                <span />
                <span />
            </button>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="navbar__mobile-menu">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`navbar__mobile-link ${currentPage === item.id ? 'active' : ''}`}
                            onClick={() => handleNav(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}

                </div>
            )}
        </nav>
    )
}

export default Navbar
