
import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTasks(num){
    console.log("Inside Expensive Task!")
    for(let i=0; i < 1000000000; i++){}
    return num * 2;
  }

  // let doubleValue = expensiveTasks(input); // causing delays hence use memo

  let doubleValue = useMemo(() => expensiveTasks(input), [input]);

  return (
    <>
      <button onClick={() => {
        setCount(count+1);
      }}>Increment</button>

      <div>
        Count: {count}
      </div>

      <br />
      <input type="number" placeholder='Enter number' value={input} onChange={(e) => setInput(e.target.value)} />

      <div>
        Double : {doubleValue}
      </div>
    </>
  )
}

export default App
