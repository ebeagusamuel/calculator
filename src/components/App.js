/* eslint-disable no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

function App() {
  return (
    <div className="containerDiv">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
