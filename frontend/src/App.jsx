import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Signup from './components/Signup'
import HomePage from './components/HomePage';
import Login from './components/Login';


const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/register",
    element:<Signup/>
  },
  {
    path:"/",
    element:<Login/>
  },
]);

const App = () => {
  return (
    <div className=" flex align-middle px-24">
      <div>hello</div>
    </div>
  )
}

export default App
