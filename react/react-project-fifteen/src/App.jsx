import { useCallback, useState } from 'react'
import ChildComponent from './components/ChildComponent';
import './App.css'


function App() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count+1);
  }, [count]);
  // Did this to not let the re-rendering occur in ChildComponent
  // if not used dependency then it'll freeze

  return (
    <>
      <div>
        Count : {count}
      </div>
      <button onClick={handleClick}>Click me to Increment!</button>

      <div>
        <br />
        {/* unnecessary re-rendering. Hence to save use react.memo */}
        <ChildComponent buttonName = "Click me!" handleClick={handleClick}></ChildComponent>
      </div>
    </>
  )
}

export default App
