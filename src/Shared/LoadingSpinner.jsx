export const loadingFull = () => {
  return (
    <div className="fixed inset-0 w-full backdrop-blur-xs flex justify-center items-center z-50">
      <div className="h-[calc(100vh-64px)] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-lime-500"></span>
      </div>
    </div>
  );
};

export const loadingNavFooter = () => {
  return (
    <div className="min-h-[calc(100vh-64px-273px)] flex items-center justify-center">
      <span className="loading loading-ring loading-xl"></span>
    </div>
  );
};

export const loadingNav = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <span className="loading loading-ring loading-xl"></span>
    </div>
  );
};
