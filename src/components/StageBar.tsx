const StageBar = ({ stage }: { stage: number }) => {
  const loadingBar = (): JSX.Element => {
    switch (stage) {
      case 1:
        return <div className="h-0.5 w-1/3 bg-lime-500"></div>;
      case 2:
        return <div className="h-0.5 w-2/3 bg-lime-500"></div>;
      case 3:
      default:
        return <div className="h-0.5 w-full bg-lime-500"></div>;
    }
  };

  return (
    <div className="flex mb-2">
      {loadingBar()}
      <div className="h-0.5 grow bg-gray-300"></div>
    </div>
  );
};

export default StageBar;
