const Button = ({ variant = 'blue', children, onClick, fullWidth = false, size = 'md' }) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    fullWidth ? 'btn--full-width' : '',
    size === 'sm' ? 'btn--sm' : '',
    size === 'lg' ? 'btn--lg' : '',
  ].filter(Boolean).join(' ')

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
