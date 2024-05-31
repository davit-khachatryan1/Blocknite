import { memo } from 'react';
import styles from './style.module.scss';

const socialSites = [
    { src: "/icons/telegram.svg", alt: "Telegram", url: "https://t.me/Blocknite" },
    { src: "/icons/twitter.svg", alt: "Twitter", url: "https://twitter.com/blockniteio" },
    { src: "/icons/youtube.svg", alt: "YouTube", url: "https://www.youtube.com/@Blocknite" },
    { src: "/icons/Dextools.svg", alt: "Dextools", url: "" },
    { src: "/icons/Coingecko.svg", alt: "Coingecko", url: "" },
    { src: "/icons/Radium.svg", alt: "Radium", url: "" }
];

const Footer: React.FC = () => {
    const openInNewTab = (url: string) => {
        if (url) {
            window.open(url, "_blank", "noreferrer");
        }
    };

    return (
        <div className={styles.container}>
            <img src="/logos/blocknite.png" alt="Blocknite Logo" className={styles.logo} loading="lazy" />
            <img src="/logos/fantasy.png" alt="Fantasy Logo" className={styles.fantasy} loading="lazy" />
            <div className={styles.socialSites}>
                {socialSites.map(({ src, alt, url }) => (
                    <img
                        key={alt}
                        src={src}
                        alt={alt}
                        onClick={() => openInNewTab(url)}
                        loading="lazy"
                        className={url ? styles.clickable : ''}
                    />
                ))}
            </div>
            <div className={styles.info}>
                <div className={styles.support}>
                    Contact us:
                    <a href="mailto:support@blocknite.io">support@blocknite.io</a>
                </div>
                <div>Copyright © 2024 Blocknite. All rights reserved.</div>
            </div>
        </div>
    );
};

export default memo(Footer);