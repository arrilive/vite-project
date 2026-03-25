/** Food and beverage categories for the Alimentos page */
export const CATEGORIAS = [
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
