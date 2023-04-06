import { NavLink, Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Policy from "../pages/Policy";
import Footer from "../component/Footer";


import "../styles/Navbar.css";

function Navbar() {
    return (
        <BrowserRouter>
            <div className="nav-bar-container">
                <nav className="nav-bar">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/About">About</NavLink>
                    <NavLink className="nav-link" to="/Gallery">Gallery</NavLink>
                    <NavLink className="nav-link" to="/Products">Products</NavLink>
                    <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                    <NavLink className="nav-link" to="/Policy">Policy</NavLink>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Gallery" element={<Gallery/>} />
                <Route path="/Products" element={<Products/>} />
                <Route path="/Contact" element={<Contact/>} />
                <Route path="/Policy" element={<Policy/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default Navbar;