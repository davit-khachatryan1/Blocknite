import './App.scss';
import { StateProvider } from './context/state';
import { lazy } from 'react';

const ScrollContainer = lazy(() => import('./components/ScrollContainer'));
const NavBar = lazy(() => import('./components/NavBar'));

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
