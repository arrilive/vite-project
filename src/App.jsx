import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Cartelera from './pages/Cartelera'
import Alimentos from './pages/Alimentos'
import Otros from './pages/Otros'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentPage, setCurrentPage] = useState('cartelera')

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'cartelera':
        return <Cartelera />
      case 'alimentos':
        return <Alimentos />
      case 'otros':
        return <Otros />
      default:
        return <Cartelera />
    }
  }

  return (
    <div className="app-layout">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onLogout={() => setIsLoggedIn(false)}
      />
      <main className="page-content">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
