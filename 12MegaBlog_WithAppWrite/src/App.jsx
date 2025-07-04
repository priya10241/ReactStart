import React,{ useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from "react-redux"
import { login, logout } from './store/AuthSlice';
import  authService  from './appwrite/auth';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom';
function App() {
  const [isLoading,setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((data)=>{
      if(data){
      dispatch(login({data}));
      }
      else{
        dispatch(logout());
      }
    })
    .catch((data)=>{
      console.log("In loading data : " , data);
    })
    .finally(()=>{
      setIsLoading(false);
    })
  },[]);

  return isLoading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
