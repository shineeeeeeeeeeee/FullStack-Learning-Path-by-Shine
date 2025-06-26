
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  // let val = 1
  let val = useRef(0);

  let btnRef = useRef();

  function handleClick(){
    setCount(count+1);
    // val += 1;
    // stays constant at 2: variable remains constant across rerender to solve use useRef
    // console.log("Value of val:", val);
    val.current += 1;
    console.log("Value of val:", val);
  }

  // works on every render whenever action taken (click)
  useEffect(() => {
    console.log("I'm being rerendered");
  })

  function ChangeColor(){
    btnRef.current.style.backgroundColor = 'red';
  }

  return (
    <>
      <button onClick={handleClick} ref={btnRef}>Increment</button>
      <br />
      <div>
        Count : {count}
      </div>

      <br />
      <button onClick={ChangeColor}>
        Change Color of Above Button!
      </button>
    </>
  )
}

export default App
