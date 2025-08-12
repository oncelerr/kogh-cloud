import styles from "./styles.module.scss"
import footerlogo from '../../assets/navbar-logo.png'
import insta from '../../assets/insta-logo.png'
import x from '../../assets/x-logo.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location-dot.png'
import envelope from '../../assets/envelope.png'
import { useNavigate } from "react-router-dom"

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles['footer-wrapper']}>
        <div className={styles['top']}>
          <div className={styles['left']}>
            <img className={styles['footer-logo']} src={footerlogo} alt="Kogh Cloud" />
            <p className={styles['desc']} >Empowering businesses through innovative<br />technology and strategic transformation.</p>
            <div className={styles['social-links']}>
              <a href=""><img src={insta} alt="Kogh's Instagram" /></a>
              <a href=""><img src={x} alt="Kogh's X/Twitter" /></a>
            </div>
          </div>
          <div className={styles['right']}>
            <div className={styles['quick-links']}>
              <p className={styles['title']}>Quick Links</p>
              <a onClick={() => navigate('/')}><p>Home</p></a>
              <a onClick={() => navigate('/about')}><p>About</p></a>
              <a onClick={() => navigate('/services')}><p>Services</p></a>
              <a onClick={() => navigate('/contact')}><p>Contact Us</p></a>
            </div>
            <div className={styles['reach']}>
              <p className={styles['title']}>Reach Out to Us</p>
              <div className={styles['reach-items']}><img src={phone} alt="" /><p>+63 917 308 7170 | PH</p></div>
              <div className={styles['reach-items']}><img src={phone} alt="" /><p>+55 11 97764-7271 | BR</p></div>
              <div className={styles['reach-items']}><img src={location} alt="" /><p>Unit 905, Civic Place Bldg, 2301 Civic Drive, <br /> Filinvest-Alabang, Muntinlupa City, 1780</p></div>
              <div className={styles['reach-items']}><img src={envelope} alt="" /><p>contact-us@kogh.cloud</p></div>
            </div>
          </div>
        </div>
        <div className={styles['bottom']}>
          <p>Copyright 2025 © KOGH Cloud.  All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer