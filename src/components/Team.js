import React, { useState } from 'react';

function Team({
  team, removeTeam, removeTeamPlayers, addTeamPlayers,
}) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTeamPlayers(team.id, inputValue); setInputValue('');
    }
  };

  return (
    <div className="team-block">
      <button className="del-team" onClick={() => removeTeam(team.id)}>x</button>
      <input
        className="add-player-input"
        placeholder="add player"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <div className="players-list">
        <ul>
          {team.players.map((player, playerIndex) => (
            <li key={playerIndex}>
              {player.name}
              <button className="del-player" onClick={() => removeTeamPlayers(team.id, player.id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="team-score">
        {`Points:${team.score}`}
      </h3>
    </div>
  );
}

export default Team;
