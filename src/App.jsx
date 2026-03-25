import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRouter from './router/index'

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="page-content">
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}

export default App
