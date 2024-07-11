import { lazy, memo, useEffect, useRef, useState, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Slider from 'react-slick';
import { useStateProvider } from '../../context/state';
import { calcVW } from '../../utils/hooks/functions';
import styles from './style.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TitleBlock = lazy(() => import("../TitleBlock"));

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: <img src='/icons/arrow-right-slider.svg' loading='lazy' alt="Next" />,
    prevArrow: <img src='/icons/arrow-left-slider.svg' loading='lazy' alt="Previous" />,
    responsive: [
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
};

const items = [
    { id: '1', src: '/networks/binance.png' },
    { id: '2', src: '/networks/coin-gecko.png' },
    { id: '3', src: '/networks/coin-market-cap.png' },
    { id: '4', src: '/networks/metamask.png' },
    { id: '5', src: '/networks/pancacke-swap.png' },
    { id: '6', src: '/networks/chainlink-logo-white.png' },
    { id: '7', src: '/networks/dex-tools.png' },
    { id: '8', src: '/networks/dune-logo.png' },
    { id: '9', src: '/networks/pinksale.png' },
];

const SecondScreen = () => {
    const { windowWidth } = useStateProvider();
    // const videoId = 'ZaBl4QRO1oM';
    // const [player, setPlayer] = useState<any>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    // const [showVideo, setShowVideo] = useState(false);

    // const playerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

    // const onPlayerStateChange = useCallback((event: any) => {
    //     if (event.data === (window as any).YT.PlayerState.PLAYING) {
    //         setIsPlaying(true);
    //     } else if (event.data === (window as any).YT.PlayerState.ENDED || event.data === (window as any).YT.PlayerState.PAUSED) {
    //         setIsPlaying(false);
    //     }
    // }, []);

    // const handlePlayVideo = useCallback(() => {
    //     setShowVideo(true);
    //     if (!player) {
    //         const tag = document.createElement('script');
    //         tag.src = "https://www.youtube.com/iframe_api";
    //         const firstScriptTag = document.getElementsByTagName('script')[0];
    //         if (firstScriptTag && firstScriptTag.parentNode) {
    //             firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    //         }

    //         (window as any).onYouTubeIframeAPIReady = () => {
    //             const newPlayer = new (window as any).YT.Player(playerRef.current, {
    //                 videoId: videoId,
    //                 events: {
    //                     'onStateChange': onPlayerStateChange
    //                 },
    //                 playerVars: {
    //                     autoplay: 0, // Don't autoplay on load
    //                     enablejsapi: 1, // Enable JS API
    //                     modestbranding: 1, // Minimal YouTube branding
    //                     rel: 0, // Don't show related videos after the end
    //                     iv_load_policy: 3, // Don't show video annotations
    //                 }
    //             });
    //             setPlayer(newPlayer);
    //             // Play video after player is initialized
    //             const interval = setInterval(() => {
    //                 if (newPlayer.playVideo) {
    //                     newPlayer.playVideo();
    //                     clearInterval(interval);
    //                 }
    //             })
    //         };
    //     } else if (!isPlaying) {
    //         player.playVideo();
    //     }
    // }, [isPlaying, player, videoId, onPlayerStateChange]);

    useEffect(() => {
        if (isPlaying) {
            controls.start({
                opacity: 0,
                zIndex: 0
            });
        } else {
            controls.start({
                opacity: 1,
                zIndex: 100
            });
        }
    }, [isPlaying, controls]);

    return (
        <div className={styles.container}>
            <TitleBlock title="Trea is waiting for you" description="Embark on a heroic quest to defend Mithruon from the Orgurin onslaught." mobileClassName={windowWidth <= 576} descriptionBottom={true} />
            <motion.div className={styles.playButton} onClick={() => {}} animate={controls}>
                <img src='/icons/main-circle.svg' className={styles.mainCircle} loading='lazy' alt="Play" />
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
                    alt="Part Circle 1"
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
                    alt="Part Circle 2"
                />
            </motion.div>
            {/* <div className={styles.video} style={{ opacity: showVideo ? 1 : 0 }}>
                <div ref={playerRef} style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }} />
            </div> */}
            <div className={styles.carousel}>
                <div className={styles.title}>Our partners</div>
                <div className={styles.carouselContainer}>
                    <Slider {...settings}>
                        {items.map((item, index) => (
                            <div className={styles.swiperElement} key={item.id}>
                                <img src={item.src} alt={`Slide ${index}`} style={{ height: calcVW('40px', windowWidth), width: 'auto', objectFit: 'contain' }} loading='lazy' />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default memo(SecondScreen);