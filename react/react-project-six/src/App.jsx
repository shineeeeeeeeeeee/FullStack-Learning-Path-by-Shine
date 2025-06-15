
import { useState } from 'react';
import './App.css';
import Logout from './components/Logout';
import Login from './components/Login';

const App = () => {

  const [isLoggedIn, isLoggedOut] = useState(true);

  // ternary ->
  // return (
  //   <div>
  //     {isLoggedIn ? <Logout/> : <Login/>}
  //   </div>
  // )

  // logical
  return(
    <div>
      WELCOME EVERYONE TO OUR DASHBOARD!
      <div>
      {isLoggedIn && <Logout/>}
      </div>
    </div>
  )

  // early return ->
  // if(!isLoggedIn){
  //   return (
  //     <Login/>
  //   )
  // }

  // if - else ->

  // if(isLoggedIn){
  //   return (
  //     <Logout/>
  //   )
  // }else {
  //   return (
  //     <Login/>
  //   )
  // }
}

export default App
