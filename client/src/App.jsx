import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProtectedRoute from './token/ProtectedRoute';
import { useState } from 'react';
import Init_register from "./pages/Init_register"
import Init_login from "./pages/Init_login"
import Register from './pages/Register'
import Login from './pages/Login';
import Home from "./pages/Home"
import Start from "./pages/Start"
import Categories from './pages/Categories'

function App() {
 
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/init-register' element={<Init_register />} />
      <Route path='/init-login' element={<Init_login />} />
      <Route path='/register' element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path='/categories' element={<ProtectedRoute><Categories /></ProtectedRoute>} />
      <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}
export default App


