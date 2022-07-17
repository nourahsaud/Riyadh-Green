import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './About';
import Header from './Header';
import Projects from './Projects'


function Rout() {
  return (
    <div>
         <Router>
            <Header/>
        <Routes>
          <Route path="/"></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Projects" element={<Projects/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Rout