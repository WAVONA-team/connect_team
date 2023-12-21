import React from "react";
import Image from "next/image";
import  Link  from "next/link";

type Props = {
  image: string;
  isDisabled?: boolean;
  link?: string;
  title: string;
  number?: number;
};

const DropDownLink: React.FC<Props> = React.memo(
  ({ image, isDisabled, link, title, number }) => (
  <>
    {isDisabled ?? !link ? (
      <div className=' w-96 h-12 flex flex-row items-center gap-2 px-5 py-3 bg-secondary-cadet-grey text-onPrimary-lavender'>
        <Image src={image} alt={title} width={36} height={36} className=" rounded-full "></Image>
        <p>{title}</p>
        <div className=" rounded-full bg-accent-green-yellow px-2 text-black">
          <p>{number}</p>
        </div>
      </div>
    ) : (
      <Link
        href={link}
        className=' w-96 h-12  flex flex-row items-center gap-2 px-5 py-3 bg-transparent text-onPrimary-anti-flash-withe hover:bg-primary-majorelle-blue active:bg-primary-button-fill'

      >
        <Image src={image} alt={title} width={36} height={36}></Image>
        <p>{title}</p>
        <div className=" rounded-full bg-accent-green-yellow px-2 text-black">
          <p>{number}</p>
        </div>
      </Link>
    )}
  </>
));

export default DropDownLink;
