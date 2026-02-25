import { useState } from 'react'
import FoodCard from '../components/FoodCard'

/* ── Data ────────────────────────────────── */
const BEBIDAS = [
  { id: 'b1', name: 'Refresco Grande', desc: 'Coca-Cola, Sprite o Fanta · 32 oz', price: '55', category: 'bebidas' },
  { id: 'b2', name: 'Refresco Mediano', desc: 'Coca-Cola, Sprite o Fanta · 22 oz', price: '45', category: 'bebidas' },
  { id: 'b3', name: 'Agua Embotellada', desc: 'Agua natural 600 ml', price: '30', category: 'bebidas' },
  { id: 'b4', name: 'Café Americano', desc: 'Café negro caliente · 12 oz', price: '40', category: 'bebidas' },
  { id: 'b5', name: 'Jugo Natural', desc: 'Naranja o Manzana · 350 ml', price: '50', category: 'bebidas' },
]

const COMESTIBLES = [
  { id: 'c1', name: 'Hot Dog Clásico', desc: 'Salchicha con mostaza y catsup', price: '75', category: 'comestibles' },
  { id: 'c2', name: 'Nachos con Queso', desc: 'Totopos con aderezo de queso caliente', price: '80', category: 'comestibles' },
  { id: 'c3', name: 'Pizza Personal', desc: 'Rebanada de queso o pepperoni', price: '90', category: 'comestibles' },
  { id: 'c4', name: 'Hamburguesa Mini', desc: 'Carne, queso y lechuga', price: '85', category: 'comestibles' },
]

const SNACKS = [
  { id: 's1', name: 'Palomitas Gigantes', desc: 'Mantequilla o naturales · 46 oz', price: '85', category: 'snacks' },
  { id: 's2', name: 'Palomitas Medianas', desc: 'Mantequilla o naturales · 32 oz', price: '65', category: 'snacks' },
  { id: 's3', name: 'Dulces Surtidos', desc: 'Selección de gomitas y chocolate', price: '35', category: 'snacks' },
  { id: 's4', name: 'Papas Fritas', desc: 'Bolsa individual con sal', price: '40', category: 'snacks' },
]

/* ── FoodSectionWithCart ─────────────────── */
const FoodSectionWithCart = ({ label, items, cart, onQtyChange }) => (
  <div className="food-section">
    <h2 className="food-section__title">{label}</h2>
    <div className="food-grid">
      {items.map((item) => (
        <div key={item.id}>
          <FoodCard {...item} />
          <div style={{ padding: '4px 12px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <label style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', flexShrink: 0 }}>
              Cantidad:
            </label>
            <input
              type="number"
              min="0"
              max="20"
              value={cart[item.id] || 0}
              onChange={(e) => onQtyChange(item.id, e.target.value)}
              style={{
                width: 60, padding: '4px 8px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 6, color: '#fff',
                fontSize: '0.875rem', textAlign: 'center',
                fontFamily: 'inherit'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
)

/* ── Page ────────────────────────────────── */
const Alimentos = () => {
  const [cart, setCart] = useState({})   // { itemId: cantidad }

  const handleQtyChange = (id, value) => {
    const qty = parseInt(value)
    setCart(prev => ({
      ...prev,
      [id]: qty > 0 ? qty : 0
    }))
  }

  const allItems = [...BEBIDAS, ...COMESTIBLES, ...SNACKS]
  const cartItems = allItems.filter(i => cart[i.id] > 0)
  const total = cartItems.reduce((sum, i) => sum + (parseInt(i.price) * cart[i.id]), 0)

  return (
    <div>
      <div className="page-header">
        <p className="page-header__eyebrow">Menú del cine</p>
        <h1 className="page-header__title">Alimentos y bebidas</h1>
        <p className="page-header__subtitle">Disfruta tu película con nuestros productos</p>
      </div>

      {/* Resumen del carrito */}
      {cartItems.length > 0 && (
        <div style={{
          background: 'rgba(0,131,255,0.1)', border: '1px solid rgba(0,131,255,0.25)',
          borderRadius: 12, padding: '16px 20px', marginBottom: 32,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12
        }}>
          <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>
            🛒 {cartItems.length} producto{cartItems.length > 1 ? 's' : ''} seleccionado{cartItems.length > 1 ? 's' : ''}
          </div>
          <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#FFB800' }}>
            Total: ${total} MXN
          </div>
        </div>
      )}

      <FoodSectionWithCart label="Bebidas" items={BEBIDAS} cart={cart} onQtyChange={handleQtyChange} />
      <FoodSectionWithCart label="Comestibles" items={COMESTIBLES} cart={cart} onQtyChange={handleQtyChange} />
      <FoodSectionWithCart label="Snacks" items={SNACKS} cart={cart} onQtyChange={handleQtyChange} />
    </div>
  )
}

export default Alimentos