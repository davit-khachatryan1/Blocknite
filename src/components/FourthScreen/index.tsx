import { motion, useAnimation } from 'framer-motion';
import styles from './style.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Typewriter from '../TypeWriter';
import { calcVW } from '../../utils/hooks/functions';

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    const d = [
        "M", end.x, end.y,
        "A", radius, radius, 0, largeArcFlag, 1, start.x, start.y
    ].join(" ");
    return d;
}

export const FourthScreen = () => {

    const strokeWidth = calcVW(108, 35.4);
    const radius = calcVW(240, 78.6) as number;

    const refMain = useRef(null);

    const [refFirstBlock1, inViewFirstBlock1] = useInView({
        triggerOnce: false,
        threshold: 1,
    });
    const [refFirstBlock2, inViewFirstBlock2] = useInView({
        triggerOnce: false,
        threshold: 1,
    });
    const [refFirstBlock3, inViewFirstBlock3] = useInView({
        triggerOnce: false,
        threshold: 1,
    });
    const [refFirstBlock4, inViewFirstBlock4] = useInView({
        triggerOnce: false,
        threshold: 1,
    });
    const [titleRef, inViewTitle] = useInView({
        triggerOnce: false,
    });
    const titleControls = useAnimation();
    useEffect(() => {
        if (inViewTitle) {
            titleControls.start('visible')
        } else {
            titleControls.start('hidden')
        }
    }, [inViewTitle])

    const blockControls1 = useAnimation();
    const blockControls2 = useAnimation();
    const blockControls3 = useAnimation();
    const blockControls4 = useAnimation();
    const mainTitleValueControls = useAnimation();

    const [percent1, title1, line1, dot1] = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
    const [percent2, title2, line2, dot2] = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
    const [percent3, title3, line3, dot3] = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
    const [percent4, title4, line4, dot4] = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

    const [animations, setAnimations] = useState(
        {
            first: {
                percent: percent1,
                title: title1,
                line: line1,
                dot: dot1,
                isValue: false
            },
            second: {
                percent: percent2,
                title: title2,
                line: line2,
                dot: dot2,
                isValue: false
            },
            third: {
                percent: percent3,
                title: title3,
                line: line3,
                dot: dot3,
                isValue: false
            },
            fourth: {
                percent: percent4,
                title: title4,
                line: line4,
                dot: dot4,
                isValue: false
            }
        }
    )

    const startAnimation = (control: any, animation: any, name: 'first' | 'second' | 'third' | 'fourth') => {
        control.animate.start({
            pathLength: 1,
            transition: { duration: 1.5 }
        })

        animation.percent.start('visible')
        animation.title.start('visible')
        animation.line.start('visible')
        animation.dot.start('visible')

    }
    const stopAnimation = (control: any, animation: any, name: 'first' | 'second' | 'third' | 'fourth') => {
        control.animate.start({
            pathLength: 0,
            transition: { duration: 1.5 }
        })

        animation.percent.start('hidden')
        animation.title.start('hidden')
        animation.line.start('hidden')
        animation.dot.start('hidden')
        setAnimations({ ...animations, [name]: { ...animations[name], isValue: false } })
    }

    useEffect(() => {
        const newAnimations = { ...animations };
        if (inViewFirstBlock1) {
            startAnimation(segments.Orange, animations.first, 'first')
            newAnimations.first.isValue = true;
        } else {
            stopAnimation(segments.Orange, animations.first, 'first')
            newAnimations.first.isValue = false;
        }

        if (inViewFirstBlock2) {
            startAnimation(segments.Green, animations.fourth, 'fourth')
            newAnimations.fourth.isValue = true;
        } else {
            stopAnimation(segments.Green, animations.fourth, 'fourth')
            newAnimations.fourth.isValue = false;
        }

        if (inViewFirstBlock3) {
            startAnimation(segments.Yellow, animations.third, 'third')
            newAnimations.third.isValue = true;
        } else {
            stopAnimation(segments.Yellow, animations.third, 'third')
            newAnimations.third.isValue = false;
        }
        if (inViewFirstBlock4) {
            startAnimation(segments.Red, animations.second, 'second')
            newAnimations.second.isValue = true;
            mainTitleValueControls.start('visible')
        } else {
            stopAnimation(segments.Red, animations.second, 'second')
            newAnimations.second.isValue = false;
        }

        if (!inViewFirstBlock1 && !inViewFirstBlock2 && !inViewFirstBlock3 && !inViewFirstBlock4) {
            mainTitleValueControls.start('hidden')
        }
        setAnimations(newAnimations)
    }, [inViewFirstBlock1, inViewFirstBlock2, inViewFirstBlock3, inViewFirstBlock4])

    const [segments] = useState({
        Orange: {
            color: '#C3A46550',
            rotation: -50,
            degrees: 270,
            percent: '80%',
            lineWidth: calcVW(800),
            title: 'Ecosystem',
            value: '2 000 000 000',
            animate: blockControls1,
            ref: refFirstBlock1,
        },
        Green: {
            color: '#BF777B50',
            rotation: 221.5,
            degrees: 5,
            percent: '10%',
            lineWidth: calcVW(650),
            title: 'Presale',
            value: '250 000 000',
            animate: blockControls4,
            ref: refFirstBlock4,
        },
        Yellow: {
            color: '#E3E1D950',
            rotation: 228,
            degrees: 38.5,
            percent: '9%',
            lineWidth: calcVW(650),
            title: 'Liquidity',
            value: '225 000 000',
            animate: blockControls3,
            ref: refFirstBlock3,
        },
        Red: {
            color: '#A2B79550',
            rotation: 268,
            degrees: 40.5,
            percent: '1%',
            lineWidth: calcVW(690),
            title: 'Airdrop',
            value: '25 000 000',
            animate: blockControls2,
            ref: refFirstBlock2,
        },
    })

    return (
        <div className={styles.container} ref={refMain}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'absolute', left: 0, top: 0, width: '100%' }}>
                <motion.svg width={`${calcVW(595, 195)}`} height={`${calcVW(595, 195)}`} viewBox={`0 0 ${calcVW(595, 195)} ${calcVW(595, 195)}"`} className={styles.motionSvg}>
                    {Object.values(segments).map((segment, index) => (
                        <motion.path
                            key={index}
                            fill="none"
                            strokeWidth={strokeWidth}
                            stroke={segment.color}
                            d={describeArc(calcVW(297.5, 97.5) as number, calcVW(297.5, 97.5) as number, radius, segment.rotation, segment.rotation + segment.degrees)}
                            initial={{ pathLength: 0 }}
                            animate={segment.animate}
                            custom={index}
                        />
                    ))}
                </motion.svg>
                <motion.div
                    className={styles.mainTitleValue}
                    animate={mainTitleValueControls}
                    initial="hidden"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { duration: 0.8, delay: 1.5 }
                        }
                    }}
                >
                    <div className={styles.title}>Total supply</div>
                    <div className={styles.value}>2 500 000 000 </div>
                </motion.div>
            </div>
            <div className={styles.infoBlock}>
                <motion.div className={styles.titleBlock}
                    ref={titleRef}
                    animate={titleControls}
                    initial="hidden"
                    variants={{
                        hidden: { opacity: 0, transform: `translateY(${calcVW('-25px')})` },
                        visible: {
                            opacity: 1,
                            transform: 'translateY(0)',
                            transition: { duration: 0.8 }
                        }
                    }}
                >
                    TOKENOMICS
                </motion.div>
                <div className={styles.content}>
                    {Object.values(segments).map((segment, index) => (
                        <div key={index} className={styles.eachBlock} ref={segment.ref}>
                            <div className={styles.info}>
                                <motion.div className={styles.percent}
                                    animate={Object.values(animations)[index].percent}
                                    initial="hidden"
                                    variants={{
                                        hidden: { opacity: 0, fontSize: '0', marginRight: '0' },
                                        visible: {
                                            opacity: 1,
                                            fontSize: calcVW('28px'),
                                            marginRight: calcVW('10px'),
                                            transition: { duration: 0.8, delay: 1.1 }
                                        }
                                    }}
                                >{segment.percent}</motion.div>
                                <motion.div
                                    animate={Object.values(animations)[index].title}
                                    initial="hidden"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: { duration: 0.5, delay: 0.3 }
                                        }
                                    }}
                                    className={styles.title}
                                >{segment.title}</motion.div>
                            </div>
                            <div className={styles.lineBlock}>
                                <motion.div
                                    animate={Object.values(animations)[index].line}
                                    initial="hidden"
                                    variants={{
                                        hidden: { width: 0 },
                                        visible: {
                                            width: segment.lineWidth,
                                            transition: { duration: 0.8, delay: 0.5 }
                                        }
                                    }}
                                    className={styles.line} style={{ width: segment.lineWidth }} />
                                <motion.div className={styles.dot}
                                    animate={Object.values(animations)[index].dot}
                                    initial="hidden"
                                    variants={{
                                        hidden: { width: 0, height: 0 },
                                        visible: {
                                            width: calcVW(8), height: calcVW(8),
                                            transition: { duration: 0.1, delay: 1 }
                                        }
                                    }}
                                />
                            </div>
                            <div className={styles.value}>
                                {Object.values(animations)[index].isValue &&
                                    <Typewriter text={segment.value} classname="value" time={500} delay={500} />
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
