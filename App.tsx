import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from './components/Box';

function App() {
  return (
    <div className="App">
      <Box num={1}/> 
      <Box num={2}/> 
      <Box num={3}/> 
    </div>
  );
}

export default App;
