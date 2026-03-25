import { useState } from 'react'
import MovieCard from '../components/MovieCard'
import { MOVIES, GENRES } from '../data/movies'

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