import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import navlogo from "../../assets/navbar-logo.png"
import hamburgerIcon from "../../assets/hamburger.png"
import styles from "./styles.module.scss"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <ScrollToTop />
      <div className={styles['nav-wrapper']}>
        <img src={navlogo} alt="Kogh Cloud" className={styles['nav-logo']} />
        
        {/* Desktop Navigation */}
        <div className={`${styles['nav-links']} ${styles['desktop-nav']}`}>
          <a onClick={() => handleNavClick('/')}>Home</a>
          <a onClick={() => handleNavClick('/about')}>About</a>
          <a onClick={() => handleNavClick('/services')}>Services</a>
          <a onClick={() => handleNavClick('/contact')}>Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles['hamburger-btn']} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <img src={hamburgerIcon} alt="Menu" width={18} height={20} />
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles['mobile-menu']} ${isMenuOpen ? styles['mobile-menu--open'] : ''}`}>
          <div className={styles['mobile-nav-links']}>
            <a onClick={() => handleNavClick('/')}>Home</a>
            <a onClick={() => handleNavClick('/about')}>About</a>
            <a onClick={() => handleNavClick('/services')}>Services</a>
            <a onClick={() => handleNavClick('/contact')}>Contact Us</a>
          </div>
        </div>
        
        {/* Overlay when menu is open */}
        {isMenuOpen && (
          <div 
            className={styles['menu-overlay']} 
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </>
  )
}

export default Navbar