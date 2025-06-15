import React, { useState } from 'react';
import Card from './components/Card';


import './App.css';

const App = () => {

  // manage, create and changes of state and then sync states in all children

  const [name, setName] = useState(' ');

  return (
    <div className='container'>
      {/* every child has not access to change name */}
      <Card name={name} title="firstChild" setName={setName}></Card>
      <Card name={name} title="secondChild" setName={setName}></Card>

      {/* changes done in child is also affecting in parent component */}
      <p>I AM INSIDE PARENT COMPONENT. and value of name is {name}</p>
    </div>
  )
}

export default App
