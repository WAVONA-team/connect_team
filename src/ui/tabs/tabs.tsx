import React from "react";
import classNames from "classnames";
import Link from "next/link";

type Props = {
  isActive?: boolean;
  isDisabled?: boolean;
  link: string;
  title: string;
};

const Tabs: React.FC<Props> = React.memo(
  ({ isActive, isDisabled, link, title }) => (
    <>
      {isDisabled ? (
        <p className="border-b-secondary-cadet-gray h-9 border-b-2 px-3 py-2 text-center text-secondary-cadet-grey">
          {title}
        </p>
      ) : (
        <Link
          href={link}
          className={classNames("block border-b-2 px-3 py-4 text-center", {
            "border-b-primary-majorelle-blue text-primary-majorelle-blue":
              isActive,
            "border-b-zinc-300 text-zinc-300 hover:border-b-primary-powder-blue hover:text-primary-neon-blue":
              !isActive,
          })}
        >
          {title}
        </Link>
      )}
    </>
  ),
);

export default Tabs;
