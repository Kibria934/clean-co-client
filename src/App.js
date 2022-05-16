import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./Components/Navbar";
import Navbar from './Components/Navbar'
import NotFound from "./NotFound";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home/Home";
import Login from "./page/Login";
import Services from "./page/Services";
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

useEffect(()=>{
  AOS.init()
},[]);



  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/service" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
