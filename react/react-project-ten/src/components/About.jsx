import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  function handleClick(){
    navigate('/Dashboard');
  }

  return (
    <div>
      About Page
      <button onClick={handleClick}>
        Move to Dashboard Page
      </button>
    </div>
  )
}

export default About
