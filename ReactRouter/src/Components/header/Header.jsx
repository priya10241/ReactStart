import {NavLink} from 'react-router-dom'
import React from 'react'
function Header(){
    return(
    <>
    <center>
        <ul className='flex flex-row space-x-10 justify-center bg-slate-800 rounded pt-2 pb-2'>
            <li>
            <NavLink to="/" className={({isActive})=>
                `block font-bold text-1xl duration-200 ${isActive ? "text-red-500" : "text-white" } hover:text-red-500`
            }>
            Home
            </NavLink>
            </li>
            <li>
            <NavLink to="/about" className={({isActive})=>
                `block font-bold text-1xl duration-200 ${isActive ? "text-red-500" : "text-white" } hover:text-red-500`
            }> 
            About
            </NavLink>
            </li>
            <li>
            <NavLink to="/contactUs" className={({isActive})=>
                `block font-bold text-1xl duration-200 ${isActive ? "text-red-500" : "text-white" } hover:text-red-500`
            }> 
            Contact Us
            </NavLink>
            </li>
            <li>
            <NavLink to="/github" className={({isActive})=>
                `block font-bold text-1xl duration-200 ${isActive ? "text-red-500" :  "text-white" } hover:text-red-500`
            }> 
            GitHub
            </NavLink>
            </li>
        </ul>
    </center>
    </>
    )
}
export default Header