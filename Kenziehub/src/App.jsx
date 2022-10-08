import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Error from './components/Pages/Error'
import Login from './components/Pages/Login'
import Registrar from './components/Pages/Registrar'
import { Container } from './style'
import api from './components/services/api'

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/register" element={<Registrar />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Container>
  )
}

export default App
