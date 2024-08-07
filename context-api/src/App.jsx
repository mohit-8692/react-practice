import { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './context/UserContextProvider'
import './App.css'

function App() {
 
  return (
    <UserContextProvider>
      <div>hello world</div>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
