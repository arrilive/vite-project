import { Link } from 'react-router-dom'
import MovieCarousel from '../components/MovieCarousel'

const PROXIMAMENTE = [
  {
    id: 10,
    titulo: 'Inside Out 3',
    imagen: 'https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    estreno: 'Junio 2025',
    genero: 'Animación',
  },
  {
    id: 11,
    titulo: 'Avengers: Doomsday',
    imagen: 'https://image.tmdb.org/t/p/w500/z2YaoF7GXlNEJEGTHcBq1Bk5Kwt.jpg',
    estreno: 'Mayo 2026',
    genero: 'Superhéroes',
  },
  {
    id: 12,
    titulo: 'Misión Imposible 8',
    imagen: 'https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg',
    estreno: 'Julio 2025',
    genero: 'Acción',
  },
]

const Home = () => {
  return (
    <div className="home">
      {/* Hero */}
      <section className="home__hero">
        <div className="home__hero-content">
          <span className="home__hero-eyebrow">🎬 Bienvenido a CineMax</span>
          <h1 className="home__hero-title">
            La mejor experiencia<br />
            <span>cinematográfica</span>
          </h1>
          <p className="home__hero-subtitle">
            Disfruta los últimos estrenos en pantalla grande con el mejor sonido y tecnología.
          </p>
          <div className="home__hero-actions">
            <Link to="/cartelera" className="btn btn--red btn--lg">
              Ver Cartelera
            </Link>
            <Link to="/promos" className="btn btn--outline-white btn--lg">
              Ver Promos
            </Link>
          </div>
        </div>
        <div className="home__hero-stats">
          {[
            { value: '12+', label: 'Salas' },
            { value: '4K', label: 'Calidad' },
            { value: 'Dolby', label: 'Sonido' },
          ].map((s) => (
            <div key={s.label} className="home__stat">
              <span className="home__stat-value">{s.value}</span>
              <span className="home__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Carrusel de estrenos */}
      <section className="home__section">
        <div className="home__section-header">
          <h2 className="home__section-title">🔥 Estrenos Ahora</h2>
          <Link to="/cartelera" className="home__section-link">Ver todos →</Link>
        </div>
        <MovieCarousel />
      </section>

      {/* Próximamente */}
      <section className="home__section">
        <div className="home__section-header">
          <h2 className="home__section-title">🗓️ Próximamente</h2>
          <Link to="/cartelera" className="home__section-link">Ver preventas →</Link>
        </div>
        <div className="home__proximamente-grid">
          {PROXIMAMENTE.map((peli) => (
            <Link key={peli.id} to={`/pelicula/${peli.id}`} className="proximamente-card">
              <div className="proximamente-card__img-wrap">
                <img
                  src={peli.imagen}
                  alt={peli.titulo}
                  className="proximamente-card__img"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.style.background = 'linear-gradient(135deg, var(--color-surface), var(--color-bg))'
                  }}
                />
                <span className="proximamente-card__genre">{peli.genero}</span>
                <div className="proximamente-card__overlay" />
              </div>
              <div className="proximamente-card__body">
                <h3 className="proximamente-card__title">{peli.titulo}</h3>
                <span className="proximamente-card__estreno">📅 {peli.estreno}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Banner promocional */}
      <section className="home__promo-banner">
        <div className="home__promo-banner-content">
          <div>
            <h3 className="home__promo-title">🎟️ 2x1 los martes</h3>
            <p className="home__promo-desc">Presenta tu credencial y lleva a quien quieras</p>
          </div>
          <Link to="/promos" className="btn btn--red">
            Ver todas las promos
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
