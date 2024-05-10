import styles from './style.module.scss'

export const Button = ({ withIcon = false, classname, children, onClick }: any) => {
    return (
        <button className={`${styles.button} ${classname}`} onClick={onClick}>
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
