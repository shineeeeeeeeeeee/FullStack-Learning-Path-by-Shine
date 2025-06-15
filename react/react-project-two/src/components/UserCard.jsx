import React from 'react'

import './UserCard.css'


const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} alt={props.image} />
      <p id='user-desc'>{props.desc} : {props.name}</p>
    </div>
  )
}

export default UserCard
