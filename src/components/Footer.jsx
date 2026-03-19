import { Link } from 'react-router-dom'

const Footer = () => {
  const columns = [
    {
      title: 'Cartelera',
      links: [
        { label: 'Estrenos', to: '/cartelera' },
        { label: 'Preventas', to: '/cartelera' },
        { label: 'Funciones especiales', to: '/cartelera' },
      ],
    },
    {
      title: 'Legales',
      links: [
        { label: 'Términos y condiciones', to: '/garantia' },
        { label: 'Aviso de privacidad', to: '/garantia' },
        { label: 'Cookies', to: '/garantia' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { label: '🤙 55 1234 5678', href: 'tel:5512345678' },
        { label: '✉️ contacto@cinemax.mx', href: 'mailto:contacto@cinemax.mx' },
        { label: '💬 WhatsApp', href: 'https://wa.me/525512345678' },
      ],
    },
    {
      title: 'Corporativo',
      links: [
        { label: 'Quiénes somos', to: '/que-cine' },
        { label: 'Trabaja con nosotros', to: '/que-cine' },
        { label: 'Prensa', to: '/que-cine' },
      ],
    },
  ]

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Logo */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <div className="footer__logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="footer__logo-text">Cine<span>Max</span></span>
          </Link>
          <p className="footer__tagline">La mejor experiencia cinematográfica</p>
          <div className="footer__socials">
            {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
              <a key={i} href="#" className="footer__social-btn" aria-label={`Social ${i}`}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Columns */}
        {columns.map((col) => (
          <div key={col.title} className="footer__col">
            <h4 className="footer__col-title">{col.title}</h4>
            <ul className="footer__col-list">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a href={link.href} className="footer__col-link" target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.to} className="footer__col-link">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} CineMax · Todos los derechos reservados</p>
        <p>Hecho con ❤️ para cinéfilos</p>
      </div>
    </footer>
  )
}

export default Footer
