import { memo } from 'react';
import styles from './style.module.scss';

 const Footer = () => {
    const openInNewTab = (url: string) => {
        window.open(url, "_blank", "noreferrer");
      };
    return (
        <div className={styles.container}>
            <img src="/logos/blocknite.png" alt="" className={styles.logo} />
            <img src="/logos/fantasy.png" alt="" className={styles.fantasy} />
            <div className={styles.socialSites}>
                <img src="/icons/telegram.svg" alt="telegram" onClick={()=>openInNewTab('https://t.me/Blocknite ')}/>
                <img src="/icons/twitter.svg" alt="twitter" onClick={()=>openInNewTab('https://twitter.com/blockniteio ')} />
                <img src="/icons/youtube.svg" alt="youtube" onClick={()=>openInNewTab('https://www.youtube.com/@Blocknite')} />
                <img src="/icons/Dextools.svg" alt="Dextools" />
                <img src="/icons/Coingecko.svg" alt="Coingecko" />
                <img src="/icons/Radium.svg" alt="Radium" />
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

export default memo(Footer)