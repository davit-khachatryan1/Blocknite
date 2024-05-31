import styles from './style.module.scss'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { lazy, memo, useEffect, useState } from 'react';
import { useStateProvider } from '../../context/state';

const TitleBlock = lazy(() => import("../TitleBlock"));
const FAQInput = lazy(() => import("../FAQInput"));
const Button = lazy(() => import("../Button"));

const FAQList = [
    {
        title: 'Why should I play Blocknite?',
        description: 'You earn $NITE from playing our fantastic game! We have a lot of great features in the works that we are excited to show you, the earlier you start playing the quicker you level up your Treanin. Higher level Treanin receive more rewards and will put you in the best position to enjoy our future updates.'
    },
    {
        title: 'Is the total supply increasing?',
        description: 'Yes! As you can see, 80% of our funds are allocated toward “Ecosystem”. These are tokens that will be slowly created over time and issued to our users as rewards for playing our game. Without minting, there is no game. Do not worry, only carefully built smart contracts are calling these mint functions, they are not open to anything else.'
    },
    {
        title: 'Is the team Doxxed?',
        description: 'The team is not currently Doxxed. We would not feel comfortable launching our incredible game with overreaching governments breathing down our necks, so to launch smoothly we have decided to remain anonymous.'
    },
    {
        title: 'Do the team control the smart contracts?',
        description: 'Yes. We love what we have built so far and we aspire to continue building, adding brand new features to keep you happy. As such, we are required to keep control of the contracts. As soon as we revoke ownership of the contracts, we become unable to add new features. We will not be keeping control of anything that we do not need to keep control of.'
    },
]

const SixthScreen = () => {
    const { scrolling, windowWidth } = useStateProvider();
    const [active, setActive] = useState(0);
    const enterAppControls = useAnimation();
    const [refEnterApp, inVewEnterApp] = useInView({
        triggerOnce: false,
        threshold: 1,
    });

    useEffect(() => {
        if (!scrolling) {
            if (inVewEnterApp) {
                enterAppControls.start('visible')
            }
        }
    }, [inVewEnterApp, scrolling])

    return (
        <div className={styles.container}>
            <TitleBlock title="frequently asked questions" secondTitle="FAQ" mobileClassName={windowWidth <= 576} description="Lorem ipsum dolor sit amet consectetur. Et massa fusce eget mi molestie egestas." withOutDescription={true} />

            <div className={styles.inputBlock}>
                {FAQList.map((el, index) =>
                    <FAQInput key={index} title={el.title} description={el.description} index={index} active={active} setActive={setActive} />
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

export default memo(SixthScreen)
