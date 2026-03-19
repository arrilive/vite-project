import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

const ALL_MOVIES = [
  {
    id: 1, title: 'Dune: Parte Dos', rating: 'PG-13', genre: 'Sci-Fi', score: '8.6',
    duracion: '166 min', sinopsis: 'Paul Atreides se une a los Fremen y lidera una guerra santa para vengar a su familia y dar forma al destino del universo. Mientras dos fuerzas colisionan, él debe elegir entre el amor de su vida y el futuro de millones de personas.',
    director: 'Denis Villeneuve', reparto: 'Timothée Chalamet, Zendaya, Rebecca Ferguson',
    posterUrl: 'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
    bgUrl: 'https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
  },
  {
    id: 2, title: 'Kung Fu Panda 4', rating: 'PG', genre: 'Animación', score: '7.2',
    duracion: '94 min', sinopsis: 'Po debe entrenar a un nuevo guerrero dragón mientras enfrenta a la poderosa hechicera Camaleón, quien roba los poderes de villanos del pasado.',
    director: 'Mike Mitchell', reparto: 'Jack Black, Awkwafina, Viola Davis',
    posterUrl: 'https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg',
    bgUrl: 'https://image.tmdb.org/t/p/original/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg',
  },
  {
    id: 3, title: 'Godzilla x Kong', rating: '13+', genre: 'Acción', score: '7.8',
    duracion: '115 min', sinopsis: 'Los titanes más poderosos del planeta unen fuerzas para enfrentar una amenaza colosal que surge desde las profundidades de la Tierra, en una épica batalla que decidirá el futuro.',
    director: 'Adam Wingard', reparto: 'Rebecca Hall, Brian Tyree Henry, Dan Stevens',
    posterUrl: 'https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
    bgUrl: 'https://image.tmdb.org/t/p/original/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
  },
  {
    id: 4, title: 'The Batman', rating: '17+', genre: 'Acción', score: '7.9',
    duracion: '176 min', sinopsis: 'En su segundo año como Batman, Bruce Wayne descubre corrupción en Gotham mientras persigue al asesino serial conocido como el Acertijo.',
    director: 'Matt Reeves', reparto: 'Robert Pattinson, Zoë Kravitz, Paul Dano',
    posterUrl: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    bgUrl: 'https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg',
  },
  {
    id: 5, title: 'Oppenheimer', rating: '17+', genre: 'Drama', score: '8.9',
    duracion: '180 min', sinopsis: 'La historia del físico J. Robert Oppenheimer y el proyecto Manhattan que desarrolló las primeras armas nucleares durante la Segunda Guerra Mundial.',
    director: 'Christopher Nolan', reparto: 'Cillian Murphy, Emily Blunt, Matt Damon',
    posterUrl: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    bgUrl: 'https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
  },
  {
    id: 6, title: 'Spider-Man: No Way Home', rating: 'PG-13', genre: 'Superhéroes', score: '8.3',
    duracion: '148 min', sinopsis: 'Peter Parker pide al Doctor Strange un hechizo para que el mundo olvide su identidad secreta, pero algo sale terriblemente mal abriendo el multiverso.',
    director: 'Jon Watts', reparto: 'Tom Holland, Zendaya, Benedict Cumberbatch',
    posterUrl: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    bgUrl: 'https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
  },
  {
    id: 7, title: 'Avatar: El Camino del Agua', rating: 'PG-13', genre: 'Aventura', score: '7.6',
    duracion: '192 min', sinopsis: 'Jake y Neytiri deben abandonar su hogar y explorar las regiones de Pandora para proteger a su familia de la amenaza humana que regresa.',
    director: 'James Cameron', reparto: 'Sam Worthington, Zoe Saldana, Sigourney Weaver',
    posterUrl: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    bgUrl: 'https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
  },
]

const HORARIOS = ['11:00', '13:30', '16:00', '18:30', '21:00', '23:30']

const DetallePelicula = () => {
  const { id } = useParams()
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [selectedHorario, setSelectedHorario] = useState(null)
  const [boletos, setBoletos] = useState(1)
  const movie = ALL_MOVIES.find(m => m.id === parseInt(id))

  if (!movie) {
    return (
      <div className="detalle-not-found">
        <span className="detalle-not-found__icon">🎬</span>
        <h2>Película no encontrada</h2>
        <p>El ID <strong>"{id}"</strong> no corresponde a ninguna película.</p>
        <Link to="/cartelera" className="btn btn--red" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
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
            <p className="detalle__price-note">Boleto general $110 MXN · Niños y mayores $85 MXN</p>
          </>
        ) : (
          <div className="detalle__compra-form">
            <h2 className="detalle__buy-title">Confirmar Compra</h2>
            <p>Película: <strong>{movie.title}</strong></p>
            <p>Horario: <strong>{selectedHorario}</strong></p>
            
            <div className="form-group" style={{ margin: '20px 0' }}>
              <label>Cantidad de boletos: </label>
              <input 
                type="number" 
                min="1" 
                value={boletos} 
                onChange={(e) => setBoletos(e.target.value)}
                style={{ background: 'var(--color-bg)', color: 'white', border: '1px solid #333', padding: '5px', width: '60px' }}
              />
            </div>
            
            <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>Total: <strong>${boletos * 110} MXN</strong></p>
            
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
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
