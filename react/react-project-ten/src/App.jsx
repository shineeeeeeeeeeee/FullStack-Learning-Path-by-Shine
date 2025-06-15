
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Navbar from "./components/Navbar";
import ParamComponent from "./components/ParamComponent";
import Courses from "./components/Courses";
import Tests from "./components/Tests";
import Reports from "./components/Reports";
import Notfound from "./components/Notfound";

const router = createBrowserRouter([
  // paths of different route
  {
    path:"/",
    element: 
    <div>
      <Navbar/>
      <Home/> 
    </div>
  },
  {
    path:"/about",
    element: 
    <div>
      <Navbar/>
      <About/>
    </div>
  },
  {
    path:"/dashboard",
    element: 
    <div>
      <Navbar/>
      <Dashboard/> 
    </div>,
    // Nested Routes
    children:[
      {
        path:'courses',
        element:<Courses/>
      },{
        path:'tests',
        element:<Tests/>
      },{
        path:'reports',
        element:<Reports/>
      }
    ]
  },
  {
    path:"/student/:id",
    element: 
    <div>
      <Navbar/>
      <ParamComponent/> 
    </div>
  },
  // other routes that are not mentioned / defined
  {
    path:'*',
    element:<Notfound/>
  }
]);


const App = () => {

  return(
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  )
}

export default App

