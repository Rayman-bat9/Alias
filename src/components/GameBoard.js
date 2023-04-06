import React, { useState } from 'react';
import MyButton from '../UI/MyButton';
import Teams from './Teams';
import Game from './Game';

function GameBoard() {
  const [teamsReady, setTeamsReady] = useState(false);

  const handleReady = () => {
    setTeamsReady(true);
  };

  return (
    <div className="game">
      <Teams teamsReadyStatus={teamsReady} />
      {teamsReady
        ? (
          <div>
            <Game />
          </div>
        ) : (
          <div className="ready-button">
            <MyButton onClick={() => handleReady()}>Ready</MyButton>
          </div>
        )}
    </div>
  );
}

export default GameBoard;
