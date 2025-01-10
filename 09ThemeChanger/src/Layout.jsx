import { Outlet } from "react-router";
import Header from "./components/Header";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { useState, useEffect } from "react";

function Layout(){
    const [themeMode,setThemeMode] = useState('light');

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(themeMode);
    // console.log(el);
  },[themeMode])

    return(
        <ThemeContextProvider value={{themeMode,setThemeMode}}>
            <center><div className="bg-slate-300 text-black dark:text-white dark:bg-black p-2">Hello World</div></center>
            <Header/>
            <Outlet/>
        </ThemeContextProvider>
    )
}

export default Layout