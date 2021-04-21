import React from 'react';

const Button = (props) => {
  return(
    <button
      className = {props.className || "button"}
      id = {props.id}
      style = {props.style}
      onClick = {props.action}
      onMouseEnter = {props.onHover}
      onMouseLeave = {props.offHover}
    >
      {props.title}
    </button>
  )
}

export default Button;