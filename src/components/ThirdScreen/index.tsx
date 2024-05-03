
import { motion, useAnimation, useTransform, useViewportScroll } from 'framer-motion';
import styles from './style.module.scss'
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import Typewriter from '../TypeWriter';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: <img src='/icons/arrow-right-slider.svg' />,
    prevArrow: <></>
};

const items = [
    { id: '1', text: 'Forge Manna Stones at the Arcane Forge that power your Blocknite experience.' },
    { id: '2', text: 'Raise an army of Treanin through the Manna Nexus, fuse Treanin together and customise them to perfection.' },
    { id: '3', text: 'Battle the Orgurin grunts and level up your Treanin, getting bonus rewards. Are you brave enough to take on the Orgurin boss?' },
    { id: '4', text: 'Buy and sell Treanin & Manna Stones at the marketplace.' },
    { id: '5', text: 'Participate in the Blocknite community & devise the best strategies for maximising rewards.' },
]

export const ThirdScreen = () => {
    const [infoTitles, setInfoTitles] = useState({
        first: true,
        second: true,
        third: true,
    });
    const { scrollYProgress } = useViewportScroll();
    // const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const translateY = useTransform(scrollYProgress, [0, 0.1], [-50, 20]);

    // const descriptionOpacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);
    const descriptionTranslateY = useTransform(scrollYProgress, [0.1, 0.15], [-50, 20]);

    const controls = useAnimation();
    const blockControls1 = useAnimation();
    const blockControls2 = useAnimation();
    const blockControls3 = useAnimation();
    const ref1 = useRef(null);

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
    }

    useEffect(() => {
        window.addEventListener("scroll", checkCenter);
        return () => {
            window.removeEventListener("scroll", checkCenter);
        };
    }, [])

    const refTitle = useRef(null);
    const refDescription = useRef(null);

    const calcCenter = (ref: any) => {
        if (!ref.current) return 0;
        const rect = (ref.current as any).getBoundingClientRect();
        return (rect.top + rect.bottom) / 2;
    };

    const opacity = useTransform(scrollYProgress, value => {
        const elementCenter = calcCenter(refTitle);
        const viewportCenter = window.innerHeight / 2;

        if (elementCenter <= viewportCenter) {
            return 1;
        } else {
            const distanceToCenter = Math.abs(elementCenter - viewportCenter);
            return Math.max(0, 1 - distanceToCenter / viewportCenter);
        }
    });

    const opacityDescription = useTransform(scrollYProgress, value => {
        const elementCenter = calcCenter(refDescription);
        const viewportCenter = window.innerHeight / 2;
        if (elementCenter <= viewportCenter) {
            return 1;
        } else {
            const distanceToCenter = Math.abs(elementCenter - viewportCenter);
            return Math.max(0, 1 - distanceToCenter / viewportCenter);
        }
    });

    const [refFirstBlock1, inViewFirstBlock1, entryFirstBlock1] = useInView({
        triggerOnce: false,
        threshold: 1,
    });
    const [refFirstBlock2, inViewFirstBlock2, entryFirstBlock2] = useInView({
        triggerOnce: false,
        threshold: 1,
    });
    const [refFirstBlock3, inViewFirstBlock3, entryFirstBlock3] = useInView({
        triggerOnce: false,
        threshold: 1,
    });

    const updateHeight = () => {
        const boundingClientRect1 = entryFirstBlock1 ? entryFirstBlock1?.boundingClientRect : { top: 0, height: 0 }
        const boundingClientRect2 = entryFirstBlock2 ? entryFirstBlock2?.boundingClientRect : { top: 0, height: 0 }
        const boundingClientRect3 = entryFirstBlock3 ? entryFirstBlock3?.boundingClientRect : { top: 0, height: 0 }

        const windowHeight = window.innerHeight;
        const windowCenter = windowHeight / 2;
        const rect1 = boundingClientRect1;
        const elemCenter1 = rect1.top + rect1.height / 2 - 350;

        const rect2 = boundingClientRect2;
        const elemCenter2 = rect2.top + rect2.height / 2 - 350;

        const rect3 = boundingClientRect3;
        const elemCenter3 = rect3.top + rect3.height / 2 - 350;
        
        if (elemCenter3 < windowCenter) {
            blockControls1.start({ height: '199px', transition: { duration: 0.5, } })
            blockControls2.start({ height: '199px', transition: { duration: 0.5, } })
            blockControls3.start({ height: '199px', transition: { duration: 0.5, } })
            setInfoTitles({
                first: true,
                second: true,
                third: true,
            })

        } else if (elemCenter2 < windowCenter) {
            blockControls1.start({ height: '199px', transition: { duration: 0.5, } })
            blockControls2.start({ height: '199px', transition: { duration: 0.5, } })
            blockControls3.start({ height: '0', transition: { duration: 0.2, } })
            setInfoTitles({
                first: true,
                second: true,
                third: false,
            })
        } else if (elemCenter1 < windowCenter) {
            blockControls1.start({ height: '199px', transition: { duration: 0.5, } })
            blockControls2.start({ height: '0', transition: { duration: 0.2, } })
            blockControls3.start({ height: '0', transition: { duration: 0.2, } })
            setInfoTitles({
                first: true,
                second: false,
                third: false,
            })
        } else {
            blockControls1.start({ height: '0', transition: { duration: 0.2, } })
            blockControls2.start({ height: '0', transition: { duration: 0.2, } })
            blockControls3.start({ height: '0', transition: { duration: 0.2, } })
            setInfoTitles({
                first: false,
                second: false,
                third: false,
            })
        }
    };

    useEffect(() => {
            updateHeight()
    }, [entryFirstBlock1, entryFirstBlock2, entryFirstBlock3, inViewFirstBlock1, inViewFirstBlock2, inViewFirstBlock3])

    const controlsBottom = useAnimation();
    const controlsBottomSlider = useAnimation();
    const [ref, inView, entry] = useInView({
        triggerOnce: false,
        threshold: 1,
    });

    useEffect(() => {
        if (inView) {
            controlsBottom.start('visible');
            controlsBottomSlider.start('visible');
        } else {
            if (entry && entry.boundingClientRect.top < window.innerHeight) {
                controlsBottom.start('hidden');
                controlsBottomSlider.start('hidden');
            }
        }
    }, [controlsBottom, inView, entry]);

    return (
        <div className={styles.container}>
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
                    ref={refTitle}
                    style={{
                        opacity,
                        translateY,
                    }}
                >
                    <div>How to play & Earn</div>
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
                ref={refDescription}
                style={{
                    opacity: opacityDescription,
                    translateY: descriptionTranslateY,
                }}
                className={styles.subTitle}
            >
                Partake in our airdrop competition and win millions of $NITE token!
            </motion.div>

            <div className={styles.mainBlock} ref={refFirstBlock1}>
                <motion.div
                    animate={blockControls1}

                    initial={{ height: '0' }}
                    transition={{ duration: 0.5 }}
                    className={styles.infoBlockContainer}>
                    <div className={styles.infoBlock}>
                        <div className={`${styles.line} ${styles.lineTop}`} />
                        <div className={styles.round}>1</div>
                        <div className={styles.textBlock}>
                            {infoTitles.first &&
                                <div className={styles.title}>
                                    <Typewriter classname="titleOrange" text="Buy" time={200} delay={100} />
                                    <Typewriter classname="titleWhite" text="$NITE" time={300} delay={300} />
                                </div>
                            }
                            <div className={styles.description}>Nites are used to power the blocknite ecosystem, from buying and selling items to activating Soul Stones.</div>
                        </div>
                        <div className={`${styles.line} ${styles.lineBottom}`} />
                        <div className={styles.leftBorder} />
                    </div>
                </motion.div>
            </div>
            <div className={styles.mainBlock} ref={refFirstBlock2}>
                <motion.div
                    animate={blockControls2}

                    initial={{ height: '0' }}
                    transition={{ duration: 0.5 }}
                    className={styles.infoBlockContainer}>
                    <div className={styles.infoBlock}>
                        <div className={`${styles.line} ${styles.lineTop}`} />
                        <div className={styles.round}>2</div>
                        <div className={styles.textBlock}>
                            {infoTitles.second &&
                                <div className={styles.title}>
                                    <Typewriter classname="titleOrange" text="Get a" time={200} delay={100} />
                                    <Typewriter classname="titleWhite" text="Treanin" time={300} delay={300} />
                                </div>
                            }
                            <div className={styles.description}>Treanin are created when you activate a Soul Stone, you can also buy them from players at the marketplace.</div>
                        </div>
                        <div className={`${styles.line} ${styles.lineBottom}`} />
                        <div className={styles.leftBorder} />
                    </div>
                </motion.div>
            </div>
            <div className={styles.mainBlock} ref={refFirstBlock3}>
                <motion.div
                    animate={blockControls3}

                    initial={{ height: '0' }}
                    transition={{ duration: 0.5 }}
                    className={styles.infoBlockContainer}>
                    <div className={styles.infoBlock}>
                        <div className={`${styles.line} ${styles.lineTop}`} />
                        <div className={styles.round}>3</div>
                        <div className={styles.textBlock}>
                            {infoTitles.third &&
                                <div className={styles.title}>
                                    <Typewriter classname="titleOrange" text="Fight & " time={300} delay={100} />
                                    <Typewriter classname="titleWhite" text="earn!" time={200} delay={400} />
                                </div>
                            }
                            <div className={styles.description}>Battle Orgurin monsters at the battlegrounds, with new features such as boss fights and PVP coming soon.</div>
                        </div>
                        <div className={`${styles.line} ${styles.lineBottom}`} />
                        <div className={styles.leftBorder} />
                    </div>
                </motion.div>
            </div>
            <div
                ref={ref}
                className={styles.bottomContainer}>
                <motion.img
                    src='/icons/decorations.svg'

                    initial="hidden"
                    animate={controlsBottom}
                    variants={{
                        hidden: { opacity: 0, marginLeft: '-200px' },
                        visible: {
                            opacity: 1,
                            marginLeft: '0',
                            transition: { duration: 0.5 }
                        }
                    }}
                />
                <motion.div className={styles.carouselContainer}
                    initial="hidden"
                    animate={controlsBottomSlider}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { duration: 0.5 }
                        }
                    }}
                >
                    <Slider {...settings}>
                        {items.map((item, index) =>
                            <div key={index} className={styles.swiperElement}>
                                <div className={styles.swiperElementText}>
                                    {item.text}
                                </div>
                            </div>
                        )}
                    </Slider>
                </motion.div>
            </div>
        </div>
    );
};
