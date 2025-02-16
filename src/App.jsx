
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import './App.css'
import { Login } from './components/Authentication/Login'
import { SignUp } from './components/Authentication/SignUp'
import HomePage from './components/Home/HomePage'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/home" element={<HomePage/>}></Route>
      <Route path="*" element={<SignUp/>}></Route>
    </Routes>
    </BrowserRouter>
    <Outlet></Outlet>
    </>
  )
}

export default App
