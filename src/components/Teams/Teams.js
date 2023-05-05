import React from 'react';
import './Teams.css';
import Team from '../Team';

function Teams({
  teams, addTeam, removeTeam, removeTeamPlayers, addTeamPlayers, isTeamsReady,
}) {
  return (
    <div className="teams-container">
      <div className="teams-panel">
        {teams.map((team, index) => (
          <Team
            key={index}
            team={team}
            removeTeam={removeTeam}
            removeTeamPlayers={removeTeamPlayers}
            addTeamPlayers={addTeamPlayers}
            isTeamsReady={isTeamsReady}
          />
        ))}
      </div>
      <button className="add-team-button" onClick={addTeam}>addTeam</button>
    </div>
  );
}

export default Teams;
