
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import './App.css'
import { Login } from './components/Authentication/Login'
import { SignUp } from './components/Authentication/SignUp'
import HomePage from './components/Home/HomePage'
import ContainerBox from './components/Common/Container-Box'


function App() {

  return (
    <>
    <ContainerBox>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/home" element={<HomePage/>}></Route>
      <Route path="*" element={<HomePage/>}></Route>
    </Routes>
    </BrowserRouter>
      <Outlet></Outlet>
    </ContainerBox>
    </>
  )
}

export default App
