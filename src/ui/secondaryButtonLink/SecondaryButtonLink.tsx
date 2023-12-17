import React from "react";
import classNames from "classnames";

import Link from "next/link";

type Props = {
  text: string;
  path: string;
  target: "_self" | "_blank" | "_top" | "_parent";
  className?: string;
  disabled?: boolean;
};

const SecondaryButtonLink: React.FC<Props> = React.memo(
  ({ text, path, target, className = "", disabled = false }) => {
    return (
      <Link
        href={path}
        target={target}
        className={classNames(
          className,
          `
            block
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
          `,
          {
            "border-secondary-cadet-grey text-secondary-cadet-grey pointer-events-none": disabled,
          },
        )}
      >
        {text}
      </Link>
    );
  },
);

export default SecondaryButtonLink;
