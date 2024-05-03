import { useState, useEffect } from 'react';

import styles from './style.module.scss';

const Typewriter = ({ text, classname, delay = 0, time = 500 }: any) => {
    const [displayedText, setDisplayedText] = useState('');
    const typingSpeed = time / text.length;

    useEffect(() => {
        let index = -1;
        let timer: any = null;
        const timeout = setTimeout(() => {
            timer = setInterval(() => {
                index++;
                if (index === text.length) {
                    if (timer)
                        clearInterval(timer)
                    return;
                };
                setDisplayedText((prev) => prev + text.charAt(index));
            }, typingSpeed);
        }, delay)
        return () => {
            clearInterval(timer);
            clearTimeout(timeout)
        };
    }, [text, typingSpeed]);

    return <div className={styles[classname]}>{displayedText}</div>;
};

export default Typewriter;
