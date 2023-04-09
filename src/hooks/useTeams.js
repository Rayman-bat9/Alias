import { useState } from 'react';

const DEFAULT_TEAM = {
  players: [],
  score: 0,
  id: 1,
};

export default function useTeams() {
  const [teams, setTeams] = useState([
    DEFAULT_TEAM,
  ]);

  const [currentTeam, setCurrentTeam] = useState(DEFAULT_TEAM.id);

  const addTeamPlayers = () => {

  };

  const onSubmitTeamScore = () => {

  };

  const addTeam = () => {

  };

  return {
    teams,
    addTeamPlayers,
    onSubmitTeamScore,
    addTeam,
  };
}
