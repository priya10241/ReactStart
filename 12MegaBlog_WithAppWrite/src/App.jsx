import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from "react-redux"
import { login } from './store/AuthSlice';
import  authService  from './auth/auth_service';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
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
  },[isLoading])

  return (
    <>
      {/* <Header/>
      <h1>Blog App with App Write</h1> */}
      <Footer/>
    </>
  )
}

export default App
