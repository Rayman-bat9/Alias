import React from 'react';
import Header from './components/Header';
import BoardContainer from './components/BoardContainer';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <Header title="Alias" />
      </div>
      <div className="game-board">
        <BoardContainer />
      </div>
    </div>
  );
}

export default App;
