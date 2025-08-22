import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar/Index';
import PageTransition from './Components/PageTransition/Index';
import './App.css';
import Home from './Pages/Home/Index';
import About from './Pages/About/Index';
import Services from './Pages/Services/Index';
import Contact from './Pages/Contact/Index';
import Footer from './Components/Footer/Index';
import { useState, useEffect } from 'react';
import arrowUp from './assets/arrow-up.png';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} className="scrollToTop">
        <img src={arrowUp} alt="" />
      </button>
    )
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition backgroundColor={''}>
            <Home />
          </PageTransition>
        }/>
        <Route path="/about" element={
          <PageTransition backgroundColor={''}>
            <About />
          </PageTransition>
        }/>
        <Route path="/services" element={
          <PageTransition backgroundColor={''}>
            <Services />
          </PageTransition>
        }/>
        <Route path="/contact" element={
          <PageTransition backgroundColor={''}> 
            <Contact />
          </PageTransition>
        }/>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navbar/>
      <AnimatedRoutes />
      <Footer/>
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
