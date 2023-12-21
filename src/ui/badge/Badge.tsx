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
          flex
          h-10
          items-center
          justify-center
          gap-2
          rounded-full
          border
          border-white
          px-3
          text-base
          text-white
          transition
          hover:border-accent-green-yellow
          hover:text-accent-green-yellow
          active:border-accent-spring-bud
          active:text-accent-spring-bud
        `}
      >
        {counterValue && (
          <div className="text-onAccent-pakistan-green rounded-full bg-accent-green-yellow px-1 text-center text-xs">
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
