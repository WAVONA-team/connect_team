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

const MainButtonLink: React.FC<Props> = React.memo(
  ({ text, path, target, className = "", disabled = false }) => {
    return (
      <Link
        href={path}
        target={target}
        className={classNames(
          className,
          `
            block
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
          `,
          {
            "pointer-events-none bg-secondary-cadet-grey": disabled,
          },
        )}
      >
        {text}
      </Link>
    );
  },
);

export default MainButtonLink;
