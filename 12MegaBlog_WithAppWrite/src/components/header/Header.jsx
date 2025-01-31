import React from 'react'
import Container from "../index"
import Logo from "../index"
import LogoutBtn from "../index"
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { logout } from '../../store/AuthSlice'
function Header(){
    const authStatus = useSelector((state)=>state.auth.status);
    const navigate = useNavigate();
    const navItems = [
        {
            name : "Home",
            slug : "/",
            active : true
        },
        {
            name : "Login",
            slug : "/login",
            active : !authStatus
        },
        {
            name : "Signup",
            slug : "/signup",
            active : !authStatus
        },
        {
            name : "All Posts",
            slug : "/all-posts",
            active : authStatus
        },
        {
            name : "Add Post",
            slug : "/add-post",
            active : authStatus
        }
    ]
    return(
        <>
        <header className='p-4 bg-gray-500 shadow'>
            <Container>
                <nav className='flex'>
                    <div><Logo/></div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item)=>
                            item.status ? (
                                <li key={item.name}>
                                    <button type="button" className='inline-block hover:bg-gray-300 bg-gray-100 text-black p-2 rounded'
                                    onClick = {()=>{
                                        navigate(item.slug)
                                    }} 
                                    >{item.name}</button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
        </>
    )
}

export default Header