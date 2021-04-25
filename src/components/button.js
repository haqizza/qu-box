import React from 'react';

const Button = (props) => {
  return(
    <button
      className = { props.className || "button" }
      id = { props.id }
      type = { props.type }
      style = { props.style }
      onClick = { props.action }
      onMouseEnter = { props.onHover }
      onMouseLeave = { props.offHover }
      disabled={ props.disabled }
    >
      { props.title }
    </button>
  )
}

export default Button;