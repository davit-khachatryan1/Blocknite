import { motion, useAnimation, useTransform, useViewportScroll } from 'framer-motion';
import styles from './style.module.scss'
import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <img src='/icons/arrow-right-slider.svg' />,
    prevArrow: <img src='/icons/arrow-left-slider.svg' />
};

const items = [
    { id: '1', src: '/networks/binance.png' },
    { id: '2', src: '/networks/coin-gecko.png' },
    { id: '3', src: '/networks/coin-market-cap.png' },
    { id: '4', src: '/networks/metamask.png' },
    { id: '5', src: '/networks/pancacke-swap.png' },
    { id: '6', src: '/networks/metamask.png' },
    { id: '7', src: '/networks/coin-market-cap.png' },
    { id: '8', src: '/networks/coin-gecko.png' },
]

export const SecondScreen = () => {
    const { scrollYProgress } = useViewportScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const translateY = useTransform(scrollYProgress, [0, 0.1], [-50, 20]);

    const descriptionOpacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);
    const descriptionTranslateY = useTransform(scrollYProgress, [0.1, 0.15], [-50, 20]);

    const controls = useAnimation();
    const ref1 = useRef(null);
    const pageREf = useRef(null);
    
    const checkCenter = () => {
        if (ref1.current) {
            const rect = (ref1.current as any).getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const center = rect.top + rect.height / 2;
            

            const isElementCentered = center > 0 && center < windowHeight / 2;
            if (isElementCentered) {
                controls.start({
                    width: '168px',
                    transition: { duration: 0.5, ease: 'easeOut' }
                });
            } else if (center > windowHeight) {
                controls.start({ width: 0 });
            }
        } else {
            controls.start({ width: 0 });
        }

        // if (pageREf.current) {
        //     const rect = (pageREf.current as any).getBoundingClientRect();
        //     const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        //     const center = rect.top + rect.height / 2;
            

        //     const isElementCentered = rect.top < windowHeight / 2 && rect.top > -windowHeight / 2;
        //     if(isElementCentered){
        //         updatePage('SecondScreen')
        //     }
        // }
    }

    useEffect(() => {
        window.addEventListener("scroll", checkCenter);
        return () => {
            window.removeEventListener("scroll", checkCenter);
        };
    }, [])

    return (
        <div className={styles.container} ref={pageREf}>
            <img src="/bg-images/second-bg.png" className={styles.bgImage} />
            <div className={styles.titleBlock}>
                <div style={{ width: '168px', display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <motion.div
                        ref={ref1}
                        initial={{ width: '0', height: '29px' }}
                        animate={controls}
                        style={{
                            height: '29px',
                            overflow: 'hidden',
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <img
                            src='/icons/arrow-left.svg' className={styles.arrowIcon}
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </motion.div>
                </div>
                <motion.div
                    style={{
                        opacity,
                        translateY,
                    }}
                >
                    <div>Trea is waiting for you</div>
                </motion.div>

                <div style={{ width: '168px', display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <motion.div
                        initial={{ width: '0', height: '29px' }}
                        animate={controls}
                        style={{
                            height: '29px',
                            overflow: 'hidden',
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <img
                            src='/icons/arrow-right.svg' className={styles.arrowIcon}
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </motion.div>
                </div>
            </div>
            <motion.div
                style={{
                    opacity: descriptionOpacity,
                    translateY: descriptionTranslateY,
                }}
                className={styles.description}
            >
                Embark on a heroic quest to defend Mithruon from the Orgurin onslaught.
            </motion.div>
            <div className={styles.playButton}>
                <img src='/icons/main-circle.svg' className={styles.mainCircle} />
                <motion.img
                    className={styles.partCircle1}
                    animate={{
                        rotate: [0, 360],
                        transition: {
                            duration: 2, // Duration of one complete rotation
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                        }
                    }}
                    src='/icons/part-circle-1.svg'
                />
                <motion.img
                    className={styles.partCircle2}
                    animate={{
                        rotate: [0, -360],
                        transition: {
                            duration: 2, // Duration of one complete rotation
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                        }
                    }}
                    src='/icons/part-circle-2.svg'
                />
            </div>

            <div className={styles.carousel}>
                <div className={styles.title}> Our partners </div>
                <div className={styles.carouselContainer}>
                    <Slider {...settings}>
                        {items.map((item, index) =>

                            <div className={styles.swiperElement}> <img src={item.src} alt={`Slide ${index}`} style={{ height: '40px', width: 'auto', objectFit: 'contain' }} /></div>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    );
};
