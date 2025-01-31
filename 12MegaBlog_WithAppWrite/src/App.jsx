import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from "react-redux"
import { login } from './store/AuthSlice';
import  authService  from './auth/auth_service';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom';
function App() {
  const [isLoading,setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((data)=>{
      dispatch(login({data}));
    })
    .catch((data)=>{
      console.log("In loading data : " , data);
    })
    .finally(()=>{
      setIsLoading(false);
    })
  },[isLoading]);

  return isLoading ? (
    <>
      <Header/>
      <main>
      <Outlet/>
      </main>
      <Footer/>
    </>
  ) : null
}

export default App
