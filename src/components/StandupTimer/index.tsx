import { TeamMember } from '../../../data/data';
import Stage from '../Stage';
import { useState } from 'react';
import Card from '../Card';

interface StandupTimerProps {
  members: TeamMember[];
}

export default function StandupTimer({ members }: StandupTimerProps) {
  const [currentMember, setCurrentMember] = useState(0);
  const [completed, setCompleted] = useState(members.length === 0);

  const onNext = () => {
    if (currentMember < members.length - 1) {
      setCurrentMember(currentMember + 1);
    } else {
      setCompleted(true);
    }
  };

  const onPostpone = () => {
    if (currentMember < members.length - 1) {
      members.push(members[currentMember]);
      setCurrentMember(currentMember + 1);
    }
  };

  return (
    <div className="mx-auto grid max-w-2xl py-4">
      {!completed && (
        <>
          <Stage
            member={members[currentMember]}
            index={currentMember}
            onCompleted={onNext}
            onNext={onNext}
            onPostpone={onPostpone}
          />
          {currentMember < members.length - 1 && (
            <>
              <div className="divider-container -mt-2 flex flex-col items-center">
                <div className="relative z-10 h-4 w-4 rounded-full bg-orange-600 dark:brightness-75"></div>
                <div className="-mt-2 h-24 w-1 rounded-full bg-gray-200 dark:bg-gray-500"></div>
              </div>
              <Card>
                <h1 className="absolute -top-10 text-4xl font-bold text-orange-600 md:-left-10 md:-top-10">Next One</h1>
                <h1 className="text-center text-2xl font-semibold dark:text-text-dark">
                  {members[currentMember + 1].name}
                </h1>
                <p className="text-center text-gray-500 dark:text-text-dark">{members[currentMember + 1].time}</p>
              </Card>
            </>
          )}
        </>
      )}
      {completed && (
        <Card>
          <h1 className="p-2 text-center text-4xl font-semibold text-orange-600">Standup completed 🚀</h1>
          <h2 className="p-2 text-center text-2xl dark:text-gray-400">See you tomorrow 👋🏼</h2>
        </Card>
      )}
    </div>
  );
}
