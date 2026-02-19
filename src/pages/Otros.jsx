import { useState } from 'react'
import Button from '../components/Button'

/* ── Data ────────────────────────────────── */
const TABS = [
    { id: 'promociones', label: 'Promociones' },
    { id: 'membresia', label: 'Membresía' },
    { id: 'preventas', label: 'Preventas' },
    { id: 'formatos', label: 'Formatos especiales' },
]

const PROMOCIONES = [
    {
        id: 1,
        badge: '2×1',
        title: 'Martes de Cine',
        desc: 'Compra 2 boletos al precio de 1 en funciones antes de las 6 PM.',
        valid: 'Válido todos los martes',
    },
    {
        id: 2,
        badge: '−30%',
        title: 'Miércoles Familiar',
        desc: 'Descuento del 30% para grupos de 4 o más personas.',
        valid: 'Válido todos los miércoles',
    },
    {
        id: 3,
        badge: 'Regalo',
        title: 'Palomitas de Cumpleaños',
        desc: 'Palomitas medianas gratis en tu mes de cumpleaños.',
        valid: 'Presenta INE vigente',
    },
    {
        id: 4,
        badge: '−20%',
        title: 'Descuento Estudiante',
        desc: 'Presenta credencial vigente y obtén 20% en cualquier función.',
        valid: 'Lunes a jueves',
    },
]

const PREVENTA = [
    {
        id: 1,
        date: '28 FEB',
        title: 'Thunderbolts',
        desc: 'Preventa exclusiva con 10% de descuento. Incluye póster de colección.',
        tag: 'Acción · Marvel',
        available: true,
    },
    {
        id: 2,
        date: '15 MAR',
        title: 'Lilo & Stitch',
        desc: 'Asegura tus lugares antes del estreno oficial. Stock limitado.',
        tag: 'Familiar · Disney',
        available: true,
    },
    {
        id: 3,
        date: '02 ABR',
        title: 'Mission: Impossible 8',
        desc: 'Estreno mundial simultáneo. Acceso preferencial para miembros.',
        tag: 'Acción · Suspense',
        available: false,
    },
]

const FORMATOS = [
    {
        id: 'imax',
        name: 'IMAX',
        tagline: 'Sonido y visión sin límites',
        desc: 'Pantalla de 20 metros con sistema de audio de 12 canales. La experiencia definitiva.',
        extra: 'Precio desde $180',
    },
    {
        id: 'dbox',
        name: 'D-BOX',
        tagline: 'Siente cada escena',
        desc: 'Butacas con movimiento sincronizado a la película. Vibraciones, inclinación y balance.',
        extra: 'Precio desde $150',
    },
    {
        id: '4dx',
        name: '4DX',
        tagline: 'Cine multisensorial',
        desc: 'Efectos de viento, lluvia, aroma y movimiento. Una experiencia más allá del video.',
        extra: 'Precio desde $200',
    },
    {
        id: 'vip',
        name: 'Sala VIP',
        tagline: 'Comodidad premium',
        desc: 'Butacas reclinables de cuero, servicio a la sala y menú de chef para adultos.',
        extra: 'Precio desde $250',
    },
]

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

/* ── Main page ───────────────────────────── */
const Otros = () => {
    const [activeTab, setActiveTab] = useState('promociones')

    const renderTab = () => {
        switch (activeTab) {
            case 'promociones': return <PromocionesTab />
            case 'membresia': return <MembresiaTab />
            case 'preventas': return <PreventasTab />
            case 'formatos': return <FormatosTab />
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
