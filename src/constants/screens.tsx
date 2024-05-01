import { FifthScreen } from "../components/FifthScreen";
import { FourthScreen } from "../components/FourthScreen";
import { MainScreen } from "../components/MainScreen";
import { SecondScreen } from "../components/SecondScreen";
import { SixthScreen } from "../components/SixthScreen";
import { ThirdScreen } from "../components/ThirdScreen";

export const screens = [
  { id: 'MainScreen', color: 'blue', name: 'Home', component: <MainScreen /> },
  { id: 'SecondScreen', color: 'black', name: 'Trailer', component: <SecondScreen /> },
  { id: 'ThirdScreen', color: 'green', name: 'How it works', component: <ThirdScreen /> },
  { id: 'FourthScreen', color: 'yellow', name: 'Tokenomics', component: <FourthScreen /> },
  { id: 'FifthScreen', color: 'gray', name: 'Roadmap', component: <FifthScreen /> },
  { id: 'SixthScreen', color: 'red', name: 'FAQ', component: <SixthScreen /> },
]
