"use client";
import React from "react";

type Props = {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick: (params: unknown) => void;
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
          text-primary-button-fill
          border-primary-button-fill
          hover:border-primary-majorelle-blue
          hover:text-primary-majorelle-blue
          focus:border-primary-palatinate-blue
          focus:text-primary-palatinate-blue
          disabled:border-secondary-cadet-grey
          disabled:text-secondary-cadet-grey
          rounded
          border
          px-4
          py-3.5
          text-center
          text-sm
          outline-none
          transition
        `}
      >
        {text}
      </button>
    );
  },
);

export default SecondaryButton;
