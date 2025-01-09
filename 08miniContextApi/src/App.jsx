import User from './components/User'
import React from 'react'
import './App.css'
import UserContextProvider from './usercontext/UserContextProvider'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
     <User/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
