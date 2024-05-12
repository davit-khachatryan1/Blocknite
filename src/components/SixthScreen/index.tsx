import { Button } from '../Button';
import styles from './style.module.scss'
import TitleBlock from '../TitleBlock';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import FAQInput from '../FAQInput';

const FAQList = [
    {
        title: 'Why should I play Blocknite?',
        description: 'You earn $NITE from playing our fantastic game! We have a lot of great features in the works that we are excited to show you, the earlier you start playing the quicker you level up your Treanin. Higher level Treanin receive more rewards and will put you in the best position to enjoy our future updates.'
    },
    {
        title: 'Is the total supply increasing?',
        description: 'You earn $NITE from playing our fantastic game! We have a lot of great features in the works that we are excited to show you, the earlier you start playing the quicker you level up your Treanin. Higher level Treanin receive more rewards and will put you in the best position to enjoy our future updates.'
    },
    {
        title: 'Is the team Doxxed?',
        description: 'You earn $NITE from playing our fantastic game! We have a lot of great features in the works that we are excited to show you, the earlier you start playing the quicker you level up your Treanin. Higher level Treanin receive more rewards and will put you in the best position to enjoy our future updates.'
    },
    {
        title: 'Do the team control the smart contracts?',
        description: 'You earn $NITE from playing our fantastic game! We have a lot of great features in the works that we are excited to show you, the earlier you start playing the quicker you level up your Treanin. Higher level Treanin receive more rewards and will put you in the best position to enjoy our future updates.'
    },
]

export const SixthScreen = () => {
    const [active, setActive] = useState(0);
    const enterAppControls = useAnimation();
    const [refEnterApp, inVewEnterApp] = useInView({
        triggerOnce: false,
        threshold: 1,
    });

    useEffect(() => {
        if (inVewEnterApp) {
            enterAppControls.start('visible')
        } else {
            enterAppControls.start('hidden')
        }
    }, [inVewEnterApp])

    return (
        <div className={styles.container}>
            <TitleBlock title="frequently asked questions" secondTitle="FAQ" mobileClassName={true} description="Lorem ipsum dolor sit amet consectetur. Et massa fusce eget mi molestie egestas." withOutDescription={true}/>

            <div className={styles.inputBlock}>
                {FAQList.map((el, index) =>
                    <FAQInput key={index} title={el.title} description={el.description} index={index} active={active} setActive={setActive}/>
                )}
            </div>
            <motion.div className={styles.submit}
                ref={refEnterApp}
                animate={enterAppControls}
                initial="hidden"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { duration: 0.75 }
                    }
                }}
            >
                <Button withIcon={true}>Enter app</Button>
            </motion.div>
        </div>
    );
};
