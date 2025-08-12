import styles from './styles.module.scss'
import heroImage2 from '../../assets/hero-image-2.png'
import g1 from '../../assets/Group137.png'
import arrowRight from '../../assets/arrow-right.png';
import timer from '../../assets/timer.png'
import userSlash from '../../assets/users-slash.png'
import eyeSlash from '../../assets/eye-slash.png'
import exclamation from '../../assets/circle-exclamation.png'
import faceFrown from '../../assets/face-frown.png'
import sectTwoAnswerRight from '../../assets/sect-two-answer-right.png'
import gridImg from '../../assets/grid-img.png'
import gridImg2 from '../../assets/grid-img2.png'
import proccess from '../../assets/process.png'
import magnify from '../../assets/magnifying-glass.png'
import pen from '../../assets/pen.png'
import paperclip from '../../assets/paperclip.png'
import chip from '../../assets/microchip.png'
import gear from '../../assets/gear.png'


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
      <p>In today's digital-first economy, standing still is the same as moving backward. <br />Many businesses are facing critical challenges that impact their growth, efficiency, and customer loyalty.</p>
      <div className={styles["hr"]}></div>
      <div className={styles["sect-two-answer"]}>
        <div className={styles["sect-two-answer-left"]}>
          <div className={styles["sect-two-answer-left-group"]}>
            <h4><img src={timer} alt="" /> Operational Inefficiency</h4>
            <p>Streamline your internal processes to save time, reduce costs, and empower your team to focus on high-value work.</p>
          </div>
          <div className={styles["sect-two-answer-left-group"]}>
            <h4><img src={userSlash} alt="" /> Disconnected Customer Experience</h4>
            <p>Customers expect seamless online service, from inquiry to payment. A clunky or non-existent digital presence is driving them to your competitors.</p>
          </div>
          <div className={styles["sect-two-answer-left-group"]}>
            <h4><img src={eyeSlash} alt="" /> Data Blind Spots</h4>
            <p>You're making critical business decisions based on gut feelings instead of real-time data and actionable insights.</p>
          </div>
          <div className={styles["sect-two-answer-left-group"]}>
            <h4><img src={exclamation} alt="" /> Outdated Systems</h4>
            <p>Legacy software is holding you back, creating security risks and making it difficult for your team to collaborate effectively, especially in a hybrid work environment.</p>
          </div>
          <div className={styles["sect-two-answer-left-group"]}>
            <h4><img src={faceFrown} alt="" /> Missed Growth Opportunities</h4>
            <p>You know you need to innovate, but you're not sure where to start or which technologies will provide the best return on investment.</p>
          </div>
        </div>
        <div className={styles["sect-two-answer-right"]}>
          <img src={sectTwoAnswerRight} alt="" />
        </div>
      </div>
    </div>
  )
}

function SectionThree() {
  return (
    <div className={styles['sect-three-wrapper']}>
      <h2 className={styles['sect-three-wrapper-h2']}>Our Digital Transformation Services</h2>
      <p className={styles['sect-three-wrapper-p']}>We help you navigate the complexities of technology by providing end-to-end digital transformation solutions tailored to your unique <br /> business goals. We don't just sell software; we build strategic roadmaps for sustainable growth.</p>
      <div className={styles['sect-three-grid-wrapper']}>
        <div className={styles['grid-grp-1']}>
          <img src={gridImg} alt="" />
          <div className={styles['grid-grp-1-card']}>
            <h4>Digital Strategy & Roadmap Development </h4>
            <p>Before you invest in any technology, you need a plan. We work with you to assess your current state, identify key opportunities, and build a clear, phased roadmap for your digital journey.</p>
          </div>
        </div>
        <div className={styles['grid-grp-2']}>
          <div className={styles['grid-grp-2-top']}>
            <div className={styles['grid-grp-2-card']}>
              <h4>Operations & Process Automation  </h4>
              <p>Streamline your internal processes to save time, reduce costs, and empower your team to focus on high-value work.</p>
            </div>
            <div className={styles['grid-grp-2-card']}>
              <h4>Customer Experience (CX) </h4>
              <p>Modernization Meet your customers where they are with a modern, seamless, and engaging digital experience.</p>
            </div>
          </div>
          <div className={styles['grid-grp-2-bottom']}>
            <div className={styles['grid-grp-2-bottom-card']}>
              <h4>Data Analytics & Business</h4>
              <p>Intelligence Unlock the power of your data to make smarter, faster, and more profitable business decisions.</p>
            </div>
            <div className={styles['grid-grp-2-bottom-img']}>
              <img src={gridImg2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionFour() {
  return (
    <div className={styles['sect-four-wrapper']}>
      <h2 className={styles['sect-four-wrapper-h2']}>Your Transformation in 5 Steps</h2>
      <p className={styles['sect-four-wrapper-p']}>We follow a proven, collaborative process to ensure your digital transformation <br /> is successful, manageable, and delivers real results.</p>
      <img className={styles['sect-four-wrapper-img']} src={proccess} alt="" />
      <div className={styles['sect-four-wrapper-card-wrapper']}>
        {[
          {
            icon: magnify,
            title: 'Discover',
            step: 'Step 1',
            desc: 'We analyze your current business processes and identify areas for digital transformation.'
          },
          {
            icon: pen,
            title: 'Strategize',
            step: 'Step 2',
            desc: 'We develop a customized digital strategy and roadmap tailored to your business goals.'
          },
          {
            icon: paperclip,
            title: 'Implement',
            step: 'Step 3',
            desc: 'We implement the digital solutions and technologies outlined in your roadmap.'
          },
          {
            icon: chip,
            title: 'Empower',
            step: 'Step 4',
            desc: 'We provide training and support to ensure your team can effectively use the new technologies.'
          },
          {
            icon: gear,
            title: 'Optimize',
            step: 'Step 5',
            desc: 'We continuously monitor and optimize the implemented solutions for maximum efficiency.'
          }
        ].map((card, index) => (
          <div key={index} className={styles['flip-card']}>
            <div className={styles['flip-card-inner']}>
              <div className={styles['flip-card-front']}>
                <img className={styles['sect-four-wrapper-card-img']} src={card.icon} alt="" />
                <h4 className={styles['sect-four-wrapper-card-h4']}>{card.title}</h4>
                <p className={styles['sect-four-wrapper-card-p']}>{card.step}</p>
              </div>
              <div className={styles['flip-card-back']}>
                <p className={styles['sect-four-wrapper-card-desc']}>{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SectionSix() {
  return(
    <div className={styles["sect-six-wrapper"]}>
      <h2>Ready to take your business to another level?</h2>
      <p>Let our Family help you with a strategic road map and the right tools to boost efficiency, connect with more customers, and secure your future growth.</p>
      <div className={styles["abt-btn-wrapper"]}><button className={styles["abt-btn"]}>Get Started <img src={arrowRight} alt="" /></button></div>
    </div>
  )
}

function Services() {
  return (
    <>
      <Hero />
      <hr />
      <SectionTwo />
      <SectionThree />
      <SectionFour/>
      <SectionSix/>
    </>
  )
}

export default Services