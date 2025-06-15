import React from 'react'
import { ThemeContext, UserContext } from '../App'
import { useContext } from 'react';

const KidC = () => {

  const user = useContext(UserContext);
  const {theme, setTheme} = useContext(ThemeContext);

  function handleClick(){
    if(theme == 'light'){
        setTheme('dark')
    }else{
        setTheme('light')
    }
  }

  return (
    <>
      <div>
        Hello {user.name}!
      </div>
      <button onClick={handleClick}>
        Change Theme
      </button>
    </>
  )
}

export default KidC
