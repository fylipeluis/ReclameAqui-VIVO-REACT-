import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from './pages/WelcomePage/Welcome'
import Login from './pages/LoginPage/Login'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>  
    <Route path="/" element={<Welcome />}/>
    <Route path="login" element={<Login />}/>
    </Routes>
  </BrowserRouter>
  )
}
