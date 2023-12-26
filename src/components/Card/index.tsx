type CardProps = {
  children?: JSX.Element[] | JSX.Element;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="relative z-10 mx-4 rounded-md border bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-zinc-800">
      {children}
    </div>
  );
}
