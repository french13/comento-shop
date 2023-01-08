import React from 'react'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Main from '../pages/Main'
import { Routes, Route } from 'react-router-dom'

const Container = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default Container