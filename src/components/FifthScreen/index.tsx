import { lazy, memo, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import { motion, useAnimation } from 'framer-motion';
import { calcVW } from '../../utils/hooks/functions';
import { useStateProvider } from '../../context/state';

import styles from './style.module.scss'

const RoadMapCard = lazy(() => import('../RoadMapCard'));
const RoadMapText = lazy(() => import('../RoadMapText'));

const FifthScreen = () => {
    const { scrolling, windowWidth } = useStateProvider();
    const [started, setStarted] = useState(false);
    const [settings, setSettings] = useState({
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 7000,
        nextArrow: <img src='/icons/arrow-right-slider.svg' />,
        prevArrow: <img src='/icons/arrow-left-slider.svg' />,
    });

    const titleControls = useAnimation();
    const lineControls = useAnimation();
    const titleImgControls = useAnimation();
    const [titleRef, inViewTitle] = useInView({
        triggerOnce: false,
    });

    const [mobileMap, inViewMobileMap] = useInView({
        triggerOnce: false,
    });

    useEffect(() => {
        if (inViewMobileMap) {
            setSettings({
                ...settings,
                autoplay: true,
            })
        } else {
            setSettings({
                ...settings,
                autoplay: false,
            })
        }
    }, [inViewMobileMap])

    const [lineControls1, inViewTitle1] = useInView({
        triggerOnce: false,
        threshold: 1,
    });
    const [lineControls2, inViewTitle2] = useInView({
        triggerOnce: false,
        threshold: 1,
    });
    const [lineControls3, inViewTitle3] = useInView({
        triggerOnce: false,
        threshold: 1,
    });
    const [lineControls4, inViewTitle4] = useInView({
        triggerOnce: false,
        threshold: 1,
    });

    useEffect(() => {
        if (!scrolling) {
            if (inViewTitle) {
                titleControls.start('visible');
                titleImgControls.start('visible');
            }
        }
    }, [inViewTitle, scrolling, titleRef])


    useEffect(() => {
        if (!scrolling) {
            if ((inViewTitle1 || inViewTitle2 || inViewTitle3 || inViewTitle4) && !started) {
                setStarted(true)
                lineControls.start({
                    height: [calcVW('60px', windowWidth), calcVW('191px', windowWidth), calcVW('191px', windowWidth), calcVW('398px', windowWidth), calcVW('398px', windowWidth), calcVW('553px', windowWidth), calcVW('553px', windowWidth), calcVW('732px', windowWidth)],
                    transition: {
                        duration: 2, // Total duration including delays
                        times: [0, 1 / 7, 2 / 7, 3 / 7, 4 / 7, 5 / 7, 6 / 7, 1], // Keyframe intervals
                        ease: "easeInOut",
                        delay: 0.2
                    }
                })
            }
        }
    }, [inViewTitle1, inViewTitle2, inViewTitle3, inViewTitle4, scrolling])

    return (
        <div className={styles.container} ref={titleRef}>
            <div
                className={styles.titleBlock}
            >
                <motion.div className={styles.title}
                    animate={titleControls}
                    initial={{ marginLeft: '-100%' }}
                    variants={{
                        hidden: { marginLeft: '-100%', opacity: 0 },
                        visible: {
                            marginLeft: "0",
                            opacity: 0.8,
                            transition: { duration: 0.8 }
                        }
                    }}>
                    <motion.img src="/icons/subtract.svg" alt="subtract" className={styles.iconTop}
                        animate={titleImgControls}
                        initial={{ marginLeft: '-100%' }}
                        variants={{
                            hidden: { width: '0', height: '0' },
                            visible: {
                                width: calcVW('34px', windowWidth), height: calcVW('34px', windowWidth),
                                transition: { duration: 0.3, delay: 0.8 }
                            }
                        }} />
                    Roadmap
                    <motion.img src="/icons/subtract.svg" alt="subtract" className={styles.iconBottom}
                        animate={titleImgControls}
                        initial={{ marginLeft: '-100%' }}
                        variants={{
                            hidden: { width: '0', height: '0' },
                            visible: {
                                width: calcVW('34px', windowWidth), height: calcVW('34px', windowWidth),
                                transition: { duration: 0.3, delay: 0.8 }
                            }
                        }} />
                </motion.div>
            </div>
            <motion.div className={styles.titleBlockMobile}
                ref={titleRef}
                animate={titleControls}
                initial="hidden"
                variants={{
                    hidden: { opacity: 0, transform: `translateY(${calcVW('-25px', windowWidth)})` },
                    visible: {
                        opacity: 1,
                        transform: 'translateY(0)',
                        transition: { duration: 0.8 }
                    }
                }}
            >
                Roadmap
            </motion.div>
            <div className={styles.map}>
                <div className={styles.infoElement}>
                    <div className={styles.oneBlock} ref={lineControls1}>
                        <RoadMapCard title='Pre-Launch' isAnimate={inViewTitle1 || inViewTitle2 || inViewTitle3 || inViewTitle4} duration={0.2} />
                        <div className={styles.info}>
                            <RoadMapText
                                isAnimate={inViewTitle1 || inViewTitle2 || inViewTitle3 || inViewTitle4}
                                duration={0.2}
                                delay={0.2}
                                texts={
                                    [
                                        'Launch social medias',
                                        'Develop the Blocknite landing page & dapp',
                                        'Create listing on PinkSale',
                                        'Audit & launch our smart contracts'
                                    ]
                                }
                            />
                        </div>
                    </div>
                    <div className={styles.oneBlock} ref={lineControls3}>
                        <RoadMapCard title='Activation'
                            isAnimate={inViewTitle1 || inViewTitle2 || inViewTitle3 || inViewTitle4} duration={0.2} delay={1.2}
                        />
                        <div className={styles.info}>
                            <RoadMapText
                                isAnimate={inViewTitle1 || inViewTitle2 || inViewTitle3 || inViewTitle4} duration={0.2} delay={1.4}

                                texts={
                                    [
                                        'Launch on PancakeSwap & CoinGecko',
                                        'Launch our innovative dapp!',
                                        'Kick-off our gaming ecosystem with Treanin creation',
                                        'Begin airdrop competition'
                                    ]
                                }
                            />
                        </div>
                    </div>
                </div>
                <motion.div className={styles.lineBlock}
                    animate={lineControls}
                    initial={{ height: '0' }}
                >
                    <img src="/icons/map-line.svg" alt="line" className={styles.mainLine} />
                </motion.div>
                <div className={styles.infoElement} >
                    <div className={styles.oneBlock} ref={lineControls2}>
                        <RoadMapCard title='Launch' right={true}
                            isAnimate={inViewTitle1 || inViewTitle2 || inViewTitle3 || inViewTitle4} duration={0.2} delay={0.6}
                        />
                        <div className={styles.info}>
                            <RoadMapText
                                isAnimate={inViewTitle1 || inViewTitle2 || inViewTitle3 || inViewTitle4} duration={0.2} delay={0.8}
                                right={true}
                                texts={
                                    [
                                        'Launch our Trailer & socials',
                                        'Contact influencers',
                                        'Create listing on PinkSale',
                                        'Select presale whitelist from our community'
                                    ]
                                }
                            />
                        </div>
                    </div>
                    <div className={styles.oneBlock} ref={lineControls4}>
                        <RoadMapCard title='Enrichment' right={true}
                            isAnimate={inViewTitle1 || inViewTitle2 || inViewTitle3 || inViewTitle4} duration={0.2} delay={1.8}

                        />
                        <div className={styles.info}>
                            <RoadMapText
                                isAnimate={inViewTitle1 || inViewTitle2 || inViewTitle3 || inViewTitle4} duration={0.2} delay={2}
                                right={true}
                                texts={
                                    [
                                        'Add new items (FuseStone, NameStone..)',
                                        'Add new Orgurin enemies',
                                        'Add amazing boss fights',
                                        'Discuss listing with CEXs',
                                        'Grow team to add more features'
                                    ]
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.mapMobile} ref={mobileMap}>
                <Slider {...settings}>
                    <div className={styles.cardMobile}>
                        <RoadMapCard title='Pre-Launch' first='first-short' />
                        <div className={styles.info}>
                            <RoadMapText
                                texts={
                                    [
                                        'Launch social medias',
                                        'Develop the Blocknite landing page & dapp',
                                        'Create listing on PinkSale',
                                        'Audit & launch our smart contracts'
                                    ]
                                }
                            />
                        </div>
                    </div>
                    <div className={styles.cardMobile}>
                        <RoadMapCard title='Launch' first='long' />
                        <div className={styles.info}>
                            <RoadMapText
                                right={true}
                                texts={
                                    [
                                        'Launch our Trailer & socials',
                                        'Contact influencers',
                                        'Create listing on PinkSale',
                                        'Select presale whitelist from our community'
                                    ]
                                }
                            />
                        </div>
                    </div>
                    <div className={styles.cardMobile}>
                        <RoadMapCard title='Activation' first='long' />
                        <div className={styles.info}>
                            <RoadMapText
                                texts={
                                    [
                                        'Launch on PancakeSwap & CoinGecko',
                                        'Launch our innovative dapp!',
                                        'Kick-off our gaming ecosystem with Treanin creation',
                                        'Begin airdrop competition'
                                    ]
                                }
                            />
                        </div>
                    </div>
                    <div className={styles.cardMobile}>
                        <RoadMapCard title='Enrichment' first='last-short' />
                        <div className={styles.info}>
                            <RoadMapText
                                right={true}
                                texts={
                                    [
                                        'Add new items (FuseStone, NameStone..)',
                                        'Add new Orgurin enemies',
                                        'Add amazing boss fights',
                                        'Discuss listing with CEXs',
                                        'Grow team to add more features'
                                    ]
                                }
                            />
                        </div>
                    </div>
                </Slider>
            </div>
        </div >
    );
};

export default memo(FifthScreen) 