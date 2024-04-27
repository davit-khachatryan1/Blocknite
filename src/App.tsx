import './App.scss';
import ScrollContainer from './components/ScrollContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div>
      <ScrollContainer />
      <div className='navbar'>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
