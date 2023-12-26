import { TeamMember } from '../../../data/data';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Card from '../Card';

type StageProps = {
  member: TeamMember;
  index: number;
  onCompleted: () => void;
  onNext: () => void;
};

export default function Stage({ member, onCompleted, onNext, index }: StageProps) {
  return (
    <Card>
      <h1 className="absolute -top-10 text-4xl font-bold text-orange-600 md:-left-10 md:-top-10 dark:brightness-75">
        Current turn
      </h1>
      <h1 className="text-center text-3xl font-semibold dark:text-gray-400">{member.name}</h1>
      <p className="text-center text-xl text-gray-500">{member.role}</p>
      <div className="mx-auto max-w-fit p-8 ">
        <CountdownCircleTimer
          isPlaying
          duration={member.time * 60}
          key={index}
          colors={['#666666', '#F7B801', '#A30000', '#A30000']}
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
      <h1
        onClick={onNext}
        className="m-auto w-fit cursor-pointer rounded-md bg-orange-600 px-2 py-1 text-center text-2xl font-bold text-white"
      >
        NEXT
      </h1>
    </Card>
  );
}
