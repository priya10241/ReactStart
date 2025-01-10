import './App.css'
import {useEffect, useState } from 'react'
import { ThemeContextProvider } from "./contexts/ThemeContext";
import Home from './components/Home';

function App() {
  let [themeMode,setThemeMode] = useState('light');
    useEffect(()=>{
      document.querySelector('html').classList.remove('light','dark');
      document.querySelector('html').classList.add(themeMode);
    },[themeMode])
  
  return (
    <ThemeContextProvider value={{themeMode,setThemeMode}}>
      <Home/>
    </ThemeContextProvider>
  )
}

export default App
