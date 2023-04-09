import React, { useState } from 'react';
import './Teams.css';

function Teams({ isTeamsReady, teams, addTeam }) {
  const addPlayer = (teamIndex) => {
    /* eslint-disable-next-line */
    const playerName = prompt('Введите имя игрока:');

    // if (playerName) {
    //   const newPlayer = {
    //     name: playerName,
    //   };
    //   const updatedTeams = [...teams];
    //   updatedTeams[teamIndex].players.push(newPlayer);
    //   setTeams(updatedTeams);
    // }
  };

  return (
    <div>
      <div className="teams-panel">
        <p>Teams: </p>
        {teams.map((team, index) => (
          <div key={index}>
            <div className="team-block">
              <ul>
                {team.players.map((player, playerIndex) => (
                  <li key={playerIndex}>{player.name}</li>
                ))}
              </ul>
              {!isTeamsReady && <button className="add-player" onClick={() => addPlayer(index)}>+</button>}
            </div>
            <p>
              Счет:
              {team.score}
            </p>
          </div>
        ))}
        {!isTeamsReady
                && <button className="add-team" onClick={addTeam}>+</button>}
      </div>
    </div>
  );
}

export default Teams;
