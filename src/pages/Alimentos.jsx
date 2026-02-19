import FoodCard from '../components/FoodCard'

const BEBIDAS = [
  { id: 1, name: 'Refresco Grande', desc: 'Coca-Cola, Pepsi o Sprite · 32 oz', price: '55', category: 'bebidas' },
  { id: 2, name: 'Agua Natural', desc: 'Botella 600 ml', price: '30', category: 'bebidas' },
  { id: 3, name: 'Jugo de Naranja', desc: 'Natural exprimido · 16 oz', price: '65', category: 'bebidas' },
  { id: 4, name: 'Café Americano', desc: 'Caliente o frío · 12 oz', price: '50', category: 'bebidas' },
]

const COMESTIBLES = [
  { id: 1, name: 'Hot Dog Clásico', desc: 'Con mostaza, catsup y cebolla', price: '75', category: 'comestibles' },
  { id: 2, name: 'Nachos con Queso', desc: 'Totopos con salsa de queso', price: '85', category: 'comestibles' },
  { id: 3, name: 'Pizza Personal', desc: '2 rebanadas · Pepperoni o queso', price: '95', category: 'comestibles' },
  { id: 4, name: 'Sandwich Club', desc: 'Pollo, lechuga, jitomate y mayo', price: '90', category: 'comestibles' },
]

const SNACKS = [
  { id: 1, name: 'Palomitas Grandes', desc: 'Mantequilla o natural · 46 oz', price: '80', category: 'snacks' },
  { id: 2, name: 'Palomitas Medianas', desc: 'Mantequilla o natural · 32 oz', price: '60', category: 'snacks' },
  { id: 3, name: 'Gomitas Surtidas', desc: 'Bolsa 150 g', price: '45', category: 'snacks' },
  { id: 4, name: 'Chocolates', desc: 'M&Ms, Snickers o KitKat', price: '40', category: 'snacks' },
]

const FoodSection = ({ label, items }) => (
  <div className="food-section">
    <div className="food-section__header">
      <h2 className="food-section__title">{label}</h2>
      <div className="food-section__divider" />
    </div>
    <div className="food-grid">
      {items.map((item) => (
        <FoodCard
          key={item.id}
          name={item.name}
          desc={item.desc}
          price={item.price}
          category={item.category}
        />
      ))}
    </div>
  </div>
)

const Alimentos = () => {
  return (
    <div>
      <div className="page-header">
        <p className="page-header__eyebrow">Menú del cine</p>
        <h1 className="page-header__title">Alimentos y bebidas</h1>
        <p className="page-header__subtitle">
          Disfruta tu película con nuestros productos
        </p>
      </div>

      <FoodSection label="Bebidas" items={BEBIDAS} />
      <FoodSection label="Comestibles" items={COMESTIBLES} />
      <FoodSection label="Snacks" items={SNACKS} />
    </div>
  )
}

export default Alimentos
