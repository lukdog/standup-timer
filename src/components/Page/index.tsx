type PageProps = {
  title: string;
  onClose?: () => void;
  children?: JSX.Element[] | JSX.Element;
};

export default function Page({ title, children, onClose }: PageProps) {
  return (
    <section className="bg-white dark:bg-gray-800">
      {onClose && (
        <div className="absolute right-20 top-36 w-fit rounded-md bg-orange-600 px-4 py-1 text-white">
          <h1 onClick={onClose} className="cursor-pointer text-4xl font-semibold dark:text-gray-200">
            X
          </h1>
        </div>
      )}
      <div className="mx-auto h-48 max-w-6xl bg-white dark:bg-gray-800">
        <h1 className="py-20 text-center text-5xl font-bold md:text-left md:text-9xl dark:text-gray-200">{title}</h1>
      </div>
      <div className="-mt-4 min-h-screen bg-[#F1F1F1] dark:bg-gray-900">
        <div className="text-container mx-auto max-w-6xl pt-20 dark:text-gray-300">{children}</div>
      </div>
    </section>
  );
}
