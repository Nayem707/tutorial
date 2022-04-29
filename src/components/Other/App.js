import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbars from './Nav/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Service from './Service/Service';
import Products from './Products/Products';
import Contact from './Contact/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
