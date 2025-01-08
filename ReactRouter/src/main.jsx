import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import About from './Components/about/About.jsx'
import Home from './Components/home/Home.jsx'
import ContactUs from './Components/contactUs/ContactUs.jsx'
import Github from './Components/github/Github.jsx'
import React from 'react'
import User from './Components/User/User.jsx'
import { githubInfoLoader } from './Components/github/Github.jsx'

// const router = createBrowserRouter([
//   {
//   path : '/',
//   element: <Layout />,
//   children:[
//     {
//       path:'', 
//       element:<Home />
//     },
//     {
//       path:'about',
//       element:<About />
//     },
//     {
//       path:'contactUs',
//       element:<ContactUs/>
//     },
//     {
//       path:'github',
//       element:<Github/>
//     }
//   ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contactUs" element={<ContactUs/>}/>
      <Route path="user/:id" element={<User/>}/>
      <Route path="github" element={<Github/>} loader={githubInfoLoader}>
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
