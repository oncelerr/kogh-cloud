import React, { useState } from 'react';
import styles from './styles.module.scss';
import vid from '../../assets/H1.mp4';
import icon from '../../assets/kogh-icon.png';
import text from '../../assets/hero-text.png';
import arrowRight from '../../assets/arrow-right.png';
import line from '../../assets/Line.png'
import g1 from '../../assets/Group137.png'
import g2 from '../../assets/Group138.png'
import right from '../../assets/illustration1.png'
import left from '../../assets/illustration2.png'
import prev from '../../assets/prev-btn.png'
import next from '../../assets/next-btn.png'

function Hero() {
  return (
    <div className={styles["hero-wrapper"]}>
      <div className={styles["video-background"]}>
        <video autoPlay loop muted playsInline className={styles["video"]}>
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles["overlay"]}></div>
      </div>
      <div className={styles["content"]}>
        <img className={styles["icon"]} src={icon} alt="Kogh Icon" />
        <img className={styles["text"]} src={text} alt="" />
        <p>Discover your untapped potential and reach new heights <br />Services and Solutions that Secure, Improve, and Scale your Business.</p>
        <div className={styles["btn-wrapper"]}><button>Get Started <img src={arrowRight} alt="" /></button></div>
      </div>
    </div>
  )
}

function SecondSection() {
  return (
    <div className={styles['snd-section']}>
      <h2>Empowering your digital transformation <br />through expert cloud solutions.</h2>
      <p> Kogh Cloud is a trusted cloud consulting company with over 15 years of experience in architecture, development, <br /> security, and data management. We provide tailored cloud migration and optimization services designed to meet <br /> your unique business needs—ensuring secure, scalable, and future-ready solutions.</p>
      <div className={styles["abt-btn-wrapper"]}><button className={styles["abt-btn"]}>About Us <img src={arrowRight} alt="" /></button></div>
      <img className={styles["img-elmnt"]} src={line} alt="" />
      <img className={styles["img-elmnt2"]} src={g1} alt="" />
      <img className={styles["img-elmnt3"]} src={g2} alt="" />
    </div>
  )
}

function ThirdSection() {
  return (
    <div className={styles['trd-section']}>
      <div className={styles['top']}>
        <div className={styles['left']}>
          <h3>Don’t let your business fall behind</h3>
          <p className={styles['left-desc']}>Letting your business fall behind is not a slow, gentle decline. <br />It's a rapid loss of competitiveness, efficiency, and customer <br />loyalty. Technology isn't a threat; it's the single most powerful <br />enabler for growth, innovation, and resilience available to you. <br />This guide will explore why you can't afford to be left behind and <br />provide a clear roadmap for thriving.</p>
        </div>
        <div className={styles['right']}>
          <img className={styles['right-img']} src={right} alt="" />
        </div>
      </div>
      <div className={styles['bottom']}>
        <div className={styles['right']}>
          <img className={styles['right-img']} src={left} alt="" />
        </div>
        <div className={styles['left']}>
          <h3>Embracing technology doesn't have <br /> to be overwhelming or expensive</h3>
          <p className={styles['left-desc']}>Let us guide your company on its technology journey,<br /> transforming overwhelming challenges into strategic <br /> advantages by identifying your core business problems first, then <br />matching them with the right, affordable, and scalable tools, <br />empowering your team with the skills and data needed for future <br /> growth and ensuring you always stay ahead.</p>
        </div>
      </div>
    </div>
  )
}

function FourthSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videos = [
    { id: 1, src: vid },
    { id: 2, src: vid },
    { id: 3, src: vid }
  ];

  // Import the line image
  const lineImage = line;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles['frth-section']}>
      <h2>Empower Your Business with the <br />Right Cloud Strategy</h2>
      <p>We help you harness the power of the cloud with tailored strategies that <br /> drive growth, efficiency, and innovation.</p>
      <div className={styles['carousel-wrapper']}>
        {/* Decorative Lines */}
        <img
          src={line}
          className={styles['decorative-line-top']}
          alt=""
          aria-hidden="true"
        />
        <img
          src={line}
          className={styles['decorative-line-bottom']}
          alt=""
          aria-hidden="true"
        />
        <div className={styles['carousel-part']}>
          <div className={styles['prev-btn']} onClick={prevSlide}>
            <button><img src={prev} alt="Previous" /></button>
          </div>
          <div className={styles['carousel']}>
            <div
              className={styles['carousel-track']}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {videos.map((video, index) => (
                <div key={video.id} className={styles['carousel-slide']}>
                  <video
                    className={styles['carousel-video']}
                    src={video.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles['next-btn']} onClick={nextSlide}>
            <button><img src={next} alt="Next" /></button>
          </div>
        </div>
        <div className={styles['indicator-wrapper']}>
          {videos.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${currentIndex === index ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function FifthSection() {
  return (
    <div className={styles['fth-section']}>
      <div className={styles['fth-left']}>
        <img src={icon} alt="" />
        <h2>Ready to take your business <br /><span>to another level?</span></h2>
        <p>Let our Family help you with a strategic road map and the right tools <br />to boost efficiency, connect with more customers, and secure your <br />future growth.</p>
      </div>
      <div className={styles['fth-right']}>
        <div className={styles["abt-btn-wrapper"]}><button className={styles["abt-btn"]}>Get Started <img src={arrowRight} alt="" /></button></div>
      </div>
    </div>
  )
}

function Home() {
  return (
    <>
      <div className={styles['home-wrapper']}>
        <Hero />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </div>
    </>
  )
}

export default Home