import React from "react";
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
        <p className=" border-b-secondary-cadet-gray h-9 border-b-2 px-3 py-2 text-center text-secondary-cadet-grey">
          {title}
        </p>
      ) : (
        <Link
          href={link}
          className={`
          block h-9 border-b-2 px-3 py-2 text-center
          ${
            isActive
              ? " border-b-primary-majorelle-blue text-primary-majorelle-blue"
              : "hover:text-primary-button-fill border-b-zinc-300 text-zinc-300 hover:border-b-primary-powder-blue"
          }`}
        >
          {title}
        </Link>
      )}
    </>
  ),
);

export default Tabs;
