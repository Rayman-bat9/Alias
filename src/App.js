import React from 'react';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <Header title="Rayman production" />
      </div>
      <div className="game-board">
        <GameBoard />
      </div>
    </div>
  );
}

export default App;
