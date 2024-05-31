import { lazy, memo, useCallback, useMemo } from 'react';
import styles from './style.module.scss';
import { useStateProvider } from '../../context/state';
import { screens } from '../../constants/screens';

const AltarinText = lazy(() => import('../AnimatedText'));

const NavBar = () => {
    const { page, updatePage, setOpenMenu, open } = useStateProvider();

    const scrollTo = useCallback((id: string, type: ScrollBehavior = 'smooth') => {
        const element = document.getElementById(id);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({
                    behavior: type,
                    block: 'center'
                });
            }, 100);
            updatePage(id);
        }
    }, [updatePage]);

    const handleMenuClose = useCallback(() => {
        setOpenMenu(false);
    }, [setOpenMenu]);

    const menuItems = useMemo(() => screens.map((el, index) => (
        <div
            key={index}
            className={`${styles.navElement} ${el.id === page && styles.active}`}
            onClick={() => {
                setOpenMenu(false);
                scrollTo(el.id);
            }}
        >
            {el.name}
        </div>
    )), [page, scrollTo, setOpenMenu]);

    const navItems = useMemo(() => screens.map((el, index) => (
        <AltarinText index={index} key={index}>
            <div
                className={`${styles.navElement} ${el.id === page && styles.active}`}
                onClick={() => scrollTo(el.id)}
            >
                {el.name}
                <div className={styles.round} />
            </div>
        </AltarinText>
    )), [page, scrollTo]);

    return (
        <>
            <div className={`${styles.menu} ${open && styles.menuOpen}`}>
                <div className={styles.menuHeader}>
                    <img src="/logos/logo.png" alt="logo" className={styles.logo} loading='lazy' />
                    <img src="/icons/menu-close.svg" alt="menu" className={styles.menuOpenIcon} onClick={handleMenuClose} loading='lazy' />
                </div>
                <div>{menuItems}</div>
            </div>
            <div className={styles.container}>{navItems}</div>
        </>
    );
};

export default memo(NavBar);