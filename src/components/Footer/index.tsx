import styles from './style.module.scss';

export const Footer = () => {
    return (
        <div className={styles.container}>
            <img src="/logos/blocknite.png" alt="" className={styles.logo} />
            <img src="/logos/fantasy.png" alt="" className={styles.fantasy} />
            <div className={styles.socialSites}>
                <img src="/icons/telegram.svg" alt="telegram" />
                <img src="/icons/twitter.svg" alt="twitter" />
                <img src="/icons/youtube.svg" alt="youtube" />
                <img src="/icons/Dextools.svg" alt="Dextools" />
                <img src="/icons/Coingecko.svg" alt="Coingecko" />
                <img src="/icons/Radium.svg" alt="Radium" />
            </div>
            <div className={styles.info}>
                <div className={styles.support}>
                    Contact us:
                    <a href='href="mailto:support@blocknite.io"'>support@blocknite.io</a>
                </div>
                <div>Copyright © 2024 Blocknite. All rights reserved.</div>
            </div>
        </div>
    );
};
