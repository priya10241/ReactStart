import {Outlet} from 'react-router-dom'
import React from 'react'
import Header from './Components/header/Header'


function Layout(){
    return(
        <>
        <div className='w-full h-screen bg-slate-100'>
        <Header/>
        <Outlet/>
        </div>
        </>
    )
}

export default Layout