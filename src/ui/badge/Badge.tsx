"use client";
import React from "react";

type Props = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Badge: React.FC<Props> = React.memo(
  ({ text, onClick, className = "" }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`
          ${className}
          hover:border-accent-green-yellow
          hover:text-accent-green-yellow
          active:border-accent-spring-bud
          active:text-accent-spring-bud
          rounded-2xl
          border
          border-white
          px-3
          py-1.5
          text-base
          text-white
          transition
        `}
      >
        {text}
      </button>
    );
  },
);

export default Badge;
