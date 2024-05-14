import { motion, useAnimation } from 'framer-motion';
import styles from './style.module.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleBlock from '../TitleBlock';
import { calcVW } from '../../utils/hooks/functions';
import { DetailedHTMLProps, useEffect, useRef, useState } from 'react';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: <img src='/icons/arrow-right-slider.svg' />,
    prevArrow: <img src='/icons/arrow-left-slider.svg' />,
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
    { id: '6', src: '/networks/metamask.png' },
    { id: '7', src: '/networks/coin-market-cap.png' },
    { id: '8', src: '/networks/coin-gecko.png' },
]

export const SecondScreen = () => {
    const videoId = 'ZaBl4QRO1oM';
    const [player, setPlayer] = useState<any>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag && firstScriptTag.parentNode && firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        (window as any).onYouTubeIframeAPIReady = () => {
            const newPlayer = new (window as any).YT.Player(playerRef.current, {
                videoId: videoId,
                events: {
                    'onStateChange': onPlayerStateChange
                },
                playerVars: {
                    autoplay: 0, // Don't autoplay on load
                    controls: 0, // No controls
                    enablejsapi: 1, // Enable JS API
                    modestbranding: 1, // Minimal YouTube branding
                    rel: 0, // Don't show related videos after the end
                    iv_load_policy: 3, // Don't show video annotations
                }
            });
            setPlayer(newPlayer);
        };

        return () => { if (player) player?.destroy() };
    }, [videoId]);

    const onPlayerStateChange = (event: any) => {
        if (event.data === (window as any).YT.PlayerState.PLAYING) {
            setIsPlaying(true);
        } else if (event.data === (window as any).YT.PlayerState.ENDED || event.data === (window as any).YT.PlayerState.PAUSED) {
            setIsPlaying(false);
        }
    };

    const handlePlayVideo = () => {
        if (!isPlaying && player) {
            player.playVideo();
        }
    };

    useEffect(() => {
        if (isPlaying) {
            controls.start({
                opacity: 0,
                zIndex: 0

            })
        } else {
            controls.start({
                opacity: 1,
                zIndex: 999
            })
        }
    }, [isPlaying])

    return (
        <div className={styles.container}>
            <TitleBlock title="Trea is waiting for you" description="Embark on a heroic quest to defend Mithruon from the Orgurin onslaught." mobileClassName={true} descriptionBottom={true} />
            <motion.div className={styles.playButton} onClick={handlePlayVideo} animate={controls}>
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
            </motion.div>
            <div className={styles.video}>
                {/* <video width={'100%'} height={'100%'} muted={false} ref={videoRef} controls={true} playsInline >
                    <source  src='https://www.youtube.com/watch?v=TpbFebtTA-g' type="video/mp4"/>
                    </video> */}
                {/* <iframe id="player" itemType="text/html" width="640" height="390"
                    src="https://www.youtube.com/watch?v=BBt87hIo_T4&list=RDMMBBt87hIo_T4&start_radio=1"
                    frameBorder="0"></iframe> */}
                {/* <iframe
                    width="100%"
                    height="100%"
                    src={src}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded YouTube Video"
                    style={{ position: 'absolute', left: 0, top: 0 }}
                ></iframe> */}
                <div ref={playerRef} style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0 }} />
            </div>
            <div className={styles.carousel}>
                <div className={styles.title}> Our partners </div>
                <div className={styles.carouselContainer}>
                    <Slider {...settings}>
                        {items.map((item, index) =>
                            <div className={styles.swiperElement} key={index}> <img src={item.src} alt={`Slide ${index}`} style={{ height: calcVW('40px'), width: 'auto', objectFit: 'contain' }} /></div>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    );
};
