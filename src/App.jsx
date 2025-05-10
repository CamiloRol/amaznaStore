import { useState } from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path="/Login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
