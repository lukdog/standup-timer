import { TeamMember } from '../../../data/data';
import { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Card from '../Card';

type StageProps = {
  member: TeamMember;
  index: number;
  onCompleted: () => void;
  onNext: () => void;
  onPostpone: () => void;
};

export default function Stage({ member, onCompleted, onNext, index, onPostpone }: StageProps) {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setCurrentTime(member.time * 60);
  }, [member]);

  const addBonusTime = () => {
    setCurrentTime(currentTime + 30);
  };

  return (
    <Card>
      <h1 className="absolute -top-10 text-4xl font-bold text-orange-600 md:-left-10 md:-top-10">Current turn</h1>
      <h1 className="text-center text-3xl font-semibold dark:text-text-dark">{member.name}</h1>
      <p className="text-center text-xl text-gray-500 dark:text-text-dark ">{member.role}</p>
      <div className="mx-auto max-w-fit p-8 ">
        <CountdownCircleTimer
          isPlaying
          duration={currentTime}
          key={index}
          colors={['#666666', '#F7B801', '#ea580c', '#ea580c']}
          colorsTime={[member.time * 60, member.time * 30, 10, 0]}
          onComplete={onCompleted}
          size={270}
          strokeWidth={40}
          children={({ remainingTime }) => {
            const minutes = Math.floor(remainingTime / 60);
            const seconds = remainingTime % 60;
            return (
              <p className="text-4xl">
                {minutes}:{seconds}
              </p>
            );
          }}
        ></CountdownCircleTimer>
      </div>
      <div className="m-auto flex w-fit flex-row">
        <h1
          onClick={onPostpone}
          className="mx-2 w-fit cursor-pointer rounded-md bg-orange-600 px-2 py-1 text-center text-2xl font-bold text-white dark:text-text-dark"
        >
          POSTPONE
        </h1>
        <h1
          onClick={addBonusTime}
          className="mx-2 w-fit cursor-pointer rounded-md bg-orange-600 px-2 py-1 text-center text-2xl font-bold text-white dark:text-text-dark"
        >
          BONUS
        </h1>
        <h1
          onClick={onNext}
          className="mx-2 w-fit cursor-pointer rounded-md bg-orange-600 px-2 py-1 text-center text-2xl font-bold text-white dark:text-text-dark"
        >
          NEXT
        </h1>
      </div>
    </Card>
  );
}
