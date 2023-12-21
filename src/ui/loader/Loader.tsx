import React from "react";

type Props = {
  size: string;
};

const Loader: React.FC<Props> = React.memo(({ size }) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div
        className={`
          border-l-primary-neon-blue
          m-auto
          h-${size}
          w-${size}
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
