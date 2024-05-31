import { memo } from 'react';
import styles from './style.module.scss'

const Button = ({ withIcon = false, classname, children, onClick, buttonIcon = false }: any) => {
    return (
        <button className={`${styles.button} ${classname}`} onClick={onClick}>
            {buttonIcon && <img src='/icons/button-icon.svg' alt='icon' className={styles.leftIcon} />}
            {children}
            {withIcon &&
                <>
                    <img src="/icons/angle.svg" alt="icon" className={styles.icon} />
                    <img src="/icons/angle.svg" alt="icon" className={styles.icon} />
                    <img src="/icons/angle.svg" alt="icon" className={styles.icon} />
                    <img src="/icons/angle.svg" alt="icon" className={styles.icon} />
                </>
            }
        </button>
    );
};

export default memo(Button)
