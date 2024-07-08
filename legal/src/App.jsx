import React from 'react'
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Signup from './pages/Signup'
import Home from './pages/Home'

export default function App() {
  const appRouter = createBrowserRouter([
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/home",
        element: <Home/>
    }
])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}
