import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SectionWrapper: React.FC<Props> = React.memo(
  ({ children, className = "" }) => {
    return (
      <div
        className={`
        ${className}
        rounded-2xl
        border
        border-secondary-dark-purple
        bg-surface-raisin-black p-12
      `}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    );
  },
);

export default SectionWrapper;
