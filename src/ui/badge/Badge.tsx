"use client";
import React from "react";
import classNames from "classnames";

type Props = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  counterValue?: number;
  withCloseButton?: boolean;
  isActive?: boolean;
};

const Badge: React.FC<Props> = React.memo(
  ({
    text,
    onClick,
    className = "",
    counterValue,
    withCloseButton,
    isActive = false,
  }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className={classNames(`
            ${className}
            flex
            h-10
            items-center
            justify-center
            gap-2
            rounded-full
            border
            px-3
            text-base
            transition
            hover:border-accent-green-yellow
            hover:text-accent-green-yellow
            active:border-accent-spring-bud
            active:text-accent-spring-bud
          `,
          {
            "border-accent-spring-bud text-accent-spring-bud": isActive,
            "border-white text-white": !isActive,
          },
        )}
      >
        {counterValue && (
          <div className="rounded-full bg-accent-green-yellow px-1 text-center text-xs text-onAccent-pakistan-green">
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
