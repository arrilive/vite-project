const PROMOS = [
  {
    id: 1,
    titulo: '2x1 en Martes',
    descripcion: 'Compra un boleto y lleva a un acompañante sin costo adicional todos los martes.',
    badge: '2×1',
    validoHasta: '31 de Diciembre 2025',
    categoria: 'Boletos',
    color: 'var(--color-accent)',
    icono: '🎟️',
  },
  {
    id: 2,
    titulo: 'Combo Estudiante',
    descripcion: 'Presenta tu credencial vigente y obtén 20% de descuento en combos de alimentos.',
    badge: '-20%',
    validoHasta: '30 de Junio 2025',
    categoria: 'Alimentos',
    color: '#ffbe06',
    icono: '🎓',
  },
  {
    id: 3,
    titulo: 'Miércoles Familiar',
    descripcion: 'Descuento especial para grupos de 4 o más personas cualquier miércoles.',
    badge: 'FAMILIAR',
    validoHasta: '31 de Marzo 2025',
    categoria: 'Boletos',
    color: '#4781ff',
    icono: '👨‍👩‍👧‍👦',
  },
  {
    id: 4,
    titulo: 'Club CineMax',
    descripcion: 'Acumula puntos con cada visita y canjéalos por boletos gratis.',
    badge: 'PUNTOS',
    validoHasta: '31 de Diciembre 2025',
    categoria: 'Membresía',
    color: '#0eb211',
    icono: '⭐',
  },
  {
    id: 5,
    titulo: 'Estreno VIP',
    descripcion: 'Acceso anticipado a funciones de estreno con palomitas y refresco incluidos.',
    badge: 'VIP',
    validoHasta: '15 de Abril 2025',
    categoria: 'Premium',
    color: '#8b5cf6',
    icono: '👑',
  },
  {
    id: 6,
    titulo: 'IMAX a Mitad de Precio',
    descripcion: 'Películas en IMAX con 50% de descuento cada primer domingo del mes.',
    badge: '-50%',
    validoHasta: '30 de Noviembre 2025',
    categoria: 'IMAX',
    color: 'var(--color-accent)',
    icono: '🎥',
  },
]

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
