import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import vidBg from '../../assets/vid-bg.mp4';
import styles from './styles.module.scss';
import arrowRight from '../../assets/arrow-right.png';
import qr2 from '../../assets/qr2.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    const onVideoReady = () => {
      setReady(true);

      gsap.context(() => {
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=100%',
            scrub: 0.5,
            pin: true
          }
        }).fromTo(
          video,
          { currentTime: 0 },
          { currentTime: video.duration, ease: 'none' }
        );
      }, sectionRef);
    };

    video.addEventListener('loadeddata', onVideoReady);

    return () => {
      video.removeEventListener('loadeddata', onVideoReady);
      gsap.killTweensOf(video);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (!ready || !scrollWrapperRef.current) return;

    gsap.set(scrollWrapperRef.current, { opacity: 1 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        if (scrollWrapperRef.current) {
          scrollWrapperRef.current.style.opacity = String(1 - self.progress);
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [ready]);

  return (
    <div ref={sectionRef} className={styles['sect-six-wrapper']}>
      <video
        ref={videoRef}
        className={styles.videoBg}
        style={{
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
        preload="auto"
        muted
        playsInline
        src={vidBg}
      />
      <div ref={scrollWrapperRef} className={styles.scrollTextWrapper}>
        <div className={styles.scrollText}>
          Scroll down to Navigate
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.circle}></div>
        </div>
      </div>
    </div>
  );
};

function SectionTwo() {
  return (
    <div className={styles['sect-two-wrapper']}>
      <h2>We believe every great partnership begins with a <br /> simple, honest conversation.</h2>
      <p>Your goals, challenges, and vision for the future matter to us. Let’s take the first step together—no pressure, no jargon, just a clear <br /> and friendly conversation about what’s possible for your business.
        <br />
        <br />
        We’d be honored to hear your story.
        <br />Reach out today for a warm chat and a complimentary Digital Health Check to help your business thrive.
      </p>
      <h3>Leave us a message or chat with us!</h3>
      <div className={styles['sect-two-form']}>
        <div className={styles['sect-two-form-left']}>
          <input className={styles['sect-two-form-left-input']} type="text" placeholder="Your Name" />
          <input className={styles['sect-two-form-left-input']} type="text" placeholder="Email Address" />
          <input className={styles['sect-two-form-left-input']} type="text" placeholder="Phone Number (optional)" />
          <textarea className={styles['sect-two-form-left-textarea']} placeholder="Your Message"></textarea>
          <div className={styles["btn-wrapper"]}><button>Get Started <img src={arrowRight} alt="" /></button></div>
        </div>
        <div className={styles['sect-two-form-right']}>
          <img src={qr2} alt="" />
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <>
      <Hero />
      <SectionTwo />
    </>
  )
};

export default Contact;
