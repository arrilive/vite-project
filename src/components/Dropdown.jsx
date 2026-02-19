import { useState } from 'react'

const Dropdown = ({ label = 'Seleccionar', options = [], value, onChange }) => {
    const [open, setOpen] = useState(false)

    const selectedOption = options.find((o) => o.value === value)
    const displayLabel = selectedOption ? selectedOption.label : label

    const handleSelect = (option) => {
        onChange && onChange(option.value)
        setOpen(false)
    }

    return (
        <div className={`dropdown ${open ? 'dropdown--open' : ''}`}>
            <button
                className="dropdown__trigger"
                onClick={() => setOpen((prev) => !prev)}
                type="button"
            >
                <span>{displayLabel}</span>
                <span className="dropdown__arrow">▼</span>
            </button>
            {open && (
                <div className="dropdown__menu">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`dropdown__option ${value === option.value ? 'selected' : ''}`}
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown
