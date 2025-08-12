import styles from './styles.module.scss'
import heroImage from '../../assets/hero-image.png'
import g1 from '../../assets/Group137.png'
import grpImg from '../../assets/grp-img.png'
import kogh from '../../assets/kogh.png'
import arrowRight from '../../assets/arrow-right.png';
import cloud from '../../assets/cloud.png';
import webhook from '../../assets/webhook.png';
import sheild from '../../assets/shield.png';
import puzzle from '../../assets/puzzle.png';

function Hero() {
  return (
    <div className={styles["hero-wrapper"]}>
      <img className={styles["hero-dots"]} src={g1} alt="" />
      <div className={styles["hero-left"]}>
        <h1 className={styles["hero-h1"]}>Technology <br /> <span className={styles["hero-gradient1"]}>powered by Heart</span> </h1>
        <p className={styles["hero-p"]}>Discover your untapped potential and reach new heights Services <br />and Solutions that Secure, Improve, and Scale your Business.</p>
      </div>
      <div className={styles["hero-right"]}>
        <img src={heroImage} alt="" />
      </div>
    </div>
  )
}

function SectionTwo() {
  return (
    <div className={styles["sect-two-wrapper"]}>
      <div className={styles["two-left"]}>
        <img src={grpImg} alt="" />
      </div>
      <div className={styles["two-right"]}>
        <h2>How <img src={kogh} alt="" /> Started</h2>
        <hr />
        <p>
          Kogh Cloud was founded on a shared passion for pushing the creative boundaries of technology. We’ve grown into a dynamic cloud consulting company with over 15 years of experience in Cloud Architecture, Development, Security, and Data Management.
        </p>
        <p>
          We believe technology is a key driver of business success. That’s why we focus on delivering tailored cloud solutions that support each client’s unique goals. Our team is made up of experienced professionals who are committed to continuous learning and staying updated with the latest trends and technologies.
        </p>
        <p>
          More than just providing services, we build long-term partnerships. We work closely with our clients to understand what matters most, review progress regularly, and ensure that every solution we deliver moves them forward.
        </p>
      </div>
    </div>
  )
}

function SectionThree() {
  return (
    <div className={styles["sect-three-wrapper"]}>
      <div className={styles["three-top"]}>
        <div className={styles["top-left"]}>
          <h3>What We Do</h3>
          <p>We are a cloud consulting company made up of experienced specialists who care about the opportunities cloud technologies can bring to any business. That’s why we have over 15 years of experience in Cloud Architecture, Development, Security, and Data Management.</p>
        </div>
        <div className={styles["top-right"]}>
          <div className={styles["abt-btn-wrapper"]}><button className={styles["abt-btn"]}>Get Started <img src={arrowRight} alt="" /></button></div>
        </div>
      </div>
      <div className={styles["three-bottom"]}>
        <div className={styles["three-card"]}>
          <div className={styles["img-wrapper"]}><img src={cloud} alt="" /></div>
          <h4>Cloud Migration</h4>
          <p>Move your data and apps to the cloud smoothly and securely.</p>
        </div>
        <div className={styles["three-card"]}>
          <div className={styles["img-wrapper"]}><img src={webhook} alt="" /></div>
          <h4>Infrastructure Management</h4>
          <p>Move your data and apps to the cloud smoothly and securely.</p>
        </div>
        <div className={styles["three-card"]}>
          <div className={styles["img-wrapper"]}><img src={sheild} alt="" /></div>
          <h4>Data Security & Compliance</h4>
          <p>Move your data and apps to the cloud smoothly and securely.</p>
        </div>
        <div className={styles["three-card"]}>
          <div className={styles["img-wrapper"]}><img src={puzzle} alt="" /></div>
          <h4>Custom Cloud Solutions</h4>
          <p>Move your data and apps to the cloud smoothly and securely.</p>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <>
      <Hero />
      <hr />
      <SectionTwo />
      <SectionThree />
    </>
  )
}

export default About