import { FESTIVALES } from '../data/festivales'

const Festivales = () => {
  return (
    <div className="festivales">
      <div className="page-header">
        <p className="page-header__eyebrow">Eventos especiales</p>
        <h1 className="page-header__title">Festivales de Cine</h1>
        <p className="page-header__subtitle">Vive experiencias únicas con nuestros festivales temáticos a lo largo del año</p>
      </div>

      <div className="festivales-grid">
        {FESTIVALES.map((festival) => (
          <div key={festival.id} className="festival-card" style={{ '--festival-color': festival.color }}>
            <div className="festival-card__header">
              <span className="festival-card__icon">{festival.icono}</span>
              <span className="festival-card__badge" style={{ background: festival.color }}>
                {festival.peliculas} películas
              </span>
            </div>
            <div className="festival-card__body">
              <span className="festival-card__fechas">{festival.fechas}</span>
              <h3 className="festival-card__nombre">{festival.nombre}</h3>
              <p className="festival-card__desc">{festival.descripcion}</p>
            </div>
            <div className="festival-card__footer">
              <button className="btn btn--outline-red btn--sm">Ver programa</button>
              <button className="btn btn--red btn--sm">Comprar pase</button>
            </div>
          </div>
        ))}
      </div>

      <div className="festivales-newsletter">
        <h3>📬 Recibe alertas de festivales</h3>
        <p>Sé el primero en saber cuándo abren preventas y nuevos festivales.</p>
        <div className="festivales-newsletter__form">
          <input
            type="email"
            placeholder="tu@email.com"
            className="festivales-newsletter__input"
          />
          <button className="btn btn--red">Suscribirme</button>
        </div>
      </div>
    </div>
  )
}

export default Festivales
