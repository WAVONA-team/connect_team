import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  isDisabled?: boolean;
  link?: string;
  title: string;
};

const DropDownLink: React.FC<Props> = React.memo(
  ({ image, isDisabled, link, title }) => (
  <>
    {isDisabled ? (
      <div className=' h-12 w-fit flex flex-row items-center gap-2 px-5 py-3 bg-secondary-cadet-grey text-onPrimary-lavender'>
        <Image src={image} alt={title} width={36} height={36} className=" rounded-full "></Image>
        <p>{title}</p>
      </div>
    ) : (
      <a
        href={link}
        className=' h-12 w-fit flex flex-row items-center gap-2 px-5 py-3 bg-transparent text-onPrimary-lavender hover:bg-primary-majorelle-blue active:bg-primary-button-fill'

      >
        <Image src={image} alt={title} width={36} height={36} className=" rounded-full "></Image>
        <p>{title}</p>
      </a>
    )}
  </>
));

export default DropDownLink;
