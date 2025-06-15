import React from 'react';
import UserCard from './components/UserCard';

import pig from './assets/pig.png';
import rabbit from './assets/rabbit.png';
import dino from './assets/dino.png';
import hippo from './assets/hippo.png';

import './App.css';

const App = () => {
  return (
    <div className='container'>
      {/* <h1>Hello!</h1> */}
      <UserCard name="Hippo" desc="Always Happy!" image={hippo} />
      <UserCard name="Pig" desc="Always Hungry!" image={pig} />
      <UserCard name="Rabbit" desc="Always Sleepy!" image={rabbit} />
      <UserCard name="Dino" desc="Always Kidding" image={dino} />
    </div>
  )
}

export default App
