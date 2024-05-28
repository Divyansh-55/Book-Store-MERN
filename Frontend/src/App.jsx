import React from 'react';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "../src/Home/Home";
import About from './Components/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SignUp from './Components/Signup';
import Course from './Components/Course';
import { useAuth } from './Context/AuthProvider';
export default function App() {
  const [authUSer,setAuthUser]=useAuth();
  console.log(authUSer);
  const location = useLocation();
  const showNavbarAndFooter = location.pathname !== "/signup";

  return (
    <div>
      {showNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/course" element={authUSer?<Course />:<Navigate to={"/signup"}/>} />
      </Routes>
      {showNavbarAndFooter && <Footer />}
    </div>
  );
}
