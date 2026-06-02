import styles from "./styles.module.scss"
import footerlogo from '../../assets/lgo.svg'
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
            <p className={styles['desc']} >Empowering businesses through innovative technology and strategic transformation.</p>
            <div className={styles['social-links']}>
              <a href="https://www.instagram.com/kogh.cloud?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><img src={insta} alt="Kogh's Instagram" /></a>
              <a href="https://www.linkedin.com/company/kogh-cloud-technology/about" target="_blank" rel="noopener noreferrer"><img src={x} alt="Kogh's LinkedIn" /></a>
            </div>
          </div>
          <div className={styles['right']}>
            <div className={styles['quick-links']}>
              <p className={styles['title']}>Quick Links</p>
              <a onClick={() => navigate('/')} style={{ cursor: 'pointer' }}><p>Home</p></a>
              <a onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}><p>About</p></a>
              <a onClick={() => navigate('/services')} style={{ cursor: 'pointer' }}><p>Services</p></a>
              <a onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}><p>Contact Us</p></a>
            </div>
            <div className={styles['reach']}>
              <p className={styles['title']}>Reach Out to Us</p>
              <div className={styles['reach-items']}><img src={phone} alt="" /><p>+63 917 308 7170 | PH</p></div>
              <div className={styles['reach-items']}><img src={location} alt="" /><p>Unit 905, Civic Place Bldg, 2301 Civic Drive, <br /> Filinvest-Alabang, Muntinlupa City, 1780</p></div>
              <div className={styles['reach-items']}><img src={envelope} alt="" /><p>contact-us@kogh.cloud</p></div>
            </div>
          </div>
        </div>
        <div className={styles['hr']}></div>
        <div className={styles['bottom']}>
          <p>Copyright 2025 © <a href="/">KOGH Cloud</a>. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
