import { motion, useAnimation } from 'framer-motion';
import { lazy, memo, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import { calcVW } from '../../utils/hooks/functions';
import { useStateProvider } from '../../context/state';

import styles from './style.module.scss';

const TitleBlock = lazy(() => import("../TitleBlock"));
const TypeWriter = lazy(() => import("../TypeWriter"));

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    prevArrow: <img src='/icons/arrow-right-slider.svg' alt="Next" />,
    nextArrow: <></>
};

const settingsMobile = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <img src='/icons/arrow-right-slider.svg' alt="Next" />,
    prevArrow: <img src='/icons/arrow-left-slider.svg' alt="Next" />
};

const items = [
    { id: '1', text: 'Forge Manna Stones at the Arcane Forge that power your Blocknite experience.' },
    { id: '2', text: 'Raise an army of Treanin through the Manna Nexus, fuse Treanin together and customise them to perfection.' },
    { id: '3', text: 'Battle the Orgurin grunts and level up your Treanin, getting bonus rewards. Are you brave enough to take on the Orgurin boss?' },
    { id: '4', text: 'Buy and sell Treanin & Manna Stones at the marketplace.' },
    { id: '5', text: 'Participate in the Blocknite community & devise the best strategies for maximising rewards.' },
];

const ThirdScreen = () => {
    const { scrolling, windowWidth, windowHeight } = useStateProvider();
    const [infoTitles, setInfoTitles] = useState({
        first: false,
        second: false,
        third: false,
    });

    const blockControls1 = useAnimation();
    const blockControls2 = useAnimation();
    const blockControls3 = useAnimation();

    const [refFirstBlock1, inViewFirstBlock1] = useInView({
        triggerOnce: false,
        threshold: 1,
    });
    const [refFirstBlock2, inViewFirstBlock2] = useInView({
        triggerOnce: false,
        threshold: 1,
    });
    const [refFirstBlock3, inViewFirstBlock3] = useInView({
        triggerOnce: false,
        threshold: 1,
    });

    const updateHeight = () => {
        let obj = { ...infoTitles };
        if (inViewFirstBlock3) {
            blockControls3.start({ height: calcVW('199px', windowWidth), transition: { duration: 0.5 } });
            obj.third = true;
        }
        if (inViewFirstBlock2) {
            blockControls2.start({ height: calcVW('199px', windowWidth), transition: { duration: 0.5 } });
            obj.second = true;
        }
        if (inViewFirstBlock1) {
            blockControls1.start({ height: calcVW('199px', windowWidth), transition: { duration: 0.5 } });
            obj.first = true;
        }
        setInfoTitles(obj);
    };

    useEffect(() => {
        if (windowWidth > 576) {
            if (!scrolling) {
                updateHeight();
            }
        }
    }, [inViewFirstBlock1, inViewFirstBlock2, inViewFirstBlock3, scrolling, windowWidth]);

    const controlsBottom = useAnimation();
    const controlsBottomSlider = useAnimation();
    const [ref, inView, entry] = useInView({
        triggerOnce: false,
        threshold: 1,
    });

    useEffect(() => {
        if (!scrolling) {
            if (inView) {
                controlsBottom.start('visible');
                controlsBottomSlider.start('visible');
            }
        }
    }, [controlsBottom, inView, entry, scrolling, windowHeight]);

    return (
        <div className={styles.container}>
            <TitleBlock title="How to play & Earn" description="Partake in our airdrop competition and win millions of $NITE token!" mobileClassName={windowWidth <= 576} />
            <div className={`${styles.mainBlock} ${styles.desktop}`} ref={refFirstBlock1}>
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
                                    <TypeWriter classname="titleOrange" text="Buy" time={200} delay={100} />
                                    <TypeWriter classname="titleWhite" text="$NITE" time={300} delay={300} />
                                </div>
                            }
                            <div className={styles.description}>Nites are used to power the blocknite ecosystem, from buying and selling items to activating Soul Stones.</div>
                        </div>
                        <div className={`${styles.line} ${styles.lineBottom}`} />
                        <div className={styles.leftBorder} />
                    </div>
                </motion.div>
            </div>
            <div className={`${styles.mainBlock} ${styles.desktop}`} ref={refFirstBlock2}>
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
                                    <TypeWriter classname="titleOrange" text="Get a" time={200} delay={100} />
                                    <TypeWriter classname="titleWhite" text="Treanin" time={300} delay={300} />
                                </div>
                            }
                            <div className={styles.description}>Treanin are created when you activate a Soul Stone, you can also buy them from players at the marketplace.</div>
                        </div>
                        <div className={`${styles.line} ${styles.lineBottom}`} />
                        <div className={styles.leftBorder} />
                    </div>
                </motion.div>
            </div>
            <div className={`${styles.mainBlock} ${styles.desktop}`} ref={refFirstBlock3}>
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
                                    <TypeWriter classname="titleOrange" text="Fight & " time={300} delay={100} />
                                    <TypeWriter classname="titleWhite" text="earn!" time={200} delay={400} />
                                </div>
                            }
                            <div className={styles.description}>Battle Orgurin monsters at the battlegrounds, with new features such as boss fights and PVP coming soon.</div>
                        </div>
                        <div className={`${styles.line} ${styles.lineBottom}`} />
                        <div className={styles.leftBorder} />
                    </div>
                </motion.div>
            </div>
            {windowWidth <= 576 &&
                <Slider {...settingsMobile} className={styles.mobileSlider} afterChange={(e) => {
                    const obj = { first: false, second: false, third: false };
                    if (e === 0) {
                        obj.first = true;
                    } else if (e === 1) {
                        obj.second = true;
                    } else {
                        obj.third = true;
                    }
                    setInfoTitles(obj);
                }}>
                    <div className={styles.mainBlock}>
                        <div
                            className={styles.infoBlockContainer}>
                            <div className={styles.infoBlock}>
                                <div className={`${styles.line} ${styles.lineTop}`} />
                                <div className={styles.round}>1</div>
                                <div className={styles.textBlock}>
                                    <div className={styles.title}>
                                        {infoTitles.first &&
                                            <TypeWriter classname="titleOrange" text="Buy" time={200} delay={100} />
                                        }
                                        {infoTitles.first &&
                                            <TypeWriter classname="titleWhite" text="$NITE" time={300} delay={300} />
                                        }
                                    </div>
                                    <div className={styles.description}>Nites are used to power the blocknite ecosystem, from buying and selling items to activating Soul Stones.</div>
                                </div>
                                <div className={`${styles.line} ${styles.lineBottom}`} />
                                <div className={styles.leftBorder} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.mainBlock}>
                        <div
                            className={styles.infoBlockContainer}>
                            <div className={styles.infoBlock}>
                                <div className={`${styles.line} ${styles.lineTop}`} />
                                <div className={styles.round}>2</div>
                                <div className={styles.textBlock}>
                                    <div className={styles.title}>
                                        {infoTitles.second &&
                                            <TypeWriter classname="titleOrange" text="Get a" time={200} delay={100} />
                                        }
                                        {infoTitles.second &&
                                            <TypeWriter classname="titleWhite" text="Treanin" time={300} delay={300} />
                                        }
                                    </div>
                                    <div className={styles.description}>Treanin are created when you activate a Soul Stone, you can also buy them from players at the marketplace.</div>
                                </div>
                                <div className={`${styles.line} ${styles.lineBottom}`} />
                                <div className={styles.leftBorder} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.mainBlock}>
                        <div
                            className={styles.infoBlockContainer}>
                            <div className={styles.infoBlock}>
                                <div className={`${styles.line} ${styles.lineTop}`} />
                                <div className={styles.round}>3</div>
                                <div className={styles.textBlock}>
                                    <div className={styles.title}>
                                        {infoTitles.third &&
                                            <TypeWriter classname="titleOrange" text="Fight & " time={300} delay={100} />
                                        }
                                        {infoTitles.third &&
                                            <TypeWriter classname="titleWhite" text="earn!" time={200} delay={400} />
                                        }
                                    </div>
                                    <div className={styles.description}>Battle Orgurin monsters at the battlegrounds, with new features such as boss fights and PVP coming soon.</div>
                                </div>
                                <div className={`${styles.line} ${styles.lineBottom}`} />
                                <div className={styles.leftBorder} />
                            </div>
                        </div>
                    </div>
                </Slider>
            }

            <div
                ref={ref}
                className={styles.bottomContainer}>
                <motion.img
                    className={styles.decorations}
                    src='/icons/decorations.svg'
                    initial="hidden"
                    animate={controlsBottom}
                    variants={{
                        hidden: { opacity: 0, marginLeft: calcVW('-200px', windowWidth) },
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

export default memo(ThirdScreen)
