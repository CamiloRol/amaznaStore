import { useState } from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'

//import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/Home' element={ <Home />}/>
    </Routes>
  )
}

export default App
