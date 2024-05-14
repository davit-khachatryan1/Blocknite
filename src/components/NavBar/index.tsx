import { screens } from '../../constants/screens';
import AltarinText from '../AnimatedText'
import styles from './style.module.scss'
import { useStateProvider } from '../../context/state';

export const NavBar = () => {
    const { page, updatePage, setOpenMenu, open } = useStateProvider();
    const scrollTo = (id: string, type: ScrollBehavior = 'smooth') => {
        const element = document.getElementById(id);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({
                    behavior: type,
                    block: 'center'
                });
            }, 100)
            updatePage(id)
        }
    }

    return (
        <>
            <div className={`${styles.menu} ${open && styles.menuOpen}`}>
                <div className={styles.menuHeader}>
                    <img src="/logos/logo.png" alt="logo" className={styles.logo} />
                    <img src="/icons/menu-close.svg" alt="menu" className={styles.menuOpenIcon} onClick={() => setOpenMenu(false)} />
                </div>
                <div>
                    {screens.map((el, index) =>
                        <div key={index} className={`${styles.navElement} ${el.id === page && styles.active}`}
                            onClick={() => {
                                setOpenMenu(false);
                                scrollTo(el.id)
                            }}>
                            {el.name}
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.container}>

                {screens.map((el, index) =>
                    <AltarinText index={index} key={index}>
                        <div className={`${styles.navElement} ${el.id === page && styles.active}`} onClick={() => scrollTo(el.id)}>
                            {el.name}
                            <div className={styles.round} />
                        </div>
                    </AltarinText>
                )}
            </div>
        </>
    );
};
