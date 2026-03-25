import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { MOVIES } from '../data/movies'
import { HORARIOS, PRECIO_GENERAL } from '../constants/horarios'

const DetallePelicula = () => {
  const { id } = useParams()
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [selectedHorario, setSelectedHorario] = useState(null)
  const [boletos, setBoletos] = useState(1)
  const movie = MOVIES.find(m => m.id === parseInt(id))

  if (!movie) {
    return (
      <div className="detalle-not-found">
        <span className="detalle-not-found__icon">🎬</span>
        <h2>Película no encontrada</h2>
        <p>El ID <strong>"{id}"</strong> no corresponde a ninguna película.</p>
        <Link to="/cartelera" className="btn btn--red detalle-not-found__back">
          ← Volver a Cartelera
        </Link>
      </div>
    )
  }

  const handleComprar = () => {
    if (!selectedHorario) {
      alert('Por favor selecciona un horario')
      return
    }
    setMostrarFormulario(true)
  }

  return (
    <div className="detalle">
      {/* Hero backdrop */}
      <div
        className="detalle__hero"
        style={{ backgroundImage: `url(${movie.bgUrl})` }}
      >
        <div className="detalle__hero-overlay" />
        <div className="detalle__hero-content">
          <Link to="/cartelera" className="detalle__back">← Cartelera</Link>
          <div className="detalle__hero-body">
            <img src={movie.posterUrl} alt={movie.title} className="detalle__poster" />
            <div className="detalle__info">
              <span className="detalle__genre">{movie.genre}</span>
              <h1 className="detalle__title">{movie.title}</h1>
              <div className="detalle__meta">
                <span className="detalle__rating">{movie.rating}</span>
                <span className="detalle__score">⭐ {movie.score}</span>
                <span className="detalle__duracion">🕐 {movie.duracion}</span>
              </div>
              <p className="detalle__sinopsis">{movie.sinopsis}</p>
              <div className="detalle__crew">
                <div><strong>Director:</strong> {movie.director}</div>
                <div><strong>Reparto:</strong> {movie.reparto}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horarios y compra */}
      <div className="detalle__buy-section">
        {!mostrarFormulario ? (
          <>
            <h2 className="detalle__buy-title">Selecciona tu horario</h2>
            <div className="detalle__horarios">
              {HORARIOS.map(h => (
                <button
                  key={h}
                  className={`horario-btn ${selectedHorario === h ? 'active' : ''}`}
                  onClick={() => setSelectedHorario(h)}
                >
                  {h}
                </button>
              ))}
            </div>
            <button className="btn btn--red btn--lg detalle__comprar" onClick={handleComprar}>
              🎟️ Comprar Boletos
            </button>
            <p className="detalle__price-note">Boleto general ${PRECIO_GENERAL} MXN · Niños y mayores $85 MXN</p>
          </>
        ) : (
          <div className="detalle__compra-form">
            <h2 className="detalle__buy-title">Confirmar Compra</h2>
            <p>Película: <strong>{movie.title}</strong></p>
            <p>Horario: <strong>{selectedHorario}</strong></p>

            <div className="form-group detalle__boletos-group">
              <label>Cantidad de boletos: </label>
              <input
                type="number"
                min="1"
                value={boletos}
                onChange={(e) => setBoletos(e.target.value)}
                className="detalle__boletos-input"
              />
            </div>

            <p className="detalle__total">Total: <strong>${boletos * PRECIO_GENERAL} MXN</strong></p>

            <div className="detalle__compra-actions">
              <button className="btn btn--accent" onClick={() => alert('¡Compra realizada con éxito!')}>Pagar Ahora</button>
              <button className="btn btn--outline-white" onClick={() => setMostrarFormulario(false)}>Cancelar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DetallePelicula
