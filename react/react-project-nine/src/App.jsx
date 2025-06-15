
import { createContext } from 'react';

import './App.css';
import KidA from './components/KidA';
import { useState } from 'react';

// create context
const UserContext = createContext();
const ThemeContext = createContext();

const App = () => {
  // pass value
  const [user, setUser] = useState({name:"Shine"});

  const [theme, setTheme] = useState('light');

  // consumer consumes at last

  return(
    <div>
      {/* wrap child inside Provider */}
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{theme, setTheme}}>
          <div style={{ backgroundColor: theme === 'light' ? 'beige' : 'black' }} className='container'>
            <KidA />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
export {UserContext}
export {ThemeContext}
