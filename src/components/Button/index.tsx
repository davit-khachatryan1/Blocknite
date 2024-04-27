import styles from './style.module.scss'

export const Button = ({ classname, children }: any) => {
    return (
        <button className={`${styles.button} ${classname}`}>
            {children}
        </button>
    );
};
