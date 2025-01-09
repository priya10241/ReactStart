import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout'
import Card from './components/Card'
import Home from './components/Home'
import { useEffect, useState } from 'react'
import { ThemeContextProvider } from './contexts/ThemeContext'

function App() {
  const [themeMode,setThemeMode] = useState('light');
  lightTheme = ()=>{
    setThemeMode('light');
  }

  darkTheme = ()=>{
    setThemeMode('dark');
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])
  
  const router = createBrowserRouter([
    {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>,
      },
      {
        path:'card',
        element:<Card/>,
      }
    ]
  }
  ])
  return (
    <ThemeContextProvider value={{themeMode,lightTheme,darkTheme}}>
      <RouterProvider router={router}></RouterProvider>
      </ThemeContextProvider>
  )
}

export default App
