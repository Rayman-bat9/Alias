import { useState } from 'react';

const DEFAULT_TEAM = {
  players: [
    {
      name: 'Sidorov',
      id: 'Sidorov',
    },
    {
      name: 'Ivanov',
      id: 'Ivanov',
    },
  ],
  score: 0,
  id: 1,
};

export default function useTeams() {
  const [teams, setTeams] = useState([
    DEFAULT_TEAM,
  ]);

  const addTeamPlayers = (teamId, playerName) => {
    if (playerName === '') return;

    setTeams((prevTeams) => prevTeams.map((team) => (team.id === teamId
      ? {
        ...team,
        players: [
          ...team.players,
          {
            name: playerName,
            id: playerName,
          },
        ],
      }
      : team)));
  };

  const removeTeamPlayers = (teamId, playerId) => {
    setTeams((prevTeams) => prevTeams.map((team) => (team.id === teamId
      ? {
        ...team,
        players: team.players.filter((player) => player.id !== playerId),
      }
      : team)));
  };

  const addTeam = () => {
    if (teams.length === 4) return;

    setTeams([
      ...teams,
      {
        ...DEFAULT_TEAM,
        id: teams.length + 1,
      },
    ]);
  };

  const removeTeam = (teamId) => {
    setTeams(teams.filter((team) => team.id !== teamId));
  };

  return {
    teams,
    addTeamPlayers,
    addTeam,
    removeTeam,
    removeTeamPlayers,
  };
}
