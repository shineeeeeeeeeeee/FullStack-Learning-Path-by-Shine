import React from 'react';
import Card from './components/Card-new';
import Button from './components/button';

import './App.css';
import { useState } from 'react';


const App = () => {

  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>

      <Button incrementCount = {handleClick} >
        <h1>{count}</h1>
      </Button>

      <Card name="Shine">
        <h1>Welcome here!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet sint aperiam.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card>

      <Card children = "This is a props.children content">

      </Card>
    </div>
  )
}

export default App
