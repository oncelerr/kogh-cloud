import styles from './styles.module.scss'
import heroImage2 from '../../assets/hero-image-2.png'
import g1 from '../../assets/Group137.png'
import arrowRight from '../../assets/arrow-right.png';
import timer from '../../assets/timer.png'

function Hero() {
  return (
    <div className={styles["hero-wrapper"]}>
      <img className={styles["hero-dots"]} src={g1} alt="" />
      <div className={styles["hero-left"]}>
        <h1 className={styles["hero-h1"]}>Future-Proof Your <br />Business with <br /> <span className={styles["hero-gradient1"]}>Digital Strategy</span> </h1>
        <h3 className={styles["hero-h1"]}>Don't just compete, lead. </h3>
        <p className={styles["hero-p"]}>We guide your business through a strategic digital transformation, turning technology into your greatest competitive advantage.</p>
        <div className={styles["btn-wrapper"]}><button>Get Started <img src={arrowRight} alt="" /></button></div>
      </div>
      <div className={styles["hero-right"]}>
        <img src={heroImage2} alt="" />
      </div>
    </div>
  )
}

function SectionTwo() {
  return (
    <div className={styles["sect-two-wrapper"]}>
      <h2>Is Your Business Being Left Behind?</h2>
      <p>In today's digital-first economy, standing still is the same as moving backward.Many businesses are facing critical challenges that impact their growth, efficiency, and customer loyalty.</p>
      <hr />
      <div className={styles["sect-two-answer"]}>
        <div className={styles["sect-two-answer-left"]}>
          <div className={styles["sect-two-answer-left-group"]}>
            <h4><img src={timer} alt="" /> Operational Inefficiency</h4>
          </div>
        </div>
        <div className={styles["sect-two-answer-right"]}>

        </div>
      </div>
    </div>
  )
}

function Services() {
  return (
    <>
      <Hero />
      <hr />
      <SectionTwo />
    </>
  )
}

export default Services