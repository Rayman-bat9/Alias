import React, { useState } from 'react';
import Teams from './Teams/Teams';
// import GameBoard from './GameBoard';
import MyButton from '../UI/MyButton';
import useTeams from '../hooks/useTeams';

function BoardContainer() {
  const [isTeamsReady, setTeamsReady] = useState(false);

  const {
    addTeam,
    addTeamPlayers,
    onSubmitTeamScore,
    teams,
  } = useTeams();

  const onSubmit = () => {
    onSubmitTeamScore(10);
  };

  return (
    <div className="game">
      <Teams isTeamsReady={isTeamsReady} teams={teams} />
      {isTeamsReady
        ? (
          <div className="ready-button">
            <MyButton onClick={onSubmit}>Set score of current team to 10!</MyButton>
            {/* <GameBoard /> */}
          </div>
        ) : (
          <div className="ready-button">
            <MyButton onClick={() => setTeamsReady(true)}>Ready</MyButton>
          </div>
        )}
    </div>
  );
}

export default BoardContainer;
