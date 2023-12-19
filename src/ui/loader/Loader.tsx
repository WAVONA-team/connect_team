import React from "react";

type Props = {
  height: number;
  width: number;
};

const Loader: React.FC<Props> = React.memo(({ height, width }) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div
        className={`
          border-l-primary-neon-blue
          m-auto
          h-${height}
          w-${width}
          animate-spin
          rounded-full
          border-4
          border-l-4
          border-white
        `}
      />
    </div>
  );
});

export default Loader;
