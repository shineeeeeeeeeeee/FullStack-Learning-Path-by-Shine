import React from 'react'

const Card = (props) => {
  return (
    <div>
      {/* {props.name} 
      parent to child state transfer */}

      <input type="text" onChange={(e) => props.setName(e.target.value)} />

      <p>Name state variable value inside {props.title}: {props.name}</p>
    </div>
  )
}

export default Card
