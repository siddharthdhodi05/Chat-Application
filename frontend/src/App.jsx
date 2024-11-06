import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
    path:"/login",
    element:<Login/>
  },
]);

const App = () => {
  return (
    <div className=' h-screen p-4 flex items-center justify-center'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
