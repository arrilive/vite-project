/* Category color dot replaces emoji */
const CATEGORY_COLORS = {
    bebidas: '#0083FF',
    comestibles: '#FFB800',
    snacks: '#00CC6A',
}

const FoodCard = ({ name, desc, price, category }) => {
    const dot = CATEGORY_COLORS[category] || '#0083FF'
    return (
        <div className="food-card">
            <div className="food-card__dot" style={{ background: dot }} />
            <div className="food-card__info">
                <div className="food-card__name">{name}</div>
                {desc && <div className="food-card__desc">{desc}</div>}
            </div>
            <div className="food-card__price">${price}</div>
        </div>
    )
}

export default FoodCard
