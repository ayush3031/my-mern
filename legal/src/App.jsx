import React from 'react'
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Signup from './pages/Signup'
import Home from './pages/Home'
import Profile from './pages/Profile'

export default function App() {
  const appRouter = createBrowserRouter([
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
      path: "/profile",
      element: <Profile/>
    }

])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}
