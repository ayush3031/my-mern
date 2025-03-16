import React from 'react'
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Signup from './pages/Signup'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { Store } from './redux/store'
import { Provider } from 'react-redux'


export default function App() {
  const appRouter = createBrowserRouter([
    {
        path: "/",
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
        <Provider store={Store}>
        <RouterProvider router={appRouter}/>
        </Provider>
    </div>
  )
}
