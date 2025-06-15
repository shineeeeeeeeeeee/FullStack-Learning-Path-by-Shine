import React from 'react'

import './Card.css';

const card = (props) => {
  return (
    <div>
      Hi {props.name}
      {props.children}
    </div>
  )
}

export default card
