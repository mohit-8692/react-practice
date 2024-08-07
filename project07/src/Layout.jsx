import React from 'react'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
