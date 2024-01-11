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
      <p className=' text-center h-9 border-b-2 border-b-secondary-cadet-gray text-secondary-cadet-grey px-3 py-2'>
        {title}
      </p >
    ) : (
      <Link
        href={link}
        className={`
          h-9 border-b-2 px-3 py-2 block text-center
          ${isActive ? ' border-b-primary-majorelle-blue text-primary-majorelle-blue'
          : 'border-b-zinc-300 text-zinc-300 hover:border-b-primary-powder-blue hover:text-primary-neon-blue'
          }`}
      >
        {title}
      </Link>
    )}
  </>
));

export default Tabs;
