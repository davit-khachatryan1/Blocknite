import { memo, useEffect, useState, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import { motion, useAnimation } from 'framer-motion';
import { calcVW } from '../../utils/hooks/functions';
import { useStateProvider } from '../../context/state';
import right from '../../public/icons/arrow-right-slider.svg'
import left from '../../public/icons/arrow-left-slider.svg'
import mapLeft from '../../public/icons/map-line.svg'
import styles from './style.module.scss';
import Image from 'next/image';
import useWindowSize from '@/utils/hooks/useWindowSize';
import dynamic from 'next/dynamic';

const RoadMapCard = dynamic(() => import('../RoadMapCard'));
const RoadMapText = dynamic(() => import('../RoadMapText'));

const FifthScreen = () => {
    const { scrolling } = useStateProvider();
    const { windowWidth } = useWindowSize()
    const [started, setStarted] = useState(false);
    const titleControls = useAnimation();
    const lineControls = useAnimation();
    const titleImgControls = useAnimation();
    const [titleRef, inViewTitle] = useInView({ triggerOnce: false });
    const [mobileMapRef, inViewMobileMap] = useInView({ triggerOnce: false });

    const sliderSettings = useMemo(() => ({
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: inViewMobileMap,
        autoplaySpeed: 7000,
        nextArrow: <Image src={right} loading='lazy' alt="Next" />,
        prevArrow: <Image src={left} loading='lazy' alt="Previous" />,
    }), [inViewMobileMap]);

    const animationRefs = [useInView({ triggerOnce: false, threshold: 1 }), useInView({ triggerOnce: false, threshold: 1 }), useInView({ triggerOnce: false, threshold: 1 }), useInView({ triggerOnce: false, threshold: 1 })];

    useEffect(() => {
        if (!scrolling) {
            if (inViewTitle) {
                titleControls.start('visible');
                titleImgControls.start('visible');
            }
        }
    }, [inViewTitle, scrolling, titleControls, titleImgControls]);

    useEffect(() => {
        if (!scrolling) {
            const anyInView = animationRefs.some(([_, inView]) => inView);
            if (anyInView && !started) {
                setStarted(true);
                lineControls.start({
                    height: [calcVW('60px', windowWidth), calcVW('191px', windowWidth), calcVW('398px', windowWidth), calcVW('553px', windowWidth), calcVW('732px', windowWidth)],
                    transition: {
                        duration: 2,
                        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                        ease: "easeInOut",
                        delay: 0.2
                    }
                });
            }
        }
    }, [animationRefs, scrolling, started, lineControls, windowWidth]);

    return (
        <div className={styles.container} ref={titleRef}>
            <div className={styles.titleBlock}>
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
                    {animationRefs.slice(0, 2).map(([ref, inView], i) => (
                        <div key={i} className={styles.oneBlock} ref={ref}>
                            <RoadMapCard title={i === 0 ? 'Pre-Launch' : 'Activation'}
                                isAnimate={inView} duration={0.2} delay={i * 1.2} />
                            <div className={styles.info}>
                                <RoadMapText
                                    isAnimate={inView}
                                    duration={0.2}
                                    delay={i * 1.2 + 0.2}
                                    texts={i === 0 ? [
                                        'Launch social medias',
                                        'Develop the Blocknite landing page & dapp',
                                        'Create listing on PinkSale',
                                        'Audit & launch our smart contracts'
                                    ] : [
                                        'Launch on PancakeSwap & CoinGecko',
                                        'Launch our innovative dapp!',
                                        'Kick-off our gaming ecosystem with Treanin creation',
                                        'Begin airdrop competition'
                                    ]}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <motion.div className={styles.lineBlock}
                    animate={lineControls}
                    initial={{ height: '0' }}
                >
                    <Image src={mapLeft} alt="line" className={styles.mainLine} loading='lazy' />
                </motion.div>
                <div className={styles.infoElement}>
                    {animationRefs.slice(2).map(([ref, inView], i) => (
                        <div key={i + 2} className={styles.oneBlock} ref={ref}>
                            <RoadMapCard title={i === 0 ? 'Launch' : 'Enrichment'} right={true}
                                isAnimate={inView} duration={0.2} delay={i * 1.2 + 0.6} />
                            <div className={styles.info}>
                                <RoadMapText
                                    isAnimate={inView}
                                    duration={0.2}
                                    delay={i * 1.2 + 0.8}
                                    right={true}
                                    texts={i === 0 ? [
                                        'Launch our Trailer & socials',
                                        'Contact influencers',
                                        'Create listing on PinkSale',
                                        'Select presale whitelist from our community'
                                    ] : [
                                        'Add new items (FuseStone, NameStone..)',
                                        'Add new Orgurin enemies',
                                        'Add amazing boss fights',
                                        'Discuss listing with CEXs',
                                        'Grow team to add more features'
                                    ]}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.mapMobile} ref={mobileMapRef}>
                <Slider {...sliderSettings}>
                    {['Pre-Launch', 'Launch', 'Activation', 'Enrichment'].map((title, i) => (
                        <div key={i} className={styles.cardMobile}>
                            <RoadMapCard title={title} first={i === 0 ? 'first-short' : i === 3 ? 'last-short' : 'long'} />
                            <div className={styles.info}>
                                <RoadMapText
                                    right={i % 2 === 1}
                                    texts={i === 0 ? [
                                        'Launch social medias',
                                        'Develop the Blocknite landing page & dapp',
                                        'Create listing on PinkSale',
                                        'Audit & launch our smart contracts'
                                    ] : i === 1 ? [
                                        'Launch our Trailer & socials',
                                        'Contact influencers',
                                        'Create listing on PinkSale',
                                        'Select presale whitelist from our community'
                                    ] : i === 2 ? [
                                        'Launch on PancakeSwap & CoinGecko',
                                        'Launch our innovative dapp!',
                                        'Kick-off our gaming ecosystem with Treanin creation',
                                        'Begin airdrop competition'
                                    ] : [
                                        'Add new items (FuseStone, NameStone..)',
                                        'Add new Orgurin enemies',
                                        'Add amazing boss fights',
                                        'Discuss listing with CEXs',
                                        'Grow team to add more features'
                                    ]}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default memo(FifthScreen);
