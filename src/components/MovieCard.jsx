import Button from './Button'

const MovieCard = ({ title, rating, genre, posterUrl, score, onViewSchedule }) => {
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
        {rating && (
          <span className="movie-card__rating-badge">{rating}</span>
        )}
        {genre && (
          <span className="movie-card__genre-badge">{genre}</span>
        )}
      </div>
      <div className="movie-card__body">
        <h3 className="movie-card__title">{title}</h3>
        {score && (
          <div className="movie-card__meta">
            <span className="movie-card__star">★</span>
            <span>{score}</span>
          </div>
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
