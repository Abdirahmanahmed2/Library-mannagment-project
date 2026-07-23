import Header from "./Components/Header"
import Home from './pages/Home'
import About from './pages/About'
import Books from './pages/Books'
import Cart from './pages/Cart'
import Members from './pages/Members'
import Contact from './pages/Contact'
import Login from './pages/Login'

import { Route,Routes } from "react-router-dom"
function App () {
    return <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/members" element={<Members/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
}export default App