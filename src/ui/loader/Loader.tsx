import React from "react";

const Loader: React.FC = React.memo(() => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="border-l-primary-neon-blue m-auto h-8 w-8 rounded-full border-4 border-l-4 border-white animate-spin" />
    </div>
  );
});

export default Loader;
