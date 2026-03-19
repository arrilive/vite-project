import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cartelera from './pages/Cartelera'
import Alimentos from './pages/Alimentos'
import Promos from './pages/Promos'
import Garantia from './pages/Garantia'
import QueCine from './pages/QueCine'
import Festivales from './pages/Festivales'
import DetallePelicula from './pages/DetallePelicula'
import Otros from './pages/Otros'
import Login from './pages/Login'

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartelera" element={<Cartelera />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/promos" element={<Promos />} />
          <Route path="/garantia" element={<Garantia />} />
          <Route path="/que-cine" element={<QueCine />} />
          <Route path="/festivales" element={<Festivales />} />
          <Route path="/pelicula/:id" element={<DetallePelicula />} />
          <Route path="/otros" element={<Otros />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
