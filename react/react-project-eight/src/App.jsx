
import { useEffect, useState } from 'react';
import './App.css';
import TimerComponent from './components/TimerComponent';
import dataFetch from './components/dataFetch';
import ResizeComponent from './components/ResizeComponent';

const App = () => {
  const [count, setCount] = useState(0);
  const[total, setTotal] = useState(1);

  function handleClick(){
    setCount(count+1);
  }
  function handleTotal(){
    setTotal(total+1);
  }
  // first -> side Effect function
  // second -> cleanup function
  // third -> comma separated dependency list

  // useEffect(() => {
  //   // db connection or alert etc
  //   first
  
  //   return () => {
  //     // prevent from memory leaks
  //     second
  //   }
  // }, [third]) // anything specified, over update sidEffect starts running

  // variation - 1: runs on every render -> normal one
  // will run every-time ui renders
  // useEffect(() => {
  //   alert("i run on everything!");
  // })

  // variation - 2: runs on only first render
  // useEffect(() => {
  //   alert("i run on only first render!");
  // }, [])

  // variation - 3: runs on only first render
  // useEffect(() => {
  //   alert("i run on every-time when count updated!");
  // }, [count])

  // variation - 4: multiple dependencies
  // useEffect(() => {
  //   alert("i run on every-time when count or total updated!");
  // }, [count, total])

  // variation - 5: cleanup function
  // useEffect(() => {
  //   alert("count updated!");
  //   return() => { alert("Count is unmounted from UI") }
  // }, [count])

  return(
    <div>
      <button onClick={handleClick}>Update Count!</button>
      ------Count is: {count}
      -------------------------
      <button onClick={handleTotal}>Update Total!</button>
      ------Total is: {total}

      {/* <TimerComponent/> */}
      {/* <dataFetch/> */}
      <ResizeComponent/>
    </div>
  )
}

export default App
