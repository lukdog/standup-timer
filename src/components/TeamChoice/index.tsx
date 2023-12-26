import { Team } from '../../../data/data';
import Card from '../Card';

interface TeamChoiceProps {
  teams: Team[];
  onTeamSelected: (team: number) => void;
}

export default function TeamChoice({ teams, onTeamSelected }: TeamChoiceProps) {
  return (
    <div className="mx-auto grid max-w-2xl py-4">
      {teams.map((team: Team, index: number) => (
        <>
          <Card key={index}>
            <h1 className="py-4 text-center text-4xl font-semibold dark:text-gray-400">{team.name}</h1>
            <h1
              onClick={() => onTeamSelected(index)}
              className="text m-auto w-fit cursor-pointer rounded-md bg-orange-600 px-2 py-1 text-2xl font-bold text-white"
            >
              Start
            </h1>
          </Card>
          <div className="h-4"></div>
        </>
      ))}
    </div>
  );
}
