const Garantia = () => {
  const beneficios = [
    { icono: '🎬', titulo: 'Imagen perfecta', desc: 'Si la proyección falla, te devolvemos tu boleto sin preguntas.' },
    { icono: '🔊', titulo: 'Sonido premium', desc: 'Garantizamos la calidad de audio Dolby en cada función.' },
    { icono: '💺', titulo: 'Tu asiento garantizado', desc: 'Reserva tu lugar con anticipación y llegamos con tiempo.' },
    { icono: '❄️', titulo: 'Temperatura ideal', desc: 'Salas climatizadas para tu máximo confort.' },
    { icono: '🧹', titulo: 'Higiene total', desc: 'Limpieza profunda entre funciones, siempre.' },
    { icono: '♿', titulo: 'Accesibilidad', desc: 'Instalaciones adaptadas para personas con movilidad reducida.' },
  ]

  return (
    <div className="garantia">
      <div className="page-header">
        <p className="page-header__eyebrow">Nuestro compromiso</p>
        <h1 className="page-header__title">Garantía CineMax</h1>
        <p className="page-header__subtitle">Tu experiencia es nuestra prioridad. Si algo no cumple tu expectativa, lo solucionamos.</p>
      </div>

      <div className="garantia-hero">
        <div className="garantia-hero__badge">✅ GARANTIZADO</div>
        <h2 className="garantia-hero__title">100% de satisfacción o te devolvemos tu dinero</h2>
        <p className="garantia-hero__desc">
          En CineMax creemos que cada visita debe ser perfecta. Por eso respaldamos cada boleto con nuestra garantía total.
        </p>
      </div>

      <div className="garantia-grid">
        {beneficios.map((b) => (
          <div key={b.titulo} className="garantia-card">
            <div className="garantia-card__icon">{b.icono}</div>
            <h3 className="garantia-card__title">{b.titulo}</h3>
            <p className="garantia-card__desc">{b.desc}</p>
          </div>
        ))}
      </div>

      <div className="garantia-cta">
        <p>¿Tuviste algún problema? Escríbenos y lo resolvemos de inmediato.</p>
        <a href="mailto:garantia@cinemax.mx" className="btn btn--red">Contactar soporte</a>
      </div>
    </div>
  )
}

export default Garantia
