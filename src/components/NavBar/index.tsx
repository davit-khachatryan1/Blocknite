import AltarinText from '../AnimatedText'
import styles from './style.module.scss'

const navElements = ['Home', 'Trailer', 'How it works', 'Tokenomics', 'Roadmap', 'FAQ']

export const NavBar = () => {
    return (
        <div className={styles.container}>
            {navElements.map((el, index) =>
                <AltarinText index={index}>
                    <div className={`${styles.navElement} ${index == 0 && styles.active}`}>
                        {el}
                        <div className={styles.round} />
                    </div>
                </AltarinText>
            )}
        </div>
    );
};
