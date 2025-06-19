import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Services from './components/Services';
import Header from './pages/home/Header';
import SubHeader from './pages/services/Header';
import Footer from './pages/home/Footer';
import { Outlet } from 'react-router-dom';
import './App.css';

import Home from './components/Home';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  return (
    <>
      <Header scrolled={scrolled}  />
      <div> {/* Padding for sticky header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
