import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../src/Home/Home";
import About from './Components/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoginPopup from './Components/Login';
import SignUp from './Components/Signup';
import Course from './Components/Course';
export default function App() {
  return (
    <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<LoginPopup />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/course" element={<Course />} />
                </Routes>
                <Footer/>
                
    </div>
  )
}
