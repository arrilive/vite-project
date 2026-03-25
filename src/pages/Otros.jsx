import { useState, useEffect } from 'react'
import Button from '../components/Button'
import { TABS, PROMOCIONES, PREVENTA, FORMATOS } from '../data/otros'

/* ── Sub-sections ────────────────────────── */
const PromocionesTab = () => (
  <div className="tab-content">
    <div className="promo-list">
      {PROMOCIONES.map((p) => (
        <div key={p.id} className="promo-row">
          <div className="promo-row__badge">{p.badge}</div>
          <div className="promo-row__body">
            <span className="promo-row__title">{p.title}</span>
            <span className="promo-row__desc">{p.desc}</span>
            <span className="promo-row__valid">{p.valid}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const MembresiaTab = () => (
  <div className="tab-content">
    <p className="tab-intro">
      Únete a CineMax Club y disfruta de beneficios exclusivos en cada visita.
    </p>
    <div className="membresia-featured">
      <div className="membresia-featured__left">
        <span className="membresia-featured__plan">Plan Gold</span>
        <h2 className="membresia-featured__price">
          $199 <span>/mes</span>
        </h2>
        <ul className="membresia-featured__list">
          <li>4 boletos gratis al mes</li>
          <li>20% de descuento en alimentos</li>
          <li>Acceso prioritario a preventas</li>
          <li>Sala VIP incluida una vez al mes</li>
          <li>Acumulación de puntos CineMax</li>
        </ul>
        <div className="membresia-featured__actions">
          <Button variant="blue" fullWidth>Suscribirme ahora</Button>
          <Button variant="dark-blue" fullWidth>Ver todos los planes</Button>
        </div>
      </div>
      <div className="membresia-featured__right">
        <div className="membresia-perks">
          <div className="membresia-perk">
            <span className="membresia-perk__num">4×</span>
            <span className="membresia-perk__label">boletos / mes</span>
          </div>
          <div className="membresia-perk">
            <span className="membresia-perk__num">20%</span>
            <span className="membresia-perk__label">desc. alimentos</span>
          </div>
          <div className="membresia-perk">
            <span className="membresia-perk__num">VIP</span>
            <span className="membresia-perk__label">1 vez al mes</span>
          </div>
          <div className="membresia-perk">
            <span className="membresia-perk__num">∞</span>
            <span className="membresia-perk__label">puntos</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const PreventasTab = () => (
  <div className="tab-content">
    <div className="preventa-list">
      {PREVENTA.map((p) => (
        <div key={p.id} className={`preventa-row ${!p.available ? 'sold-out' : ''}`}>
          <div className="preventa-row__date">{p.date}</div>
          <div className="preventa-row__body">
            <span className="preventa-row__title">{p.title}</span>
            <span className="preventa-row__tag">{p.tag}</span>
            <span className="preventa-row__desc">{p.desc}</span>
          </div>
          <div className="preventa-row__action">
            {p.available ? (
              <Button variant="blue" size="sm">Comprar</Button>
            ) : (
              <span className="preventa-row__soldout">Agotado</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
)

const FormatosTab = () => (
  <div className="tab-content">
    <div className="formatos-grid">
      {FORMATOS.map((f) => (
        <div key={f.id} className="formato-card">
          <div className="formato-card__name">{f.name}</div>
          <div className="formato-card__tagline">{f.tagline}</div>
          <p className="formato-card__desc">{f.desc}</p>
          <div className="formato-card__footer">
            <span className="formato-card__price">{f.extra}</span>
            <Button variant="outline" size="sm">Ver salas</Button>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const NoticiasTab = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const mockPosts = [
      { id: 1, title: 'CineMax abre nueva sala IMAX en Mérida', body: 'La nueva sala contará con pantalla de 20 metros y sistema de audio Dolby Atmos de 12 canales.' },
      { id: 2, title: 'Thunderbolts rompe récord de preventas', body: 'El nuevo film de Marvel agotó sus preventas en menos de 48 horas en todas las sucursales.' },
      { id: 3, title: 'Martes de cine 2×1 se extiende a domingos', body: 'A partir de marzo, la promoción 2×1 también aplicará todos los domingos antes de las 3 PM.' },
      { id: 4, title: 'Nueva app CineMax disponible en iOS y Android', body: 'Descarga la app y compra tus boletos sin filas. Disponible gratis en ambas tiendas.' },
      { id: 5, title: 'Lilo & Stitch: preventa agotada en 6 horas', body: 'El remake live-action de Disney superó todas las expectativas con una demanda récord.' },
      { id: 6, title: 'Sala VIP estrena menú de chef invitado', body: 'Cada mes un chef diferente diseña el menú exclusivo para los asistentes a la Sala VIP.' },
    ]

    setTimeout(() => {
      setPosts(mockPosts)
      setLoading(false)
    }, 800)
  }, [])

  if (loading) return (
    <div className="tab-content news-loading">
      Cargando noticias...
    </div>
  )

  return (
    <div className="tab-content">
      <div className="news-grid">
        {posts.map(post => (
          <div key={post.id} className="news-card">
            <h3 className="news-card__title">{post.title}</h3>
            <p className="news-card__body">
              {post.body.length > 120 ? post.body.slice(0, 120) + '…' : post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Main page ───────────────────────────── */
const Otros = () => {
  const [activeTab, setActiveTab] = useState('promociones')

  const renderTab = () => {
    switch (activeTab) {
      case 'promociones': return <PromocionesTab />
      case 'membresia': return <MembresiaTab />
      case 'preventas': return <PreventasTab />
      case 'formatos': return <FormatosTab />
      case 'noticias': return <NoticiasTab />
      default: return <PromocionesTab />
    }
  }

  return (
    <div>
      <div className="page-header">
        <p className="page-header__eyebrow">Beneficios y experiencias</p>
        <h1 className="page-header__title">Más de CineMax</h1>
        <p className="page-header__subtitle">
          Descuentos, membresías, preventas y formatos exclusivos para ti
        </p>
      </div>

      <div className="otros-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`otros-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {renderTab()}
    </div>
  )
}

export default Otros
