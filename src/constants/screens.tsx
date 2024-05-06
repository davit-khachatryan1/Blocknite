import { FifthScreen } from "../components/FifthScreen";
import { FourthScreen } from "../components/FourthScreen";
import { MainScreen } from "../components/MainScreen";
import { SecondScreen } from "../components/SecondScreen";
import { SixthScreen } from "../components/SixthScreen";
import { ThirdScreen } from "../components/ThirdScreen";

export const screens = [
  { id: 'home', color: 'blue', name: 'Home', component: <MainScreen />, imageUrl: '/bg-images/main-bg.png' },
  { id: 'trailer', color: 'black', name: 'Trailer', component: <SecondScreen /> , imageUrl: '/bg-images/second-bg.png'},
  { id: 'how-it-works', color: 'green', name: 'How it works', component: <ThirdScreen />, imageUrl: '/bg-images/third-bg.png' },
  { id: 'tokenomics', color: 'yellow', name: 'Tokenomics', component: <FourthScreen />, imageUrl: '/bg-images/fourth-bg.png' },
  { id: 'roadmap', color: 'gray', name: 'Roadmap', component: <FifthScreen />, imageUrl: '/bg-images/fifth-bg.png' },
  { id: 'faq', color: 'red', name: 'FAQ', component: <SixthScreen />, imageUrl: '/bg-images/sixth-bg.png' },
]
