import { memo } from 'react';
import styles from './style.module.scss'
import Image from 'next/image';
import angle from '../../public/icons/angle.svg'
import buttonIconSvg from '../../public/icons/button-icon.svg'

const Button = ({ withIcon = false, classname, children, onClick, buttonIcon = false }: any) => {
    return (
        <button className={`${styles.button} ${classname}`} onClick={onClick}>
            {buttonIcon && <Image src={buttonIconSvg} alt='icon' className={styles.leftIcon} />}
            {children}
            {withIcon &&
                <>
                    <Image src={angle} alt="icon" className={styles.icon} loading='lazy' />
                    <Image src={angle} alt="icon" className={styles.icon} loading='lazy' />
                    <Image src={angle} alt="icon" className={styles.icon} loading='lazy' />
                    <Image src={angle} alt="icon" className={styles.icon} loading='lazy' />
                </>
            }
        </button>
    );
};

export default memo(Button)
