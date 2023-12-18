import React from "react";

type Props = {
  isActive?: boolean;
  isDisabled?: boolean;
  link?: string;
  title: string;
};

const Tabs: React.FC<Props> = React.memo(
  ({ isActive, isDisabled, link, title }) => (
  <>
    {isDisabled ? (
      <p className='w-fit h-9 border-b-2 border-b-secondary-cadet-gray text-secondary-cadet-grey px-3 py-2'>
        {title}
      </p >
    ) : (
      <a
        href={link}
        className={`h-9 border-b-2 px-3 py-2
          ${isActive ? ' border-b-primary-majorelle-blue text-primary-majorelle-blue'
          : 'border-b-zinc-300 text-zinc-300 hover:border-b-primary-powder-blue hover:text-primary-button-fill'
          }`}
      >
        {title}
      </a>
    )}
  </>
));

export default Tabs;
