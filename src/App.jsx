import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="">
        <Header CpName="X-10 Industries" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='*' element={<Home />} />
        </Routes>

        <Footer CpName="X-10 Industries" />
      </div>
    </Router>
  );
}

export default App;
