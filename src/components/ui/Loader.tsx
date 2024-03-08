const Loader = () => {
  return (
    <div className="p-10 text-center text-xl">
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-14 aspect-square border-4 text-darkBlue text-4xl animate-spin border-lightBlue flex items-center justify-center border-t-darkBlue rounded-full">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            className="animate-ping"
          ></svg>
        </div>
      </div>
    </div>
  );
};

export default Loader;
