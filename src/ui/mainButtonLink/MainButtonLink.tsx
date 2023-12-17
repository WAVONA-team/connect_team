import React from "react";
import classNames from "classnames";

import Link from "next/link";

type Props = {
  text: string;
  path: string;
  className?: string;
  disabled?: boolean;
};

const MainButtonLink: React.FC<Props> = React.memo(
  ({ text, path, className = "", disabled = false }) => {
    return (
      <Link
        href={path}
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
