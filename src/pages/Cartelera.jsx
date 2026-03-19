import { useState } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

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

const Cartelera = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [sortValue, setSortValue] = useState('default')
  const [favorites, setFavorites] = useState(new Set())

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
        <p className="page-header__subtitle">Selecciona tu película favorita y compra tus boletos</p>
      </div>

      {favorites.size > 0 && (
        <div className="favorites-banner">
          ❤️ {favorites.size} película{favorites.size > 1 ? 's' : ''} en favoritos
        </div>
      )}

      <div className="cartelera-filters">
        <div className="filter-chips">
          {GENRES.map(g => (
            <button
              key={g.value}
              className={`filter-chip${activeFilter === g.value ? ' active' : ''}`}
              onClick={() => setActiveFilter(g.value)}
            >
              {g.label}
            </button>
          ))}
        </div>
        <select
          className="sort-select"
          value={sortValue}
          onChange={e => setSortValue(e.target.value)}
        >
          <option value="default">Por defecto</option>
          <option value="rating">Mejor calificación</option>
          <option value="title">Título A-Z</option>
        </select>
      </div>

      {sorted.length === 0 ? (
        <div className="empty-state">
          <span className="empty-state__icon">🎬</span>
          <p className="empty-state__text">No hay películas en esta categoría</p>
        </div>
      ) : (
        <div className="movies-grid">
          {sorted.map(movie => (
            <div key={movie.id} className="movie-card-container">
              <MovieCard
                {...movie}
                isFavorite={favorites.has(movie.id)}
                onToggleFavorite={() => toggleFavorite(movie.id)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Cartelera