import { useState } from 'react'
import Button from './Button'

const MovieCard = ({ title, rating, genre, posterUrl, score, description, onViewSchedule, isFavorite, onToggleFavorite }) => {
  const [showDesc, setShowDesc] = useState(false)

  return (
    <div className="movie-card">
      <div className="movie-card__poster-wrap">
        <img
          src={posterUrl}
          alt={title}
          className="movie-card__poster"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.style.background = 'linear-gradient(135deg, #0a3270, #08285B)'
          }}
        />
        <div className="movie-card__overlay" />
        {rating && <span className="movie-card__rating-badge">{rating}</span>}
        {genre && <span className="movie-card__genre-badge">{genre}</span>}

        {/* Botón favorito */}
        <button
          onClick={onToggleFavorite}
          style={{
            position: 'absolute', bottom: 12, right: 12,
            background: isFavorite ? '#e74c3c' : 'rgba(0,0,0,0.5)',
            border: 'none', borderRadius: '50%', width: 32, height: 32,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', fontSize: '1rem', transition: 'all 0.2s',
            backdropFilter: 'blur(4px)'
          }}
          title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="movie-card__body">
        <h3 className="movie-card__title">{title}</h3>

        {score && (
          <div className="movie-card__meta">
            <span className="movie-card__star">★</span>
            <span>{score}</span>
          </div>
        )}

        {/* Toggle descripción */}
        <button
          onClick={() => setShowDesc(prev => !prev)}
          style={{
            background: 'none', border: 'none', padding: 0,
            color: '#0083FF', fontSize: '0.75rem', fontWeight: 600,
            cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit'
          }}
        >
          {showDesc ? '▲ Ocultar info' : '▼ Ver descripción'}
        </button>

        {showDesc && description && (
          <p style={{
            fontSize: '0.78rem', color: '#636e72',
            lineHeight: 1.5, animation: 'fadeSlide 0.2s ease'
          }}>
            {description}
          </p>
        )}

        <div className="movie-card__btn">
          <Button variant="blue" size="sm" fullWidth onClick={onViewSchedule}>
            Ver horarios
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard