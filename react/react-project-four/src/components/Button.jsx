import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.incrementCount}>Click me! {props.children}</button>
  )
}

export default Button
