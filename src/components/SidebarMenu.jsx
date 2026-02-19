const SidebarMenu = ({ title = 'Menú', items = [], activeItem, onSelect }) => {
    return (
        <div className="sidebar-menu">
            <div className="sidebar-menu__header">
                <span className="sidebar-menu__title">{title}</span>
            </div>
            <ul className="sidebar-menu__list">
                {items.map((item) => (
                    <li key={item.id} className="sidebar-menu__item">
                        <button
                            className={`sidebar-menu__link ${activeItem === item.id ? 'active' : ''}`}
                            onClick={() => onSelect && onSelect(item.id)}
                        >
                            {item.icon && <span className="sidebar-menu__icon">{item.icon}</span>}
                            {item.label}
                            {item.badge && (
                                <span className="sidebar-menu__badge">{item.badge}</span>
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SidebarMenu
