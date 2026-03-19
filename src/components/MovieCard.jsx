import { Link } from 'react-router-dom'

const MovieCard = ({ id, title, rating, genre, posterUrl, score, isFavorite, onToggleFavorite }) => {
  return (
    <div className="movie-card">
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
          <Link to={`/pelicula/${id}`} className="movie-card__view-btn">
            Ver detalle
          </Link>
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
        <span className="movie-card__genre">{genre}</span>
        <h3 className="movie-card__title">{title}</h3>
        <Link to={`/pelicula/${id}`} className="movie-card__link">
          Comprar boletos →
        </Link>
      </div>
    </div>
  )
}

export default MovieCard