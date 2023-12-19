import React from "react";
import classNames from "classnames";

import Link from "next/link";
import buttonClassName from "./helpers/buttonClassName";

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
        className={classNames(className, buttonClassName, "block", {
          "pointer-events-none border-secondary-cadet-grey text-secondary-cadet-grey":
            disabled,
        })}
      >
        {text}
      </Link>
    );
  },
);

export default SecondaryButtonLink;
