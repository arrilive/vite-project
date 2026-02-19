import { useState } from 'react'
import MovieCard from '../components/MovieCard'
import Dropdown from '../components/Dropdown'

const MOVIES = [
  {
    id: 1,
    title: 'Dune: Parte Dos',
    rating: 'PG-13',
    genre: 'Sci-Fi',
    score: '8.6',
    posterUrl: 'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
  },
  {
    id: 2,
    title: 'Kung Fu Panda 4',
    rating: 'PG',
    genre: 'Animación',
    score: '7.2',
    posterUrl: 'https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg',
  },
  {
    id: 3,
    title: 'Godzilla x Kong',
    rating: '13+',
    genre: 'Acción',
    score: '7.8',
    posterUrl: 'https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
  },
  {
    id: 4,
    title: 'The Batman',
    rating: '17+',
    genre: 'Acción',
    score: '7.9',
    posterUrl: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
  },
  {
    id: 5,
    title: 'Oppenheimer',
    rating: '17+',
    genre: 'Drama',
    score: '8.9',
    posterUrl: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
  },
  {
    id: 6,
    title: 'Spider-Man: No Way Home',
    rating: 'PG-13',
    genre: 'Superhéroes',
    score: '8.3',
    posterUrl: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  },
  {
    id: 7,
    title: 'Avatar: El Camino del Agua',
    rating: 'PG-13',
    genre: 'Aventura',
    score: '7.6',
    posterUrl: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
  },
  {
    id: 8,
    title: 'Cars 3',
    rating: 'G',
    genre: 'Animación',
    score: '6.8',
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

  const filtered = activeFilter === 'all'
    ? MOVIES
    : MOVIES.filter((m) => m.genre === activeFilter)

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

      <div className="cartelera-filters">
        {GENRES.map((g) => (
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
          {sorted.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              rating={movie.rating}
              genre={movie.genre}
              score={movie.score}
              posterUrl={movie.posterUrl}
              onViewSchedule={() => alert(`Horarios de ${movie.title}`)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Cartelera
