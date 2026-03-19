import { useState } from 'react'

const CATEGORIAS = [
  {
    id: 'snacks',
    label: '🍿 Snacks',
    emoji: '🍿',
    items: [
      { id: 's1', name: 'Palomitas Gigantes', desc: 'Mantequilla o naturales · 46 oz', price: 85 },
      { id: 's2', name: 'Palomitas Medianas', desc: 'Mantequilla o naturales · 32 oz', price: 65 },
      { id: 's3', name: 'Nachos con Queso', desc: 'Totopos con aderezo de queso caliente', price: 80 },
      { id: 's4', name: 'Papas Fritas', desc: 'Bolsa individual con sal', price: 40 },
      { id: 's5', name: 'Dulces Surtidos', desc: 'Selección de gomitas y chocolate', price: 35 },
    ],
  },
  {
    id: 'bebidas',
    label: '🥤 Bebidas',
    emoji: '🥤',
    items: [
      { id: 'b1', name: 'Refresco Grande', desc: 'Coca-Cola, Sprite o Fanta · 32 oz', price: 55 },
      { id: 'b2', name: 'Refresco Mediano', desc: 'Coca-Cola, Sprite o Fanta · 22 oz', price: 45 },
      { id: 'b3', name: 'Agua Embotellada', desc: 'Agua natural 600 ml', price: 30 },
      { id: 'b4', name: 'Café Americano', desc: 'Café negro caliente · 12 oz', price: 40 },
      { id: 'b5', name: 'Jugo Natural', desc: 'Naranja o Manzana · 350 ml', price: 50 },
    ],
  },
  {
    id: 'combos',
    label: '🎉 Combos',
    emoji: '🎉',
    items: [
      { id: 'c1', name: 'Combo Pareja', desc: '2 palomitas medianas + 2 refrescos grandes', price: 180 },
      { id: 'c2', name: 'Combo Familiar', desc: '4 palomitas + 4 refrescos + nachos', price: 320 },
      { id: 'c3', name: 'Combo VIP', desc: 'Palomitas XL + refresco + nachos + dulces', price: 220 },
      { id: 'c4', name: 'Combo Infantil', desc: 'Palomitas pequeñas + refresco mediano + dulces', price: 110 },
    ],
  },
]

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
            Total: <strong>${total} MXN</strong>
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