import { lazy, memo, useEffect, useState, useCallback, useMemo, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { calcVW } from '../../utils/hooks/functions';
import { useStateProvider } from '../../context/state';

import styles from './style.module.scss';

const TypeWriter = lazy(() => import("../TypeWriter"));
const Button = lazy(() => import("../Button"));

const useScrollDeltaY = () => {
    const [scrollData, setScrollData] = useState({ deltaY: 0, scrollTop: 0 });
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const handleScroll = useCallback(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const deltaY = scrollTop - lastScrollTop;
        setScrollData({ deltaY, scrollTop });
        setLastScrollTop(scrollTop);
    }, [lastScrollTop]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        const initialScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setLastScrollTop(initialScrollTop);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return scrollData;
};

const MainScreen = () => {
    const { setOpenMenu, windowWidth } = useStateProvider();
    const [active, setActive] = useState('$NITE address');
    const { deltaY, scrollTop } = useScrollDeltaY();

    const menuStyle: CSSProperties = useMemo(() => ({
        ...(deltaY < 0 ? {
            transition: '0.2s',
            opacity: 1,
            position: 'fixed',
            top: 0,
            right: 0,
            zIndex: 10,
        } : scrollTop > (calcVW(100, windowWidth, 100) as number) ? {
            transition: '0.2s',
            opacity: 0,
            position: 'fixed',
            top: 0,
            right: 0,
            zIndex: 10,
        } : {})
    }), [deltaY, scrollTop, windowWidth]);

    const handleMenuClick = useCallback(() => {
        setOpenMenu(true);
    }, [setOpenMenu]);

    const handleCopy = useCallback(() => {
        const address = active === '$NITE address'
            ? '0x123456789aBcDeF1234567890aBcDeF1234567890'
            : '0x123456789aBcDeF1234567890aBcDeF1234567890';
        navigator.clipboard.writeText(address);
    }, [active]);

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <img
                    src="/icons/menu-open.svg"
                    alt="menu"
                    className={styles.menuOpenIcon}
                    onClick={handleMenuClick}
                    style={menuStyle}
                    loading="lazy"
                />
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
                <TypeWriter text="ALTARIN" classname="altarin" />
                <motion.hr
                    className={styles.line}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.7, delay: 1 }}
                    variants={{
                        hidden: { width: '0' },
                        visible: { width: '100%' },
                    }}
                />
                <TypeWriter text="Defend your home" classname="name" delay={1000} />
                <motion.hr
                    className={styles.line}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.7, delay: 1 }}
                    variants={{
                        hidden: { width: '0' },
                        visible: { width: '100%' },
                    }}
                />
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
                        className={styles.documentation}
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
                        <div className={styles.copy} onClick={handleCopy}>
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

export default memo(MainScreen);