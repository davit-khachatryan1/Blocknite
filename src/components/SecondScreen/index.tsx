import { motion} from 'framer-motion';
import styles from './style.module.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleBlock from '../TitleBlock';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: <img src='/icons/arrow-right-slider.svg' />,
    prevArrow: <img src='/icons/arrow-left-slider.svg' />
};

const items = [
    { id: '1', src: '/networks/binance.png' },
    { id: '2', src: '/networks/coin-gecko.png' },
    { id: '3', src: '/networks/coin-market-cap.png' },
    { id: '4', src: '/networks/metamask.png' },
    { id: '5', src: '/networks/pancacke-swap.png' },
    { id: '6', src: '/networks/metamask.png' },
    { id: '7', src: '/networks/coin-market-cap.png' },
    { id: '8', src: '/networks/coin-gecko.png' },
]

export const SecondScreen = () => {
    return (
        <div className={styles.container}>
            <TitleBlock title="Trea is waiting for you" description="Embark on a heroic quest to defend Mithruon from the Orgurin onslaught." />
            <div className={styles.playButton}>
                <img src='/icons/main-circle.svg' className={styles.mainCircle} />
                <motion.img
                    className={styles.partCircle1}
                    animate={{
                        rotate: [0, 360],
                        transition: {
                            duration: 2,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                        }
                    }}
                    src='/icons/part-circle-1.svg'
                />
                <motion.img
                    className={styles.partCircle2}
                    animate={{
                        rotate: [0, -360],
                        transition: {
                            duration: 2,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                        }
                    }}
                    src='/icons/part-circle-2.svg'
                />
            </div>

            <div className={styles.carousel}>
                <div className={styles.title}> Our partners </div>
                <div className={styles.carouselContainer}>
                    <Slider {...settings}>
                        {items.map((item, index) =>
                            <div className={styles.swiperElement} key={index}> <img src={item.src} alt={`Slide ${index}`} style={{ height: '40px', width: 'auto', objectFit: 'contain' }} /></div>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    );
};
