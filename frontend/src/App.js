import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import HowToUse from './pages/HowToUse/HowToUse';
import Donate from './pages/Donate/Donate';
import Generate from './pages/Generate/Generate';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Header appears on all pages */}
        <Routes>
          <Route path="/Home" element={<Home />} /> {/* Default route */}
          <Route path="/HowToUse" element={<HowToUse />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Generate" element={<Generate />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer /> {/* Footer appears on all pages */}
      </div>
    </Router>
  );
}

export default App;
