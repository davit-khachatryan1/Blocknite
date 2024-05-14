import { motion } from 'framer-motion';
import { Button } from '../Button';
import Typewriter from '../TypeWriter';
import { calcVW } from '../../utils/hooks/functions';

import styles from './style.module.scss'
import { useState } from 'react';
import { useStateProvider } from '../../context/state';

export const MainScreen = () => {
    const { setOpenMenu, windowWidth } = useStateProvider();
    const [active, setActive] = useState('$NITE address');

    return (
        <div className={styles.container}>
            <div className={`${styles.menu}`}>
                <img src="/icons/menu-open.svg" alt="menu" className={styles.menuOpenIcon} onClick={() => setOpenMenu(true)}/>
            </div>

            <div className={styles.infoBlock}>
                <motion.img
                    className={styles.logo}
                    src="/logos/logo.png"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 0, x: 0, scale: 0 },
                        visible: { opacity: 1, y: 0, x: 0, scale: 1 },
                    }}
                    transition={{ duration: 0.7 }}
                />
                <Typewriter text="ALTARIN" classname="altarin" />
                <motion.hr
                    className={styles.line}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.7, delay: 1 }}
                    variants={{
                        hidden: { width: '0' },
                        visible: { width: '100%' },
                    }} />
                <Typewriter text="Defend your home" classname="name" delay={1000} />
                <motion.hr
                    className={styles.line}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.7, delay: 1 }}
                    variants={{
                        hidden: { width: '0' },
                        visible: { width: '100%' },
                    }} />
                <motion.div
                    className={styles.description}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 1.5 }}
                    variants={{
                        hidden: { opacity: 1, y: 0, x: 0, scale: 1, height: 0 },
                        visible: { opacity: 1, y: 0, x: 0, scale: 1, height: calcVW('35px', windowWidth) },
                    }}
                >
                    Stop the Orgurin, The fate of Trea is in your hands.
                </motion.div>
                <div className={styles.mainButtons}>
                    <motion.div
                        className={styles.presale}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 2 }}
                        variants={{
                            hidden: { opacity: 1, y: 0, x: 0, scale: 1, height: 0 },
                            visible: { opacity: 1, y: 0, x: 0, scale: 1, height: calcVW('70px', windowWidth) },
                        }}
                    >
                        <Button withIcon={true}>PRESALE</Button>
                    </motion.div>

                    <motion.div
                        className={`${styles.documentation}`}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 2 }}
                        variants={{
                            hidden: { opacity: 1, y: 0, x: 0, scale: 1, height: 0 },
                            visible: { opacity: 1, y: 0, x: 0, scale: 1, height: calcVW('70px', windowWidth) },
                        }}
                    >
                        <Button buttonIcon={true}>GITBOOK</Button>
                    </motion.div>
                </div>
            </div>

            <div className={styles.buttonContainer}>
                <motion.div
                    className={styles.twoButtonMain}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 2.5 }}
                    variants={{
                        hidden: { opacity: 1, y: 0, x: 0, scale: 1, height: 0 },
                        visible: { opacity: 1, y: 0, x: 0, scale: 1, height: calcVW('50px', windowWidth) },
                    }}
                >
                    <div className={styles.twoButton}>
                        <Button classname={active === '$NITE address' && "active"} onClick={() => setActive('$NITE address')}>$NITE address</Button>
                        <Button classname={active === 'Treanin address' && "active"} onClick={() => setActive('Treanin address')}>Treanin address</Button>
                    </div>
                </motion.div>
                <motion.div
                    className={styles.twoButtonMain}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 2.5 }}
                    variants={{
                        hidden: { opacity: 1, y: 0, x: 0, scale: 1, height: 0 },
                        visible: { opacity: 1, y: 0, x: 0, scale: 1, height: calcVW('50px', windowWidth) },
                    }}
                >
                    <div className={`${styles.twoButton} ${styles.copyBlock}`}>
                        <div className={styles.copy}
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    active === '$NITE address' ?
                                        '0x123456789aBcDeF1234567890aBcDeF1234567890' :
                                        '0x123456789aBcDeF1234567890aBcDeF1234567890'
                                )}>
                            <div className={styles.square} />
                            <div className={styles.square} />
                        </div>
                        <div>
                            0x123456789aBcDeF1234567890aBcDeF1234567890
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
