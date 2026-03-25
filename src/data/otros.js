/** Tab definitions for the Otros page */
export const TABS = [
  { id: 'promociones', label: 'Promociones' },
  { id: 'membresia', label: 'Membresía' },
  { id: 'preventas', label: 'Preventas' },
  { id: 'formatos', label: 'Formatos especiales' },
  { id: 'noticias', label: 'Noticias' },
]

/** Weekly promotions listed in the Promociones tab */
export const PROMOCIONES = [
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

/** Upcoming presale movies */
export const PREVENTA = [
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

/** Special screening formats */
export const FORMATOS = [
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
