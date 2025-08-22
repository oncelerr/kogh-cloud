import styles from './styles.module.scss'
import heroImage from '../../assets/hero-image.png'
import g1 from '../../assets/Group137.png'
import grpImg from '../../assets/grp-img.png'
import kogh from '../../assets/kogh.svg'
import arrowRight from '../../assets/arrow-right.png';
import cloud from '../../assets/cloud.png';
import webhook from '../../assets/webhook.png';
import sheild from '../../assets/shield.png';
import puzzle from '../../assets/puzzle.png';
import values from '../../assets/values.png';
import mission from '../../assets/mission.png';
import vision from '../../assets/vision.png';
import ciao from '../../assets/Caio.png';
import richard from '../../assets/Richard.png';
import { useEffect, useState } from 'react'

function Hero() {
  return (
    <div className={styles["hero-wrapper"]}>
      <img className={styles["hero-dots"]} src={g1} alt="" />
      <div className={styles["hero-left"]}>
        <h1 className={styles["hero-h1"]}>Technology <br /> <span className={styles["hero-gradient1"]}>powered by Heart</span> </h1>
        <p className={styles["hero-p"]}>At Kogh Cloud, we create software from people, for people. We don't <br />ask, "Can we build it?" We ask, "How will this make life <br />better, easier, and more joyful?"</p>
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
        <div className={styles["hr"]}></div>
        <p>
          Kogh Cloud was founded on a shared passion for pushing the creative boundaries of technology. We’ve grown into a dynamic cloud consulting company with over 15 years of experience in Cloud Architecture, Development, Security, and Data Management.
        </p>
        <br />
        <p>
          We believe technology is a key driver of business success. That’s why we focus on delivering tailored cloud solutions that support each client’s unique goals. Our team is made up of experienced professionals who are committed to continuous learning and staying updated with the latest trends and technologies.
        </p>
        <br />
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

function SectionFour() {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsWide(window.innerWidth > 1440);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div className={styles["sect-four-wrapper"]}>
      {isWide ? (
        <>
          <h2>Our Core Values</h2>
          <div className={styles["four-bottom"]}>
            <div className={styles["four-bottom-left"]}>
              <img src={mission} className={styles["mission-img"]} alt="" />
              <h3>Our Mission</h3>
              <p>
                Drive innovation and empower businesses globally to embrace
                digitalization, attain sustainable growth, agility, and a more
                connected future.
              </p>
            </div>
            <div className={styles["four-bottom-right"]}>
              <img src={vision} className={styles["vision-img"]} alt="" />
              <h3>Our Vision</h3>
              <p>
                To be a leading power for good, enable every company does not
                matter how small to be connected to every corner of the world
                and utilize computing power to its full potential.
              </p>
            </div>
            <div className={styles["four-top"]}>
              <img className={styles["four-top-img"]} src={values} alt="" />
              <h3>Our Values</h3>
              <p>
                Development Before you invest in any technology, you need a plan.
                We work with you to assess your current state, identify key
                opportunities, and build a clear, phased roadmap for your
                digital journey.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles["four-top"]} style={{ display: "flex", gap: "48px" }}>
            <img src={values} className={styles["values-img"]} alt="" />
            <div className={styles["four-top-right"]}>
              <h3>Our Values</h3>
              <p>
                Development Before you invest in any technology, you need a plan.
                We work with you to assess your current state, identify key
                opportunities, and build a clear, phased roadmap for your
                digital journey.
              </p>
            </div>
          </div>
          <div className={styles["four-bottom"]}>
            <div className={styles["four-bottom-left"]}>
              <img src={mission} className={styles["mission-img"]} alt="" />
              <h3>Our Mission</h3>
              <p>
                Drive innovation and empower businesses globally to embrace
                digitalization, attain sustainable growth, agility, and a more
                connected future.
              </p>
            </div>
            <div className={styles["four-bottom-right"]}>
              <img src={vision} className={styles["vision-img"]} alt="" />
              <h3>Our Vision</h3>
              <p>
                To be a leading power for good, enable every company does not
                matter how small to be connected to every corner of the world
                and utilize computing power to its full potential.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function SectionFive() {
  return (
    <div className={styles["sect-five-wrapper"]}>
      <h2>Meet the Team</h2>
      <p>The team behind our tech — driven, creative, and cloud-focused.</p>
      <div className={styles["sect-five-member"]}>
        <img src={ciao} alt="" />
        <div className={styles["sect-five-member-details"]}>
          <h2>Caio Yoshida</h2>
          <h3>Chief Executive Officer</h3>
          <div className={styles["hr"]}></div>
          <p>A dynamic and results-driven Global Operations Leader with over 12 years of experience driving business growth across diverse international markets (APAC, China, LATAM), directing multi-country operations, and forging strategic vendor partnerships. Proven success in launching new business units, pioneering market entry into Brazil, and holding full P&L responsibility. A multilingual communicator (5 languages) dedicated to optimizing performance, obsessed about customer service delivery and achieving world-class operational excellence.</p>
        </div>
      </div>
      <div className={styles["sect-five-member"]}>
        <div className={styles["sect-five-member-details"]}>
          <h2>Richard Cayrel</h2>
          <h3>Chief Technology Officer</h3>
          <div className={styles["hr"]}></div>
          <p>A highly accomplished and certified Network Engineer with extensive expertise in designing, implementing, and securing complex enterprise and cloud network infrastructures. Proven ability to master emerging technologies, demonstrated by advanced certifications in Cisco (CCNP Enterprise), Microsoft Azure (Security and Network Engineer), and Cybersecurity (CompTIA Security+). A dedicated authority committed to building robust, scalable, and secure network solutions that drive business success.</p>
        </div>
        <img src={richard} alt="" />
      </div>
    </div>
  )
}

function SectionSix() {
  return (
    <div className={styles["sect-six-wrapper"]}>
      <h2>Ready to take your business to another level?</h2>
      <p>Let our Family help you with a strategic road map and the right tools to boost efficiency, connect with more customers, and secure your future growth.</p>
      <div className={styles["abt-btn-wrapper"]}><button className={styles["abt-btn"]}>Get Started <img src={arrowRight} alt="" /></button></div>
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
      <SectionFour />
      <hr />
      <SectionFive />
      <SectionSix />
    </>
  )
}

export default About