import { useNavigate } from 'react-router-dom';
import navlogo from "../../assets/navbar-logo.png"
import styles from "./styles.module.scss"

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
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