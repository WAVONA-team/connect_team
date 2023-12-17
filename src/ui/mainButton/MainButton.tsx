"use client";
import React from "react";

type Props = {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const MainButton: React.FC<Props> = React.memo(
  ({ text, className = "", disabled = false, onClick }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`
          ${className}
          rounded-lg
          bg-primary-button-fill
          px-4
          py-3.5
          text-center
          text-sm
          text-white
          transition
          hover:bg-primary-majorelle-blue
          active:bg-primary-palatinate-blue
          disabled:bg-secondary-cadet-grey
        `}
      >
        {text}
      </button>
    );
  },
);

export default MainButton;
