import './App.scss';
import ScrollContainer from './components/ScrollContainer';
import { NavBar } from './components/NavBar';
import { StateProvider } from './context/state';

function App() {
  return (
    <div>
      <StateProvider>
        <ScrollContainer />
        <div className='navbar'>
          <NavBar />
        </div>
      </StateProvider>
    </div>
  );
}

export default App;
