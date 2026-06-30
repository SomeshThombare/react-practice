import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import RecactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './assets/components/Layout.jsx'
import Home from './assets/components/Home/Home.jsx'
import About from './assets/components/About/About.jsx'
import Contact from './assets/components/Contact/Contact.jsx'
import User from './assets/components/User/User.jsx'
import GitHub, { githubInfoLoader } from './assets/components/Guthub/GitHub.jsx'

//Method 1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <About/>
//       },
//       {
//         path:"contact",
//         element: <Contact/>
//       }
//     ]

//   }
// ])

//Method 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>}/>
      <Route path ='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={(githubInfoLoader)}
      path='github' element={<GitHub/>}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)
