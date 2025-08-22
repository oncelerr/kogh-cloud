import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import navlogo from "../../assets/navbar-logo.png"
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

  return (
    <>
      <ScrollToTop />
      <div className={styles['nav-wrapper']}>
        <img src={navlogo} alt="Kogh Cloud" />
        <div className={styles['nav-links']}>
          <a onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home</a>
          <a onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>About</a>
          <a onClick={() => navigate('/services')} style={{ cursor: 'pointer' }}>Services</a>
          <a onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>Contact Us</a>
        </div>
      </div>
    </>
  )
}

export default Navbar