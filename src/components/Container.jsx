import React from 'react'
import Home from '../pages/Main'
import ProductDetail from '../pages/ProductDetail'
import Basket from '../pages/Basket'
import { Routes, Route } from 'react-router-dom'

const Container = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:productid' element={<ProductDetail/>}/>
      <Route path='/basket' element={<Basket/>}/>
    </Routes>
  )
}

export default Container