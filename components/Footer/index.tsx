import { memo } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import blockniteLogo from "/public/logos/blocknite.png"
import fantasyLogo from "/public/logos/fantasy.png"
import telegramLogo from "/public/icons/telegram.svg"
import twitterLogo from "/public/icons/twitter.svg"
import youtubeLogo from "/public/icons/youtube.svg"
import DextoolsLogo from "/public/icons/Dextools.svg"
import CoingeckoLogo from "/public/icons/Coingecko.svg"
import RadiumLogo from "/public/icons/Radium.svg"

const socialSites = [
    { src: telegramLogo, alt: "Telegram", url: "https://t.me/Blocknite" },
    { src: twitterLogo, alt: "Twitter", url: "https://twitter.com/blockniteio" },
    { src: youtubeLogo, alt: "YouTube", url: "https://www.youtube.com/@Blocknite" },
    { src: DextoolsLogo, alt: "Dextools", url: "" },
    { src: CoingeckoLogo, alt: "Coingecko", url: "" },
    { src: RadiumLogo, alt: "Radium", url: "" }
];

const Footer: React.FC = () => {
    const openInNewTab = (url: string) => {
        if (url) {
            window.open(url, "_blank", "noreferrer");
        }
    };

    return (
        <div className={styles.container}>
            <Image src={blockniteLogo} alt="Blocknite Logo" className={styles.logo} loading="lazy" />
            <Image src={fantasyLogo} alt="Fantasy Logo" className={styles.fantasy} loading="lazy" />
            <div className={styles.socialSites}>
                {socialSites.map(({ src, alt, url }) => (
                    <Image
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