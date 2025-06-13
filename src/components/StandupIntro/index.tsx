import { useSearchParams } from 'react-router-dom';
import { TeamMember } from '../../../data/data.ts';

import StandupTimer from '../StandupTimer';
import Page from '../Page';

import Card from '../Card';
import { useState } from 'react';

export default function StandupIntro() {
  const [standupStarted, setStandupStarted] = useState(false);
  const [searchParams] = useSearchParams();
  const [members, setMembers] = useState<TeamMember[]>(parseMembersFromParams());
  console.log(searchParams);

  function shuffle(array: TeamMember[]): TeamMember[] {
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

  function calculateTotalTime(members: TeamMember[]): number {
    return members.reduce((total, member) => total + member.time, 0);
  }

  function removeMemberbyIndex(index: number): void {
    // Remove the member at the specified index and set the new members state
    const newMembers = members.filter((_, i) => i !== index);
    setMembers(newMembers);
  }

  function parseMembersFromParams(): TeamMember[] {
    // members in query params are in the format: &name1=time1&name2=time2,...
    const params = [];

    for (const entry of searchParams.entries()) {
      params.push(entry);
    }

    const m: TeamMember[] = params.map((param) => {
      const [name, time] = param;
      return {
        name: name[0].toUpperCase() + name.substring(1),
        role: 'Member',
        time: parseInt(time, 10) || 2,
      };
    });

    return shuffle(m);
  }

  return (
    <>
      {standupStarted && (
        <Page title="Daily Standup" onClose={() => setStandupStarted(false)}>
          <StandupTimer members={members} />
        </Page>
      )}

      {!standupStarted && (
        <Page title="Daily Standup">
          <div className="mx-auto grid max-w-2xl py-4">
            <Card className="mb-10">
              <h1 className="text-center text-3xl font-semibold dark:text-text-dark">Total Time</h1>
              <p className="text-center text-xl text-gray-500 dark:text-text-dark">
                {calculateTotalTime(members) + 'm'}
              </p>
              <h1
                onClick={setStandupStarted.bind(null, true)}
                className="mx-auto mt-3 w-fit cursor-pointer rounded-md bg-orange-600 px-2 py-1 text-center text-2xl font-bold text-white dark:text-text-dark"
              >
                Start
              </h1>
            </Card>

            {members.map((member, index) => (
              <div key={index}>
                <Card>
                  <h1 className="text-center text-xl font-semibold dark:text-text-dark">{member.name}</h1>
                  <p className="text-center text-gray-500 dark:text-text-dark">{member.time + 'm'}</p>
                  <h1
                    onClick={() => removeMemberbyIndex(index)}
                    className="absolute right-4 top-6 mx-2 w-fit cursor-pointer rounded-md bg-orange-600 px-2 py-1 text-center text-xl font-bold text-white dark:text-text-dark"
                  >
                    X
                  </h1>
                </Card>
                {index != members.length - 1 && (
                  <div className="divider-container -mt-2 flex flex-col items-center">
                    <div className="relative z-10 h-4 w-4 rounded-full bg-orange-600 dark:brightness-75"></div>
                    <div className="-mt-2 h-5 w-1 rounded-full bg-gray-200 dark:bg-gray-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Page>
      )}
    </>
  );
}
