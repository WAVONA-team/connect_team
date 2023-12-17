"use client";
import React from "react";

type Props = {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const SecondaryButton: React.FC<Props> = React.memo(
  ({ text, className = "", disabled = false, onClick }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`
          ${className}
          bg-secondary-rich-black
          rounded-lg
          border
          border-primary-button-fill
          px-4
          py-3.5
          text-center
          text-sm
          text-primary-button-fill
          outline-none
          transition
          hover:border-primary-majorelle-blue
          hover:text-primary-majorelle-blue
          active:border-primary-palatinate-blue
          active:text-primary-palatinate-blue
          disabled:border-secondary-cadet-grey
          disabled:text-secondary-cadet-grey
        `}
      >
        {text}
      </button>
    );
  },
);

export default SecondaryButton;
