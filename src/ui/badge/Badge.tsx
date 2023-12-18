"use client";
import React from "react";

type Props = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  counterValue?: number;
  withCloseButton?: boolean;
};

const Badge: React.FC<Props> = React.memo(
  ({ text, onClick, className = "", counterValue, withCloseButton }) => {
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
          flex
          items-center
          gap-2
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
        {counterValue && (
          <div className="text-onAccent-pakistan-green bg-accent-green-yellow h-6 w-6 rounded-full">
            {counterValue}
          </div>
        )}
        {text}
        {withCloseButton && (
          <div
            className={`
              h-4
              w-4
              bg-[url("/images/close.svg")]
              bg-contain
              bg-center
              bg-no-repeat
            `}
          />
        )}
      </button>
    );
  },
);

export default Badge;
