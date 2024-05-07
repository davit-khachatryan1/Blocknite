import { screens } from '../../constants/screens';
import AltarinText from '../AnimatedText'
import styles from './style.module.scss'
import { useStateProvider } from '../../context/state';

export const NavBar = () => {
    const { page, updatePage } = useStateProvider();
    const scrollTo = (id: string, type: ScrollBehavior = 'smooth') => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: type,
                block: 'start'
            });
            updatePage(id)
        }
    }

    return (
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
    );
};
