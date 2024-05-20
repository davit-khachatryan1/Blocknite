import { FifthScreen } from "../components/FifthScreen";
import { FourthScreen } from "../components/FourthScreen";
import { MainScreen } from "../components/MainScreen";
import { SecondScreen } from "../components/SecondScreen";
import { SixthScreen } from "../components/SixthScreen";
import { ThirdScreen } from "../components/ThirdScreen";

export const screens = [
  { id: 'home', color: 'blue', name: 'Home', component: <MainScreen />, imageUrl: '/bg-images/main-bg.webp', imageMobile: '/bg-images/home-mobile.webp' },
  { id: 'trailer', color: 'black', name: 'Trailer', component: <SecondScreen />, imageUrl: '/bg-images/second-bg.webp', imageMobile: '/bg-images/second-mobile-bg.webp' },
  { id: 'how-it-works', color: 'green', name: 'How it works', component: <ThirdScreen />, imageUrl: '/bg-images/third-bg.webp', imageMobile: '/bg-images/third-mobile-bg.webp' },
  { id: 'tokenomics', color: 'yellow', name: 'Tokenomics', component: <FourthScreen />, imageUrl: '/bg-images/fourth-bg.webp', imageMobile: '/bg-images/fourth-mobile-bg.webp' },
  { id: 'roadmap', color: 'gray', name: 'Roadmap', component: <FifthScreen />, imageUrl: '/bg-images/fifth-bg.webp', imageMobile: '/bg-images/fifth-mobile-bg.webp' },
  { id: 'faq', color: 'red', name: 'FAQ', component: <SixthScreen />, imageUrl: '/bg-images/sixth-bg.webp', imageMobile: '/bg-images/sixth-mobile-bg.webp' },
]
