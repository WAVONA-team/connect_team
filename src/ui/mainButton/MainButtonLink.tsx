import React from "react";
import classNames from "classnames";

import buttonClassName from "./helpers/buttonClassName";
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
        className={classNames(className, buttonClassName, "block", {
          "pointer-events-none bg-secondary-cadet-grey": disabled,
        })}
      >
        {text}
      </Link>
    );
  },
);

export default MainButtonLink;
