import React from 'react';

const Input = (props) => {
  return(
    <input
      className = {props.className || "input"}
      id = {props.id}
      style = {props.style}
      onClick = {props.action}
      placeholder = {props.placeholder}
    >
      {props.title}
    </input>
  )
}

export default Input;