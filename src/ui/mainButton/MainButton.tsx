"use client";
import React from "react";

type Props = {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick: (params: unknown) => void;
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
          bg-primary-button-fill
          hover:bg-primary-majorelle-blue
          focus:bg-primary-palatinate-blue
          disabled:bg-secondary-cadet-grey
          rounded
          border
          px-4
          py-3.5
          text-center
          text-sm
          text-white
          transition
        `}
      >
        {text}
      </button>
    );
  },
);

export default MainButton;
