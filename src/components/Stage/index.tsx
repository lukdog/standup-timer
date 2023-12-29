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
      <h1 className="text-orange-600 absolute -top-10 text-4xl font-bold md:-left-10 md:-top-10">Current turn</h1>
      <h1 className="text-center text-3xl font-semibold dark:text-text-dark">{member.name}</h1>
      <p className="text-gray-500 text-center text-xl dark:text-text-dark ">{member.role}</p>
      <div className="mx-auto max-w-fit p-8 ">
        <CountdownCircleTimer
          isPlaying
          duration={member.time * 60}
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
      <h1
        onClick={onNext}
        className="bg-orange-600 text-white m-auto w-fit cursor-pointer rounded-md px-2 py-1 text-center text-2xl font-bold dark:text-text-dark"
      >
        NEXT
      </h1>
    </Card>
  );
}
