import React from 'react';
import Navbar from './assets/components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/components/Home';
import About from './assets/components/About';
import Contact from './assets/components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;