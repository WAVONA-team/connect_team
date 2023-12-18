"use client";
import React from "react";

import buttonClassName from "./helpers/buttonClassName";

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
          ${buttonClassName}
        `}
      >
        {text}
      </button>
    );
  },
);

export default MainButton;
