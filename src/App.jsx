import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import ProtectedRoute from './Protected Route/ProtectedRoute'
import { AuthContextProvider } from './Context/authContext'

function App() {

  return (
    <>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path='/home' element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }></Route>
          {/* <Route path='/home' element={<Home/>}></Route> */}
          <Route path='/' element={<Login/>}></Route>

          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App
