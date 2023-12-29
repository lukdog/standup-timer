type CardProps = {
  children?: JSX.Element[] | JSX.Element;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-white dark:border-gray-800 relative z-10 mx-4 rounded-md border p-4 shadow-xl dark:bg-card-dark">
      {children}
    </div>
  );
}
