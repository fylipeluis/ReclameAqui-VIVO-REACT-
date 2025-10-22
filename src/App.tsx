import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from './pages/WelcomePage/Welcome'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>  
    <Route path="/" element={<Welcome />}/>
    <Route path="/login" element={<div>Login Page</div>}/>
    </Routes>
  </BrowserRouter>
  )
}
