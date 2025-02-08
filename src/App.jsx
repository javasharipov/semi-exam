import React from 'react'
import './App.css'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import DetailPage from './components/detailPage/DetailPage'
import Wishlist from './pages/wishlist/Wishlist'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/product/:id' element={<DetailPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
