import { Link, useNavigate } from 'react-router-dom'

const MovieCard = ({ id, title, rating, genre, posterUrl, score, isFavorite, onToggleFavorite }) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/pelicula/${id}`)
  }

  return (
    <div className="movie-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="movie-card__poster-wrap">
        <img
          src={posterUrl}
          alt={title}
          className="movie-card__poster"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.style.background = 'linear-gradient(135deg, var(--color-surface), var(--color-bg))'
          }}
        />
        <div className="movie-card__overlay">
          <span className="movie-card__view-btn">Ver detalle</span>
        </div>
        
        {rating && <span className="movie-card__rating-badge">{rating}</span>}
        {score && (
          <span className="movie-card__score-badge">
            ⭐ {score}
          </span>
        )}

        {/* Favorite button */}
        <button
          className={`movie-card__fav-btn ${isFavorite ? 'active' : ''}`}
          style={{ color: isFavorite ? 'var(--color-danger)' : 'white' }}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onToggleFavorite()
          }}
          title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="movie-card__body">
        <span className="movie-card__genre" style={{ color: 'var(--color-blue-accent)' }}>{genre}</span>
        <h3 className="movie-card__title">{title}</h3>
        <span className="movie-card__link">
          Comprar boletos →
        </span>
      </div>
    </div>
  )
}

export default MovieCard