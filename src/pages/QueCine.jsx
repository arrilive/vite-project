const QueCine = () => {
  const stats = [
    { value: '1994', label: 'Año de fundación' },
    { value: '180+', label: 'Complejos en México' },
    { value: '1,500+', label: 'Pantallas' },
    { value: '25M+', label: 'Espectadores al año' },
  ]

  const equipo = [
    { nombre: 'María Rodríguez', cargo: 'CEO', emoji: '👩‍💼' },
    { nombre: 'Carlos Mendez', cargo: 'Director de Operaciones', emoji: '👨‍💼' },
    { nombre: 'Ana López', cargo: 'Directora de Marketing', emoji: '👩‍🎨' },
    { nombre: 'Roberto Jiménez', cargo: 'Director de Tecnología', emoji: '👨‍💻' },
  ]

  return (
    <div className="que-cine">
      <div className="page-header">
        <p className="page-header__eyebrow">Conócenos</p>
        <h1 className="page-header__title">+Que Cine</h1>
        <p className="page-header__subtitle">Somos más que un lugar para ver películas. Somos una experiencia.</p>
      </div>

      <div className="que-cine__intro">
        <h2>Nuestra historia</h2>
        <p>
          CineMax nació con la misión de llevar la mejor experiencia cinematográfica a cada rincón del país.
          Desde nuestras salas equipadas con tecnología 4K y Dolby Atmos hasta nuestro personal altamente capacitado,
          todo está diseñado para que tu visita sea perfecta.
        </p>
        <p>
          Más de 25 millones de personas confían en nosotros cada año para vivir momentos únicos.
          Porque creemos que el cine no es solo entretenimiento — es cultura, emoción y comunidad.
        </p>
      </div>

      <div className="que-cine__stats">
        {stats.map(s => (
          <div key={s.label} className="que-cine__stat">
            <span className="que-cine__stat-value">{s.value}</span>
            <span className="que-cine__stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="que-cine__equipo">
        <h2>Nuestro equipo directivo</h2>
        <div className="que-cine__equipo-grid">
          {equipo.map(e => (
            <div key={e.nombre} className="equipo-card">
              <div className="equipo-card__avatar">{e.emoji}</div>
              <h3 className="equipo-card__nombre">{e.nombre}</h3>
              <p className="equipo-card__cargo">{e.cargo}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="que-cine__jobs">
        <h2>🚀 Trabaja con nosotros</h2>
        <p>¿Apasionado del cine? Únete al equipo CineMax y sé parte de algo grande.</p>
        <a href="mailto:rh@cinemax.mx" className="btn btn--red" style={{ marginTop: '1rem', display: 'inline-flex' }}>
          Ver vacantes
        </a>
      </div>
    </div>
  )
}

export default QueCine
