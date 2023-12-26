import { useState } from 'react';
import { Teams } from '../data/data.ts';
import StandupTimer from './components/StandupTimer';
import TeamChoice from './components/TeamChoice';
import Page from './components/Page/index.tsx';

function App() {
  const [selectedTeam, setSelectedTeam] = useState(-1);

  return (
    <div className="App">
      {selectedTeam >= 0 && (
        <Page title={Teams[selectedTeam].name + ' Standup'} onClose={() => setSelectedTeam(-1)}>
          <StandupTimer members={Teams[selectedTeam].members} />
        </Page>
      )}
      {selectedTeam < 0 && (
        <Page title="Teams">
          <TeamChoice teams={Teams} onTeamSelected={(team) => setSelectedTeam(team)} />
        </Page>
      )}
    </div>
  );
}

export default App;
