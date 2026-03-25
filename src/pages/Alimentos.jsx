import { useState } from 'react'
import { CATEGORIAS } from '../data/alimentos'

const Alimentos = () => {
  const [activeTab, setActiveTab] = useState('snacks')
  const [cart, setCart] = useState({})

  const handleQty = (id, value) => {
    const qty = parseInt(value)
    setCart(prev => ({ ...prev, [id]: qty > 0 ? qty : 0 }))
  }

  const activeCat = CATEGORIAS.find(c => c.id === activeTab)
  const allItems = CATEGORIAS.flatMap(c => c.items)
  const cartItems = allItems.filter(i => cart[i.id] > 0)
  const total = cartItems.reduce((sum, i) => sum + i.price * cart[i.id], 0)

  return (
    <div className="alimentos">
      <div className="page-header">
        <p className="page-header__eyebrow">Menú del cine</p>
        <h1 className="page-header__title">Alimentos y Bebidas</h1>
        <p className="page-header__subtitle">Disfruta tu película con nuestros productos frescos</p>
      </div>

      {/* Cart summary */}
      {cartItems.length > 0 && (
        <div className="cart-banner">
          <div className="cart-banner__info">
            🛒 <strong>{cartItems.length}</strong> producto{cartItems.length > 1 ? 's' : ''} seleccionado{cartItems.length > 1 ? 's' : ''}
          </div>
          <div className="cart-banner__total">
            Total: <strong style={{ color: 'var(--color-cart-total)' }}>${total} MXN</strong>
          </div>
          <button className="btn btn--red btn--sm">Ordenar</button>
        </div>
      )}

      {/* Category tabs */}
      <div className="food-tabs">
        {CATEGORIAS.map(cat => (
          <button
            key={cat.id}
            className={`food-tab${activeTab === cat.id ? ' active' : ''}`}
            onClick={() => setActiveTab(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Items grid */}
      <div className="food-grid">
        {activeCat.items.map((item) => (
          <div key={item.id} className="food-item-card">
            <div className="food-item-card__icon">{activeCat.emoji}</div>
            <div className="food-item-card__info">
              <h3 className="food-item-card__name">{item.name}</h3>
              <p className="food-item-card__desc">{item.desc}</p>
            </div>
            <div className="food-item-card__right">
              <span className="food-item-card__price">${item.price}</span>
              <div className="food-item-card__qty">
                <button
                  className="qty-btn"
                  onClick={() => handleQty(item.id, Math.max(0, (cart[item.id] || 0) - 1))}
                >−</button>
                <span className="qty-value">{cart[item.id] || 0}</span>
                <button
                  className="qty-btn"
                  onClick={() => handleQty(item.id, (cart[item.id] || 0) + 1)}
                >+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Alimentos