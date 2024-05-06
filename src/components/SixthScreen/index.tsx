import { Button } from '../Button';
import styles from './style.module.scss'

export const SixthScreen = () => {
    return (
        <div className={styles.container}>
            <div className={styles.submit}>

            <Button withIcon={true}>Enter app</Button>
            </div>
        </div>
    );
};
