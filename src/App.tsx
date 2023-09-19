import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { SelectedHerosContextProvider } from './HerosContextProvider';
import Comparison from './Components/Comparison/Comparison';

function App() {
  return (
    <div className="App">
      <SelectedHerosContextProvider>
        <Header />
        <Comparison />
      </SelectedHerosContextProvider>
    </div>
  );
}

export default App;
