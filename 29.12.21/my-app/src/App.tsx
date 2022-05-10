import React from 'react';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { navArr } from './Navbar/nav_items';
import { Home } from './Home/Home';
import { Footer } from "./Footer/Footer";
import { About } from "./About/About";
import { Map } from "./Location/Map";
import { Signup } from "./Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Ideas } from './ideas/Ideas';
import { Profile } from './Profile/Profile';
import { Login } from './Login/Login';
import { Brands } from "./Brands/Brands";
function App() {
  return (
    <div className="App" id='allItems'>
      <header className="App-header">
        <Navbar navItems={navArr} logoImageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Recycling_symbol2.svg/800px-Recycling_symbol2.svg.png"} />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="brands" element={<Brands />} />
          <Route path="about" element={<About />} />
          <Route path="map" element={<Map />} />
          <Route path="Ideas" element={<Ideas />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
