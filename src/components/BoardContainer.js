import React, { useState } from 'react';
import Teams from './Teams/Teams';
// import GameBoard from './GameBoard';
import useTeams from '../hooks/useTeams';

function BoardContainer() {
  const [isTeamsReady] = useState(false);

  const {
    addTeam,
    addTeamPlayers,
    teams,
    removeTeam,
    removeTeamPlayers,
  } = useTeams();

  return (
    <div className="game">
      <Teams
        isTeamsReady={isTeamsReady}
        teams={teams}
        addTeam={addTeam}
        removeTeam={removeTeam}
        removeTeamPlayers={removeTeamPlayers}
        addTeamPlayers={addTeamPlayers}
      />
    </div>
  );
}

export default BoardContainer;
