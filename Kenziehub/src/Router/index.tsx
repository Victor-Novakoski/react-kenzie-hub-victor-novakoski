import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error from '../components/Pages/Error'
import Home from '../components/Pages/Home'
import Login from '../components/Pages/Login'
import Registrar from '../components/Pages/Registrar'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/register" element={<Registrar />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Router
