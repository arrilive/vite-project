import { useState } from 'react'
import MovieCard from '../components/MovieCard'
import Dropdown from '../components/Dropdown'
import Button from '../components/Button'

const MOVIES = [
  {
    id: 1, title: 'Dune: Parte Dos', rating: 'PG-13', genre: 'Sci-Fi', score: '8.6',
    description: 'Paul Atreides se une a los Fremen para vengar a su familia y dar forma a su destino en Arrakis.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
  },
  {
    id: 2, title: 'Kung Fu Panda 4', rating: 'PG', genre: 'Animación', score: '7.2',
    description: 'Po debe entrenar a un nuevo guerrero dragón mientras enfrenta a una poderosa hechicera.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg',
  },
  {
    id: 3, title: 'Godzilla x Kong', rating: '13+', genre: 'Acción', score: '7.8',
    description: 'Dos titanes se alían para enfrentar una amenaza colosal que surge desde el interior de la Tierra.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
  },
  {
    id: 4, title: 'The Batman', rating: '17+', genre: 'Acción', score: '7.9',
    description: 'Batman investiga una serie de crímenes en Gotham perpetrados por un enigmático asesino.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
  },
  {
    id: 5, title: 'Oppenheimer', rating: '17+', genre: 'Drama', score: '8.9',
    description: 'La historia del físico J. Robert Oppenheimer y el desarrollo de la bomba atómica.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
  },
  {
    id: 6, title: 'Spider-Man: No Way Home', rating: 'PG-13', genre: 'Superhéroes', score: '8.3',
    description: 'Peter Parker pide al Doctor Strange un hechizo que sale mal, abriendo el multiverso.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  },
  {
    id: 7, title: 'Avatar: El Camino del Agua', rating: 'PG-13', genre: 'Aventura', score: '7.6',
    description: 'Jake Sully y Neytiri deben proteger a su familia y a los pueblos del agua de Pandora.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
  },
  {
    id: 8, title: 'Cars 3', rating: 'G', genre: 'Animación', score: '6.8',
    description: 'Rayo McQueen regresa para demostrar que aún tiene lo necesario para competir al más alto nivel.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/tMMe4zklkYGNnJcxPkFNfd5y3Su.jpg',
  },
]

const GENRES = [
  { value: 'all', label: 'Todos' },
  { value: 'Acción', label: 'Acción' },
  { value: 'Animación', label: 'Animación' },
  { value: 'Drama', label: 'Drama' },
  { value: 'Sci-Fi', label: 'Sci-Fi' },
  { value: 'Superhéroes', label: 'Superhéroes' },
  { value: 'Aventura', label: 'Aventura' },
]

/* ── Modal de compra ─────────────────────── */
const BuyModal = ({ movie, onClose }) => {
  const [form, setForm] = useState({ nombre: '', fecha: '', cantidad: '1' })
  const [submitted, setSubmitted] = useState(false)

  // onChange controlado
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  // onSubmit requerido
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = {
    padding: '12px 14px', background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8,
    color: '#fff', fontSize: '0.9rem', fontFamily: 'inherit',
    outline: 'none', width: '100%'
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000, padding: 24
    }}>
      <div style={{
        background: '#08285B', border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: 20, padding: 36, width: '100%', maxWidth: 440,
        boxShadow: '0 24px 64px rgba(0,0,0,0.5)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>
            🎟️ Comprar boletos
          </h2>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
            width: 32, height: 32, color: '#fff', cursor: 'pointer', fontSize: '1rem'
          }}>✕</button>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: 24 }}>
          {movie.title} · ⭐ {movie.score}
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
                Nombre completo
              </label>
              <input
                name="nombre"
                type="text"
                required
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={handleChange}   // onChange ✅
                style={inputStyle}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
                Fecha y función
              </label>
              <input
                name="fecha"
                type="datetime-local"
                required
                value={form.fecha}
                onChange={handleChange}   // onChange ✅
                style={inputStyle}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
                Cantidad de boletos
              </label>
              <select
                name="cantidad"
                value={form.cantidad}
                onChange={handleChange}   // onChange ✅
                style={inputStyle}
              >
                {[1, 2, 3, 4, 5, 6].map(n => (
                  <option key={n} value={n} style={{ background: '#08285B' }}>{n} boleto{n > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div style={{ marginTop: 8, display: 'flex', gap: 10 }}>
              <Button variant="blue" fullWidth>Confirmar compra</Button>
            </div>
          </form>
        ) : (
          /* Confirmación tras onSubmit */
          <div style={{
            background: 'rgba(0,204,106,0.1)', border: '1px solid rgba(0,204,106,0.3)',
            borderRadius: 12, padding: 24, textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>✅</div>
            <h3 style={{ color: '#00CC6A', fontWeight: 800, marginBottom: 16 }}>¡Compra confirmada!</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, textAlign: 'left' }}>
              {[
                ['Película', movie.title],
                ['Nombre', form.nombre],
                ['Función', new Date(form.fecha).toLocaleString('es-MX', { dateStyle: 'medium', timeStyle: 'short' })],
                ['Boletos', form.cantidad],
                ['Total', `$${(movie.score > 8 ? 140 : 110) * parseInt(form.cantidad)} MXN`],
              ].map(([label, val]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>{val}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <Button variant="dark-blue" fullWidth onClick={onClose}>Cerrar</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Cartelera ───────────────────────────── */
const Cartelera = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [sortValue, setSortValue] = useState('default')
  const [favorites, setFavorites] = useState(new Set())       // interacción 1 ✅
  const [selectedMovie, setSelectedMovie] = useState(null)    // para modal

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const filtered = activeFilter === 'all' ? MOVIES : MOVIES.filter(m => m.genre === activeFilter)
  const sorted = [...filtered].sort((a, b) => {
    if (sortValue === 'rating') return parseFloat(b.score) - parseFloat(a.score)
    if (sortValue === 'title') return a.title.localeCompare(b.title)
    return 0
  })

  return (
    <div>
      <div className="page-header">
        <p className="page-header__eyebrow">En cartelera</p>
        <h1 className="page-header__title">Películas disponibles</h1>
        <p className="page-header__subtitle">
          Selecciona tu película favorita y compra tus boletos
        </p>
      </div>

      {/* Contador de favoritos */}
      {favorites.size > 0 && (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(231,76,60,0.15)', border: '1px solid rgba(231,76,60,0.3)',
          borderRadius: 20, padding: '6px 16px', marginBottom: 24,
          fontSize: '0.82rem', color: '#e74c3c', fontWeight: 600
        }}>
          ❤️ {favorites.size} película{favorites.size > 1 ? 's' : ''} en favoritos
        </div>
      )}

      <div className="cartelera-filters">
        {GENRES.map(g => (
          <button
            key={g.value}
            className={`filter-chip ${activeFilter === g.value ? 'active' : ''}`}
            onClick={() => setActiveFilter(g.value)}
          >
            {g.label}
          </button>
        ))}
        <div style={{ marginLeft: 'auto' }}>
          <Dropdown
            label="Ordenar por"
            options={[
              { value: 'default', label: 'Por defecto' },
              { value: 'rating', label: 'Mejor calificación' },
              { value: 'title', label: 'Título A-Z' },
            ]}
            value={sortValue}
            onChange={setSortValue}
          />
        </div>
      </div>

      {sorted.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state__label">Sin resultados</div>
          <p className="empty-state__text">No hay películas en esta categoría</p>
        </div>
      ) : (
        <div className="movies-grid">
          {sorted.map(movie => (
            <MovieCard
              key={movie.id}
              {...movie}
              isFavorite={favorites.has(movie.id)}
              onToggleFavorite={() => toggleFavorite(movie.id)}
              onViewSchedule={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      )}

      {/* Modal de compra */}
      {selectedMovie && (
        <BuyModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  )
}

export default Cartelera