import { PROMOS } from '../data/promos'

const Promos = () => {
  return (
    <div className="promos">
      <div className="page-header">
        <p className="page-header__eyebrow">Ofertas especiales</p>
        <h1 className="page-header__title">Promociones Vigentes</h1>
        <p className="page-header__subtitle">Aprovecha nuestras mejores ofertas y lleva la experiencia al siguiente nivel</p>
      </div>

      <div className="promos-grid">
        {PROMOS.map((promo) => (
          <div key={promo.id} className="promo-card">
            <div className="promo-card__header" style={{ borderColor: promo.color }}>
              <span className="promo-card__icon">{promo.icono}</span>
              <span
                className="promo-card__badge"
                style={{ background: promo.color }}
              >
                {promo.badge}
              </span>
            </div>
            <div className="promo-card__body">
              <span className="promo-card__categoria">{promo.categoria}</span>
              <h3 className="promo-card__titulo">{promo.titulo}</h3>
              <p className="promo-card__desc">{promo.descripcion}</p>
            </div>
            <div className="promo-card__footer">
              <span className="promo-card__validez">
                🗓️ VÁLIDO HASTA: {promo.validoHasta}
              </span>
              <button className="btn btn--red btn--sm">Usar promo</button>
            </div>
          </div>
        ))}
      </div>

      {/* Info banner */}
      <div className="promos-info">
        <span className="promos-info__icon">ℹ️</span>
        <p>Las promociones no son acumulables entre sí. Aplican restricciones. Consulta términos y condiciones en taquilla.</p>
      </div>
    </div>
  )
}

export default Promos
