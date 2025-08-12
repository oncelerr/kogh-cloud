import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import vidBg from '../../assets/vid-bg.mp4';
import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
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

        // Wait until the first frame is ready
        video.addEventListener('loadeddata', onVideoReady);

        return () => {
            video.removeEventListener('loadeddata', onVideoReady);
            gsap.killTweensOf(video);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

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
        </div>
    );
};

const Contact = () => {
    return (
        <>
            <Hero />
        </>
    );
};

export default Contact;
