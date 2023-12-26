import { useState } from 'react';
import { Teams, TeamMember } from '../data/data.ts';
import StandupTimer from './components/StandupTimer';
import TeamChoice from './components/TeamChoice';
import Page from './components/Page/index.tsx';

function shuffle(array: TeamMember[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function App() {
  const [selectedTeam, setSelectedTeam] = useState(-1);

  const selectTeam = (team: number) => {
    team != -1 && (Teams[team].members = shuffle(Teams[team].members));
    setSelectedTeam(team);
  };

  return (
    <div className="App">
      {selectedTeam >= 0 && (
        <Page title={Teams[selectedTeam].name + ' Standup'} onClose={() => selectTeam(-1)}>
          <StandupTimer members={Teams[selectedTeam].members} />
        </Page>
      )}
      {selectedTeam < 0 && (
        <Page title="Teams">
          <TeamChoice teams={Teams} onTeamSelected={(team) => selectTeam(team)} />
        </Page>
      )}
    </div>
  );
}

export default App;
