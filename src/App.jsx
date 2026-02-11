import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Technology from './Pages/Technology'
import Contact from './Pages/Contact'
import PrivacyPolicy from './Pages/Privacy'
import TermsAndConditions from './Pages/Terms'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/products",
          element:<Products/>
        },
        {
          path:"/tech",
          element:<Technology/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/consultation",
          element:<Contact/>
        },
        {
          path:"/privacy-policy",
          element:<PrivacyPolicy/>
        },
        {
          path:"/terms-and-conditions",
          element:<TermsAndConditions/>
        },
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App