import { useState } from 'react'
import Button from '../components/Button'

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onLogin()
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-logo">
                    <div className="login-logo__icon">C</div>
                    <div className="login-logo__name">
                        Cine<span>Max</span>
                    </div>
                </div>

                <p className="login-title">¡Bienvenido! Por favor inicia sesión</p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">
                            Correo electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="form-input"
                            placeholder="tu@correo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="form-input"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div style={{ marginTop: '8px' }}>
                        <Button variant="blue" fullWidth size="lg" onClick={handleSubmit}>
                            Iniciar sesión
                        </Button>
                    </div>

                    <div className="login-divider">
                        <span>o</span>
                    </div>

                    <Button variant="dark-blue" fullWidth>
                        🎬 Continuar como invitado
                    </Button>
                </form>

                <div className="login-footer">
                    ¿No tienes cuenta?{' '}
                    <a href="#">Regístrate gratis</a>
                </div>
            </div>
        </div>
    )
}

export default Login
