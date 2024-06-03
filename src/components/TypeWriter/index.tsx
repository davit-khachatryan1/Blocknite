import { useState, useEffect, memo } from 'react';

import styles from './style.module.scss';

interface TypeWriterProps {
    text: string;
    classname: string;
    delay?: number;
    time?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ text, classname, delay = 0, time = 500 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const typingSpeed = time / text.length;

    useEffect(() => {
        let index = -1;
        let timer: NodeJS.Timeout | null = null;

        const startTyping = () => {
            timer = setInterval(() => {
                index++;
                setDisplayedText((prev) => prev + text.charAt(index));
                if (index === text.length) {
                    if (timer) clearInterval(timer);
                }
            }, typingSpeed);
        };

        const timeout = setTimeout(startTyping, delay);

        return () => {
            if (timer) clearInterval(timer);
            clearTimeout(timeout);
        };
    }, [text, typingSpeed]);

    return <div className={styles[classname]}>{displayedText}</div>;
};

export default memo(TypeWriter);