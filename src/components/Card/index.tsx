import classNames from 'classnames';

type CardProps = {
  children?: JSX.Element[] | JSX.Element;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={classNames(
        'relative z-10 mx-4 rounded-md border bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-card-dark',
        className
      )}
    >
      {children}
    </div>
  );
}
