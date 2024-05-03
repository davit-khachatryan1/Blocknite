import { FifthScreen } from "../components/FifthScreen";
import { FourthScreen } from "../components/FourthScreen";
import { MainScreen } from "../components/MainScreen";
import { SecondScreen } from "../components/SecondScreen";
import { SixthScreen } from "../components/SixthScreen";
import { ThirdScreen } from "../components/ThirdScreen";

export const screens = [
  { id: 'MainScreen', color: 'blue', name: 'Home', component: <MainScreen />, imageUrl: '/bg-images/main-bg.png' },
  { id: 'SecondScreen', color: 'black', name: 'Trailer', component: <SecondScreen /> , imageUrl: '/bg-images/second-bg.png'},
  { id: 'ThirdScreen', color: 'green', name: 'How it works', component: <ThirdScreen />, imageUrl: '/bg-images/third-bg.png' },
  { id: 'FourthScreen', color: 'yellow', name: 'Tokenomics', component: <FourthScreen />, imageUrl: '/bg-images/fourth-bg.png' },
  { id: 'FifthScreen', color: 'gray', name: 'Roadmap', component: <FifthScreen />, imageUrl: '/bg-images/fifth-bg.png' },
  { id: 'SixthScreen', color: 'red', name: 'FAQ', component: <SixthScreen />, imageUrl: '/bg-images/sixth-bg.png' },
]
