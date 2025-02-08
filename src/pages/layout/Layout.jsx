import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Topheader from '../../components/top-header/Topheader'

const Layout = () => {
  return (
    <>
      <Topheader />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
