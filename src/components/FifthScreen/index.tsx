import { motion, useAnimation } from 'framer-motion';
import styles from './style.module.scss'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { RoadMapCard } from '../RoadMapCard';
import { RoadMapText } from '../RoadMapText';

export const FifthScreen = () => {

    const titleControls = useAnimation();
    const lineControls = useAnimation();
    const titleImgControls = useAnimation();
    const [titleRef, inViewTitle] = useInView({
        triggerOnce: false,
    });
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
        if (inViewTitle) {
            titleControls.start('visible');
            titleImgControls.start('visible');
        } else {
            titleControls.start('hidden');
            titleImgControls.start('hidden');
        }
    }, [inViewTitle])


    useEffect(() => {
        if (inViewTitle4) {
            lineControls.stop()
            lineControls.start({
                height: '732px',
                transition: { duration: 0.5 }
            })
        } else if (inViewTitle3) {
            lineControls.stop()
            lineControls.start({
                height: '600px',
                transition: { duration: 0.5 }
            })

        } else if (inViewTitle2) {
            lineControls.stop()
            lineControls.start({
                height: '400px',
                transition: { duration: 0.5 }
            })
        } else if (inViewTitle1) {
            lineControls.stop()
            lineControls.start({
                height: '200px',
                transition: { duration: 0.5 }
            })
        }

    }, [inViewTitle1, inViewTitle2, inViewTitle3, inViewTitle4])

    return (
        <div className={styles.container}>
            <div
                ref={titleRef}
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
                                width: 'auto', height: 'auto',
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
                                width: 'auto', height: 'auto',
                                transition: { duration: 0.3, delay: 0.8 }
                            }
                        }} />
                </motion.div>
            </div>
            <div className={styles.map}>
                <div className={styles.infoElement}>
                    <div className={styles.oneBlock} ref={lineControls1}>
                        <RoadMapCard title='Pre-Launch' />
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
                    <div className={styles.oneBlock} ref={lineControls3}>
                        <RoadMapCard title='Activation' />
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
                </div>
                <motion.div className={styles.lineBlock}
                    animate={lineControls}
                    initial={{ height: '0' }}
                >
                    <img src="/icons/map-line.svg" alt="line" className={styles.mainLine} />
                </motion.div>
                <div className={styles.infoElement} >
                    <div className={styles.oneBlock} ref={lineControls2}>
                        <RoadMapCard title='Launch' right={true} />
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
                    <div className={styles.oneBlock} ref={lineControls4}>
                        <RoadMapCard title='Enrichment' right={true} />
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
                </div>
            </div>
        </div >
    );
};
