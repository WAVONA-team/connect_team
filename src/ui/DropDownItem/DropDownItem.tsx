import React from "react";
import classNames from "classnames";
import Link from "next/link";

import ItemClassNames from "./helpers/ItemClassNames";

type Props = {
  children: React.ReactNode;
  width?: string;
  className?: string;
  link?: string;
  isDisabled?: boolean;
};

const DropDownItem: React.FC<Props> = React.memo(
  ({
    children,
    width = "full",
    className = "",
    link = "",
    isDisabled = false,
  }) => {
    return !link || isDisabled ? (
      <div
        className={classNames(`
          ${className}
          ${ItemClassNames}
          w-${width}
          cursor-pointer
        `,
        {
          "pointer-events-none bg-secondary-cadet-grey": isDisabled,
        })}
      >
        {children}
      </div>
    ) : (
      <Link
        href={link}
        className={classNames(`
          ${className}
          ${ItemClassNames}
          w-${width}
          active:bg-primary-neon-blue
        `, {
          "pointer-events-none bg-secondary-cadet-grey": isDisabled,
        })}
      >
        {children}
      </Link>
    );
  },
);

export default DropDownItem;
