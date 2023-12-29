type PageProps = {
  title: string;
  onClose?: () => void;
  children?: JSX.Element[] | JSX.Element;
};

export default function Page({ title, children, onClose }: PageProps) {
  return (
    <section className="bg-white dark:bg-grey-banner">
      {onClose && (
        <div className="bg-orange-600 text-white absolute right-20 top-36 w-fit rounded-md px-4 py-1">
          <h1 onClick={onClose} className="cursor-pointer text-4xl font-semibold dark:text-text-dark">
            X
          </h1>
        </div>
      )}
      <div className="mx-auto h-48 max-w-6xl">
        <h1 className="py-20 text-center text-5xl font-bold md:text-left md:text-9xl dark:text-text-dark">{title}</h1>
      </div>
      <div className="dark:bg-grey-page -mt-4 min-h-screen bg-[#F1F1F1] ">
        <div className="text-container dark:text-gray-300 mx-auto max-w-6xl pt-20">{children}</div>
      </div>
    </section>
  );
}
